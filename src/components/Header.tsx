import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ViewStyle,
  StyleProp,
} from "react-native";
import React from "react";
import { Colors, SPACING, Typography } from "@/theme";
import { AntDesign } from "@expo/vector-icons";
import { goBack } from "@/navigation/navigation.services";

interface HeaderProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  allowBack?: boolean;
}

const Header = ({ title, style, allowBack = true }: HeaderProps) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <View style={styles.left}>
        {allowBack && (
          <Pressable style={styles.backBtn} onPress={goBack}>
            <AntDesign name="arrowleft" size={24} color={Colors.background} />
          </Pressable>
        )}
      </View>
      <Text style={styles.txtTitle}>{title || ""}</Text>
      <View style={styles.right}></View>
    </View>
  );
};

export { Header };

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING.MEDIUM,
  },
  left: {
    flex: 1,
  },
  backBtn: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    flex: 1,
  },
  txtTitle: {
    ...Typography.TitleBold,
  },
});
