🔧 Features Overview
✅ Service Cards UI with name, availability, rating, price, and contact.

✅ Infinite Scrolling for seamless loading of providers.

✅ Search Bar with real-time filtering by name, service, or area.

✅ Profile Page (placeholder) with upcoming features like booking history.

✅ Service Detail Page with provider bio, pricing, experience, and call button.

✅ Random Suggestions for other providers at the bottom of detail view.

✅ Usability Heuristics like loading spinners, empty states, and feedback messages.

✅ Responsive Layout with reusable UI components (ServiceCard, LoadingSpinner, etc.)

🗂️ Folder Structure
pgsql
Copy
Edit
my-reli-app/
├── app/                   ← Expo Router pages
│   ├── _layout.tsx        ← Root layout with stack navigation
│   ├── (tabs)/            ← Tab routes: Home & Profile
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── profile.tsx
│   └── service/
│       └── [id].tsx       ← Service detail screen
├── src/
│   ├── components/        ← UI and feature components
│   ├── screens/           ← Full screen implementations
│   ├── data/              ← Mock service provider data
│   ├── types/             ← TypeScript interfaces
│   ├── utils/             ← Helper functions (formatting, filters, debounce, etc.)
│   └── constants/         ← Theme values for colors, spacing, typography
├── assets/                ← Images, icons, etc.
├── App.tsx                ← Expo Router entry point
├── app.json               ← Expo app config
├── metro.config.js        ← Metro bundler config
├── tsconfig.json          ← TypeScript settings
└── package.json
📦 Technologies Used
Expo SDK 53

React Native

TypeScript

Expo Router v5

React Navigation (Tabs + Stack)

Expo Modules: react-native-gesture-handler, expo-status-bar, react-native-safe-area-context

💡 UX Best Practices Followed
Clean UI with minimal visual clutter

Status feedback (loading spinners, availability badges)

Meaningful navigation (stack for service detail, tabs for Home/Profile)

Error handling with fallback UI

Search optimization with debounce and live filtering

🚀 How to Run
bash
Copy
Edit
npm install         # or yarn
npx expo start      # starts development server
🧪 Demo Use Case
A user opens the app, searches for "electrician", taps a provider card, views their pricing and availability, and calls directly from the detail screen.

🌱 Future Enhancements
🔐 Login/Sign-up functionality (auth)

🗺️ Location-based filtering

📝 Booking system with calendar

🛠️ Admin panel for provider management

💬 Chat feature with providers
