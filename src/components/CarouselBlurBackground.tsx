import { View, Text, StyleSheet } from "react-native";
import React, { memo } from "react";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Colors } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Film } from "@/interface";

interface CarouselBlurBackgroundProps {
  item: Film;
  index: number;
  activeIndex: SharedValue<number>;
}

const CarouselBlurBackground = ({
  item,
  index,
  activeIndex,
}: CarouselBlurBackgroundProps) => {
  const inputRage = [index - 1, index, index + 1];
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(activeIndex.value, inputRage, [0, 1, 0]),
  }));

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Animated.Image
        source={{ uri: item.thumbnailUrl }}
        style={[{ ...StyleSheet.absoluteFillObject }, animatedStyle]}
        blurRadius={50}
      />
      <LinearGradient
        colors={[Colors.transparent, Colors.background]}
        style={{ flex: 1 }}
        start={{ x: 0.5, y: 0.2 }}
        end={{ x: 0.5, y: 1 }}
      />
    </View>
  );
};

export default memo(CarouselBlurBackground);
