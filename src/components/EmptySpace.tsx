import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Colors, SPACING, Typography } from "@/theme";

interface EmptySpaceProps {
  imageSrc: ImageSourcePropType;
  title: string;
}

const EmptySpace = ({ imageSrc, title }: EmptySpaceProps) => {
  return (
    <View style={styles.container}>
      <Image source={imageSrc} style={styles.emptyImg} />
      <Text style={styles.txtEmpty}>{title}</Text>
    </View>
  );
};

export { EmptySpace };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.LARGE,
    marginTop: SPACING.EXTRA_LARGE,
    paddingVertical: SPACING.EXTRA_LARGE,
  },
  txtEmpty: {
    ...Typography.Title,
    textAlign: "center",
  },
  emptyImg: {
    width: 100,
    height: 100,
    tintColor: Colors.while,
    marginBottom: SPACING.MEDIUM,
  },
});
