import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { APP_ROUTER } from "./navigation.constant";
import { navigate } from "./navigation.services";
import { Colors } from "@/theme";
import { TEST_ID } from "@/testing/test.contant";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TAB_ICON = {
  [APP_ROUTER.HOME_SCREEN]: "home",
  [APP_ROUTER.FAVORITE_SCREEN]: "heart",
  [APP_ROUTER.FILM_BOOKED_SCREEN]: "film",
} as const;

type IconName = (typeof TAB_ICON)[keyof typeof TAB_ICON];

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors }) => {
  const { bottom } = useSafeAreaInsets();
  const renderTab = (route: any, index: number) => {
    const { options } = descriptors[route.key];

    const isFocused = state.index === index;

    const onPress = () => {
      if (!isFocused) {
        navigate(route.name);
      }
    };

    const iconName = TAB_ICON[route.name as keyof typeof TAB_ICON] || "home";
    const iconNameFocused = `${iconName}` as IconName;
    const iconNameUnfocused = `${iconName}-outline` as IconName;

    return (
      <TouchableOpacity
        testID={`${TEST_ID.TAB_BAR_ITEM}-${route.name}`}
        key={index}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        onPress={onPress}
        style={styles.tabButton}
      >
        <Ionicons
          name={isFocused ? iconNameFocused : iconNameUnfocused}
          size={24}
          color={isFocused ? Colors.while : Colors.accent}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: bottom + 20,
        },
      ]}
    >
      {state.routes.map(renderTab)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.ticket,
    paddingBottom: 20,
    paddingTop: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomTabBar;
