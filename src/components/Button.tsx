import { Colors } from "@/theme";
import React from "react";
import {
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Pressable,
} from "react-native";

interface ButtonProps {
  onPress?: () => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <Pressable
      style={[styles.button, style, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle, disabled && styles.disabledText]}>
        {title}
      </Text>
    </Pressable>
  );
};

export { Button };
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  disabled: {
    backgroundColor: "#A9A9A9",
  },
  disabledText: {
    color: "#D3D3D3",
  },
});
