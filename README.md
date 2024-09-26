# FilmApp

FilmApp is a mobile application built using Expo and React Native, designed for film enthusiasts to explore and interact with movie content.

## Technologies Used

- Expo
- React Native
- React Navigation
- Redux Toolkit
- Reanimated
- FlashList
- AsyncStorage

## Dependencies

```json
{
  "@expo/vector-icons": "^14.0.3",
  "@react-native-async-storage/async-storage": "1.23.1",
  "@react-navigation/bottom-tabs": "^6.6.1",
  "@react-navigation/native": "^6.1.18",
  "@react-navigation/native-stack": "^6.11.0",
  "@reduxjs/toolkit": "^2.2.7",
  "@shopify/flash-list": "1.6.4",
  "expo": "~51.0.28",
  "expo-linear-gradient": "~13.0.2",
  "expo-status-bar": "~1.12.1",
  "react": "18.2.0",
  "react-native": "0.74.5",
  "react-native-gesture-handler": "~2.16.1",
  "react-native-reanimated": "~3.10.1",
  "react-native-reanimated-carousel": "^3.5.1",
  "react-native-safe-area-context": "4.10.5",
  "react-native-screens": "3.31.1",
  "react-redux": "^9.1.2",
  "redux-persist": "^6.0.0"
}
```

## Getting Started

### Prerequisites

- Node.js
- Yarn
- Expo CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   yarn install
   ```

## Running the App

### Android

To run the app on Android:

```
yarn android
```

### iOS

To run the app on iOS:

```
cd ios && yarn ios
```

## Performance Testing

For optimal performance testing, enable JS minification in the developer settings. As noted in the documentation:

> Do not test performance with JS dev mode on. Make sure you're in release mode. `FlashList` can appear slower while in dev mode due to a small render buffer.

## Running Tests

To run the test suite:

```
yarn test
```
