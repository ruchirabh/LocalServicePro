// src/components/features/ServiceList.tsx
import React, { useState, useEffect, useCallback } from "react";
import { FlatList, View, Text, StyleSheet, RefreshControl } from "react-native";
import { ServiceCard } from "../ui/ServiceCard";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { ServiceProvider } from "../../types";
import { MOCK_PROVIDERS } from "../../data/mockData";
import { COLORS, SPACING } from "../../constants/theme";

interface ServiceListProps {
  searchQuery: string;
  onProviderPress: (provider: ServiceProvider) => void;
}

const ITEMS_PER_PAGE = 10;

export const ServiceList: React.FC<ServiceListProps> = ({
  searchQuery,
  onProviderPress,
}) => {
  const [providers, setProviders] = useState<ServiceProvider[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  // Filter providers based on search query
  const getFilteredProviders = useCallback(() => {
    if (!searchQuery.trim()) return MOCK_PROVIDERS;

    return MOCK_PROVIDERS.filter(
      (provider) =>
        provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.area.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Load initial data
  const loadInitialData = useCallback(async () => {
    setLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const filteredProviders = getFilteredProviders();
    const initialProviders = filteredProviders.slice(0, ITEMS_PER_PAGE);

    setProviders(initialProviders);
    setPage(2);
    setHasMore(filteredProviders.length > ITEMS_PER_PAGE);
    setLoading(false);
  }, [getFilteredProviders]);

  // Load more data for infinite scroll
  const loadMoreData = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const filteredProviders = getFilteredProviders();
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const newProviders = filteredProviders.slice(startIndex, endIndex);

    if (newProviders.length > 0) {
      setProviders((prev) => [...prev, ...newProviders]);
      setPage((prev) => prev + 1);
      setHasMore(endIndex < filteredProviders.length);
    } else {
      setHasMore(false);
    }

    setLoading(false);
  }, [loading, hasMore, page, getFilteredProviders]);

  // Refresh data
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setPage(1);
    await loadInitialData();
    setRefreshing(false);
  }, [loadInitialData]);

  // Load initial data on mount or when search changes
  useEffect(() => {
    setPage(1);
    loadInitialData();
  }, [searchQuery]);

  // Render individual service card
  const renderServiceCard = ({ item }: { item: ServiceProvider }) => (
    <ServiceCard provider={item} onPress={() => onProviderPress(item)} />
  );

  // Render footer loader
  const renderFooter = () => {
    if (!loading || providers.length === 0) return null;
    return <LoadingSpinner />;
  };

  useEffect(() => {
    console.log(
      "Current providers IDs:",
      providers.map((p) => p.id)
    );
  }, [providers]);

  // Render empty state
  const renderEmpty = () => {
    if (loading && providers.length === 0) {
      return <LoadingSpinner />;
    }

    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          {searchQuery.trim()
            ? `No providers found for "${searchQuery}"`
            : "No service providers available"}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      data={providers}
      renderItem={renderServiceCard}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
      ListEmptyComponent={renderEmpty}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[COLORS.primary]}
          tintColor={COLORS.primary}
        />
      }
      contentContainerStyle={
        providers.length === 0 ? styles.emptyList : undefined
      }
    />
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xl * 2,
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.gray500,
    textAlign: "center",
  },
  emptyList: {
    flexGrow: 1,
  },
});
