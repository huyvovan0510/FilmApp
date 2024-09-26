import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Colors, FAVORITE_ITEM_HEIGHT, SPACING, Typography } from "@/theme";
import { Film } from "@/interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleFavorite } from "@/store/slices/favorite.slice";

interface FavoriteItemProps {
  item: Film;
  isFavorite: boolean;
}

const FavoriteItem = ({ item, isFavorite }: FavoriteItemProps) => {
  const dispatch = useDispatch();

  const onFavorite = () => {
    dispatch(toggleFavorite(item));
  };
  return (
    <View style={styles.favoriteItem}>
      <Pressable style={styles.favoriteBtn} onPress={onFavorite}>
        <Feather
          name="heart"
          color={isFavorite ? Colors.primary : Colors.secondary}
          size={20}
        />
      </Pressable>
      <Image source={{ uri: item.thumbnailUrl }} style={styles.imgThumb} />
      <View style={styles.flex1}>
        <Text style={styles.txtTitle}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
    </View>
  );
};

export { FavoriteItem };

const styles = StyleSheet.create({
  thumbnail: {
    width: 200,
    height: 250,
    borderRadius: 20,
  },
  favoriteItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: SPACING.MEDIUM,
    backgroundColor: Colors.ticket,
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
