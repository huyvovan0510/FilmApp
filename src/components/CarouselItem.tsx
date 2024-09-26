import { View, Text, Image, StyleSheet } from "react-native";
import React, { memo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { CAROUSEL_HEIGHT, Colors, SPACING, Typography } from "@/theme";
import { Film } from "@/interface";

interface CarouselItemProps {
  item: Film;
}

const CarouselItem = ({ item }: CarouselItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.thumbnailUrl }}
        style={styles.imgThumbnail}
        resizeMode="cover"
      />
      <LinearGradient
        colors={[Colors.transparent, Colors.background]}
        style={styles.gradientStyle}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1.3 }}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </LinearGradient>
    </View>
  );
};

export default memo(CarouselItem);

const styles = StyleSheet.create({
  imgThumbnail: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.accent,
  },

  gradientStyle: {
    position: "absolute",
    bottom: 0,
    flex: 1,
    width: "100%",
    padding: SPACING.LARGE,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: CAROUSEL_HEIGHT,
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: SPACING.MEDIUM,
  },
  title: {
    ...Typography.Heading,
    marginBottom: SPACING.SMALL,
  },
  desc: {
    ...Typography.Small,
  },
});
