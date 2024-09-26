import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import React, { useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation";
import { APP_ROUTER } from "@/navigation/navigation.constant";
import {
  Colors,
  SCREEN_HEIGHT,
  SCREEN_WITH,
  SPACING,
  Typography,
} from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Header, SeatSelection } from "@/components";
import { bookingFilm } from "@/store/slices/booking.slice";
import { useDispatch } from "react-redux";
import { navigate } from "@/navigation/navigation.services";
import { TEST_ID } from "@/testing/test.contant";

type FilmBookingScreenParams = RouteProp<
  RootStackParamList,
  typeof APP_ROUTER.FILM_BOOKING_SCREEN
>;

const FilmBookingScreen = () => {
  const { params } = useRoute<FilmBookingScreenParams>();
  const { filmInfo } = params || {};
  const [selectedSeat, setSelectSeat] = useState<string | undefined>();
  const dispatch = useDispatch();
  const onSelectSeat = (sitId: string) => {
    if (selectedSeat == sitId) return;
    setSelectSeat(sitId);
  };

  const onBookTicket = () => {
    dispatch(bookingFilm(filmInfo));
    navigate(APP_ROUTER.FILM_BOOKED_SCREEN);
  };
  return (
    <View style={styles.container} testID={TEST_ID.BOOKING_SCREEN}>
      <ImageBackground
        source={{ uri: filmInfo.thumbnailUrl }}
        style={styles.blurThumbnail}
        blurRadius={50}
      >
        <Header style={styles.header} title="Booking Page" />
        <LinearGradient
          colors={[Colors.transparent, Colors.background]}
          style={styles.gradientStyle}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        >
          <View style={styles.rowInfo}>
            <Image
              source={{ uri: filmInfo.thumbnailUrl }}
              style={styles.thumbnail}
            />
            <View style={styles.boxInfo}>
              <Text style={styles.txtTitle}>{filmInfo.title}</Text>
              <Text style={styles.desc}>{filmInfo.description}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.content}>
        <SeatSelection
          sitSelected={selectedSeat}
          onSelectSeat={onSelectSeat}
          testID={TEST_ID.SEAT_SELECTION}
        />
      </View>
      <Button
        title="Book now"
        style={styles.btnBook}
        onPress={onBookTicket}
        disabled={!selectedSeat}
        testID={TEST_ID.FINISH_BOOK_BTN}
      />
    </View>
  );
};

export { FilmBookingScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  blurThumbnail: {
    width: SCREEN_WITH,
    height: SCREEN_HEIGHT * 0.4,
    justifyContent: "flex-end",
  },
  gradientStyle: {
    paddingHorizontal: SPACING.MEDIUM,
    paddingBottom: SPACING.MEDIUM,
  },
  thumbnail: {
    width: 120,
    height: 200,
    borderRadius: 20,
    marginRight: SPACING.MEDIUM,
  },
  rowInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtTitle: {
    ...Typography.Title,
    marginBottom: SPACING.MEDIUM,
  },
  desc: {
    ...Typography.Small,
  },
  boxInfo: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  btnBook: {
    marginHorizontal: SPACING.MEDIUM,
  },
  header: {
    position: "absolute",
    zIndex: 1,
    top: 0,
  },
});
