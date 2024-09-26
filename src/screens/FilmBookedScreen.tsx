import { View, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Container from "@/components/Container";
import { SCREEN_HEIGHT, SCREEN_WITH, SPACING } from "@/theme";

import { FlashList } from "@shopify/flash-list";
import { Film } from "@/interface";
import { EmptySpace, Header, Ticket } from "@/components";
import { ticket } from "@/assets/images";

const keyExtractor = (item: Film, index: number) => `${index}-${item.title}`;

const FilmBookedScreen = () => {
  const booking = useSelector((state: RootState) => state.booking);
  const { bookedFilms } = booking || {};
  const listTicket = Object.values(bookedFilms || {});

  const renderItem = ({ item }: { item: Film }) => {
    return <Ticket filmInfo={item} />;
  };

  const renderEmptyState = () => {
    return (
      <EmptySpace
        imageSrc={ticket}
        title="You have no booked tickets at the moment. Start booking your next movie experience!"
      />
    );
  };
  return (
    <Container style={styles.container}>
      <Header title=" Your Tickets" allowBack={false} />
      <FlashList
        data={listTicket}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.spacing} />}
        ListEmptyComponent={renderEmptyState}
      />
    </Container>
  );
};

export { FilmBookedScreen };

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
  spacing: {
    height: SPACING.MEDIUM,
  },
});
