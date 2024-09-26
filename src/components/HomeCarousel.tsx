import { View, StyleSheet } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { CAROUSEL_HEIGHT, CAROUSEL_WIDTH, SCREEN_WITH } from "@/theme/spacing";
import { FilmData } from "@/assets/data";
import { Film } from "@/interface";
import { useSharedValue } from "react-native-reanimated";
import CarouselItem from "./CarouselItem";
import CarouselBlurBackground from "./CarouselBlurBackground";

const HomeCarousel = ({ testID }: { testID: string }) => {
  const activeIndex = useSharedValue(0);
  const renderItem = ({ item }: { item: Film }) => {
    return <CarouselItem item={item} />;
  };

  const renderBlurBackground = (item: Film, index: number) => {
    return (
      <CarouselBlurBackground
        key={`img-${index}`}
        activeIndex={activeIndex}
        index={index}
        item={item}
      />
    );
  };

  return (
    <View style={{ height: CAROUSEL_HEIGHT }}>
      <View style={styles.backGroundBlur}>
        {FilmData.map(renderBlurBackground)}
      </View>
      <Carousel
        onProgressChange={(_, index) => {
          activeIndex.value = index;
        }}
        style={styles.carousel}
        width={CAROUSEL_WIDTH}
        height={CAROUSEL_HEIGHT}
        data={FilmData}
        renderItem={renderItem}
        mode="parallax"
        testID={testID}
      />
    </View>
  );
};

export { HomeCarousel };
const styles = StyleSheet.create({
  carousel: {
    width: SCREEN_WITH,
    justifyContent: "center",
    alignItems: "center",
  },

  backGroundBlur: {
    ...StyleSheet.absoluteFillObject,
  },
});
