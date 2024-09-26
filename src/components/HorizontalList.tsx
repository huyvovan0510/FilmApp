import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { FilmData } from "@/assets/data";
import { Film } from "@/interface";
import { SPACING, THUMBNAIL_WIDTH, Typography } from "@/theme";
import FilmItem from "./FilmItem";
import { navigate } from "@/navigation/navigation.services";
import { APP_ROUTER } from "@/navigation/navigation.constant";
import { TEST_ID } from "@/testing/test.contant";
interface HorizontalListProps {
  title: string;
  testID?: string;
}

const keyExtractor = (item: Film, index: number) => `${index}-${item.title}`;

const HorizontalList = ({ title, testID }: HorizontalListProps) => {
  const renderItem = ({ item, index }: { item: Film; index: number }) => {
    return (
      <FilmItem
        item={item}
        testID={`${testID}-${TEST_ID.FILM_ITEM}-${index}`}
      />
    );
  };

  return (
    <View testID={testID}>
      <Text style={styles.label}>{title}</Text>
      <FlashList
        // testID={testID}
        horizontal
        data={FilmData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        estimatedItemSize={THUMBNAIL_WIDTH}
      />
    </View>
  );
};

export { HorizontalList };

const styles = StyleSheet.create({
  label: {
    ...Typography.TitleBold,
    marginBottom: SPACING.MEDIUM,
    marginLeft: SPACING.MEDIUM,
  },
});
