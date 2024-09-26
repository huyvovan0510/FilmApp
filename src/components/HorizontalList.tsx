import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { FilmData } from "@/assets/data";
import { Film } from "@/interface";
import { SPACING, THUMBNAIL_WIDTH, Typography } from "@/theme";
import FilmItem from "./FilmItem";
import { navigate } from "@/navigation/navigation.services";
import { APP_ROUTER } from "@/navigation/navigation.constant";
interface HorizontalListProps {
  title: string;
}

const keyExtractor = (item: Film, index: number) => `${index}-${item.title}`;

const HorizontalList = ({ title }: HorizontalListProps) => {
  const renderItem = ({ item }: { item: Film }) => {
    return <FilmItem item={item} />;
  };

  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <FlashList
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
