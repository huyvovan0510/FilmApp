import {
  View,
  StyleSheet,
  FlatList,
  FlatListComponent,
  Image,
} from "react-native";
import React from "react";
import { Colors } from "@/theme";
import { HomeCarousel, HorizontalList } from "@/components";
import { FlashList } from "@shopify/flash-list";
import Carousel from "react-native-reanimated-carousel";
import { toggleFavorite } from "@/store/slices/favorite.slice";

const keyExtractor = (_: any, index: number) => `${_}`;
const titles = {
  0: "Top Rating",
  1: "Top 10 movie hot",
  2: "Comedy movie",
  3: "Film action",
  4: "20 movie hot",
  5: "Love movie",
  6: "Gun action",
} as {
  [key: number]: string;
};

const HomeScreen = () => {
  const homeSectionData = Array.from(Array(1000).keys());

  const renderHomeSection = ({ item, index }: { item: any; index: number }) => {
    return <HorizontalList title={titles[index] || `Row data - ${index}`} />;
  };
  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <FlashList
        ListHeaderComponent={HomeCarousel}
        data={homeSectionData}
        keyExtractor={keyExtractor}
        renderItem={renderHomeSection}
        estimatedItemSize={340}
      />
    </View>
  );
};

export { HomeScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
