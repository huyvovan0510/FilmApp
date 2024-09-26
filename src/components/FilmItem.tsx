import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { memo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Colors,
  SPACING,
  THUMBNAIL_HEIGHT,
  THUMBNAIL_WIDTH,
  Typography,
} from "@/theme";
import { Film } from "@/interface";
import { Feather } from "@expo/vector-icons";
import { Button } from "./Button";
import { toggleFavorite } from "@/store/slices/favorite.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { navigate } from "@/navigation/navigation.services";
import { APP_ROUTER } from "@/navigation/navigation.constant";
import { TEST_ID } from "@/testing/test.contant";

interface FilmItemProps {
  item: Film;
  onFavorite?: (data: Film) => void;
  onPress?: (data: Film) => void;
  testID?: string;
}

const FilmItem = ({ item, testID }: FilmItemProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  const booking = useSelector((state: RootState) => state.booking);
  const { bookedFilms } = booking || {};
  const isBooked = !!bookedFilms?.[item.id];
  const isFavorite = !!favorites?.[item.id];
  const onFavorite = () => {
    dispatch(toggleFavorite(item));
  };

  const goToBooking = () => {
    navigate(APP_ROUTER.FILM_BOOKING_SCREEN, {
      filmInfo: item,
    });
  };

  return (
    <View style={styles.container} testID={testID}>
      <Pressable
        style={styles.favoriteBtn}
        onPress={onFavorite}
        testID={`${testID}-${TEST_ID.FAVORITE_BTN}`}
      >
        <Feather
          name="heart"
          color={isFavorite ? Colors.primary : Colors.secondary}
          size={20}
        />
      </Pressable>
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
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text numberOfLines={2} style={styles.desc}>
          {item.description}
        </Text>

        <Button
          testID={`${testID}-${TEST_ID.BOOK_BTN}`}
          title={isBooked ? "Booked" : "Book now"}
          onPress={goToBooking}
          style={styles.bookBtn}
          disabled={isBooked}
        />
      </LinearGradient>
    </View>
  );
};

export default memo(FilmItem);

const styles = StyleSheet.create({
  imgThumbnail: {
    width: "100%",
    height: "100%",
  },

  gradientStyle: {
    position: "absolute",
    bottom: 0,
    flex: 1,
    width: "100%",
    padding: SPACING.SMALL,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: THUMBNAIL_HEIGHT,
    width: THUMBNAIL_WIDTH,
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: SPACING.MEDIUM,
    backgroundColor: Colors.accent,
  },
  title: {
    ...Typography.Title,
    marginBottom: SPACING.SMALL,
  },
  desc: {
    ...Typography.XSmall,
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
  bookBtn: {
    marginHorizontal: SPACING.MEDIUM,
    marginVertical: SPACING.XSMALL,
  },
});
