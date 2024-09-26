import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FavoriteScreen,
  FilmBookedScreen,
  FilmBookingScreen,
  HomeScreen,
} from "@/screens";
import { APP_ROUTER, COMMON_SCREEN_OPTIONS } from "./navigation.constant";
import { setNavigatorRef } from "./navigation.services";
import { Film } from "@/interface";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export type RootStackParamList = {
  [APP_ROUTER.HOME_SCREEN]: undefined;
  [APP_ROUTER.FILM_BOOKED_SCREEN]: undefined;
  [APP_ROUTER.FILM_BOOKING_SCREEN]: {
    filmInfo: Film;
  };
  [APP_ROUTER.FAVORITE_SCREEN]: undefined;
};

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={COMMON_SCREEN_OPTIONS}>
      <Tab.Screen name={APP_ROUTER.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen
        name={APP_ROUTER.FAVORITE_SCREEN}
        component={FavoriteScreen}
      />
      <Tab.Screen
        name={APP_ROUTER.FILM_BOOKED_SCREEN}
        component={FilmBookedScreen}
      />
    </Tab.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <NavigationContainer ref={(ref) => setNavigatorRef(ref)} o>
      <Stack.Navigator screenOptions={COMMON_SCREEN_OPTIONS}>
        <Stack.Screen name={APP_ROUTER.MAIN_TAB} component={MainTab} />
        <Stack.Screen
          name={APP_ROUTER.FILM_BOOKING_SCREEN}
          component={FilmBookingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { RootNavigation };

// https://github.com/huyvovan0510/FilmApp.git
