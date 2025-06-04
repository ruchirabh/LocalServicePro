# LocalServicePro

A cross-platform mobile app built with **React Native**, **Expo Router**, and **TypeScript** that allows users to browse, search, and contact local service providers such as plumbers, electricians, and mechanics.

---

## Technologies Used

- **React Native** (via Expo)
- **Expo Router** for file-based navigation
- **TypeScript** for strong typing and maintainability
- **React Navigation** (Bottom Tabs & Stack)
- **React Native Gesture Handler & Reanimated**
- **Expo Modules**: StatusBar, Safe Area Context, Constants, Linking

---

##  Design Rationale

- **Modular Architecture**: Screens, components, types, and utilities are neatly separated under `src/` to ensure reusability and scalability.
- **Expo Router**: Used to simplify navigation structure via folder-based routing (Next.js style).
- **Custom Theming**: A centralized `theme.ts` defines colors, spacing, and font sizes for consistent design.
- **Mock Data**: Providers are dynamically rendered using mock data with infinite scroll, enabling offline development and testing.
- **Extensibility**: Structure is prepared for future features like authentication, bookings, and provider reviews.

---

##  Usability Heuristics Focused

| Heuristic                                | How it's Applied                                                |
|------------------------------------------|-----------------------------------------------------------------|
|  **Visibility of System Status**         | Loading spinners, availability badges, refresh indicators       |
|  **Match Between System & Real World**   | Familiar terms: "electrician", "call", "area", "available"      |
|  **User Control & Freedom**              | Back navigation, cancel buttons, pull-to-refresh                |
|  **Consistency & Standards**             | Standard icons, tab bar UI, predictable button layouts          |
|  **Recognition Over Recall**             | Search, iconography, tab names, and profile prompts             | 
|  **Minimalist Design**                   | Clean layout with focused cards, typography, and spacing        |
|  **Error Prevention & Handling**         | Graceful empty states, error messages, and confirmation dialogs |

---

## 🛠How to Run Locally

1. **Clone the repo**

git clone https://github.com/ruchirabh/LocalServicePro.git
cd LocalServicePro

2.**Install dependencies**

npm install

3.**Start the Expo server**

npx expo start


