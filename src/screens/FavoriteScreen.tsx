import { View, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Container from "@/components/Container";
import {
  Colors,
  FAVORITE_ITEM_HEIGHT,
  SCREEN_HEIGHT,
  SCREEN_WITH,
  SPACING,
  Typography,
} from "@/theme";

import { FlashList } from "@shopify/flash-list";
import { Film } from "@/interface";
import { EmptySpace, FavoriteItem, Header } from "@/components";
import { favoriteEmpty } from "@/assets/images";
import { TEST_ID } from "@/testing/test.contant";

const keyExtractor = (item: Film, index: number) => `${index}-${item.title}`;

const FavoriteScreen = () => {
  const favorites = useSelector((state: RootState) => state.favorites);
  const listsFavorite = Object.values(favorites || {});

  const renderItem = ({ item }: { item: Film }) => {
    const isFavorite = !!favorites[item.id];
    return <FavoriteItem item={item} isFavorite={isFavorite} />;
  };

  const renderEmptyState = () => {
    return (
      <EmptySpace
        imageSrc={favoriteEmpty}
        title="No favorites yet. Explore and add movies to your favorites"
      />
    );
  };

  return (
    <Container style={styles.container} testID={TEST_ID.FAVORITE_SCREEN}>
      <Header title="Favorites" allowBack={false} />
      <FlashList
        testID={TEST_ID.FAVORITE_LIST}
        data={listsFavorite}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.spacing} />}
        estimatedItemSize={FAVORITE_ITEM_HEIGHT}
        ListEmptyComponent={renderEmptyState}
      />
    </Container>
  );
};

export { FavoriteScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blurThumbnail: {
    width: SCREEN_WITH,
    height: SCREEN_HEIGHT * 0.5,
  },
  gradientStyle: {
    flex: 1,
  },
  thumbnail: {
    width: 200,
    height: 250,
    borderRadius: 20,
  },
  favoriteItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: SPACING.MEDIUM,
    backgroundColor: Colors.accent,
    height: FAVORITE_ITEM_HEIGHT,
    borderRadius: 8,
    paddingHorizontal: SPACING.MEDIUM,
  },
  imgThumb: {
    width: 90,
    height: 160,
    borderRadius: 12,
    marginRight: SPACING.MEDIUM,
  },
  txtTitle: {
    ...Typography.Title,
    marginBottom: SPACING.SMALL,
  },
  desc: {
    ...Typography.Small,
  },
  flex1: {
    flex: 1,
  },
  spacing: {
    height: SPACING.MEDIUM,
  },
  favoriteBtn: {
    width: 40,
    borderRadius: 25,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
    position: "absolute",
    zIndex: 1,
    top: 10,
    right: 10,
  },
});
