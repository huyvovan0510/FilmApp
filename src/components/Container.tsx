import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/theme";

interface ContainerProps {
  children?: React.ReactNode;
  testID?: string;
  style?: StyleProp<ViewStyle>;
}
const Container = ({ children, style, testID }: ContainerProps) => {
  return (
    <SafeAreaView
      style={[styles.container, style]}
      edges={["top"]}
      testID={testID}
    >
      {children}
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
});
