import 'react-native-gesture-handler';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <Slot />
      <StatusBar style="auto" />
    </>
  );
}
