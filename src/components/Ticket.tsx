import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Film } from "@/interface";
import { Colors, SPACING, Typography } from "@/theme";
import { Button } from "./Button";

interface TicketProps {
  filmInfo: Film;
}

const Ticket = ({ filmInfo }: TicketProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowInfo}>
        <Image
          source={{ uri: filmInfo.thumbnailUrl }}
          style={styles.filmThumb}
        />
        <View style={styles.boxInfo}>
          <Text style={styles.txtTitle}>{filmInfo.title}</Text>
          <Text style={styles.desc}>{filmInfo.description}</Text>
          <Button title="Booked" disabled style={styles.btn} />
        </View>
      </View>
    </View>
  );
};

export { Ticket };

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.ticket,
    padding: SPACING.MEDIUM,
  },
  filmThumb: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginRight: SPACING.MEDIUM,
  },
  rowInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtTitle: {
    ...Typography.Title,
    marginBottom: SPACING.SMALL,
  },
  desc: {
    ...Typography.Small,
  },
  boxInfo: {
    flex: 1,
  },
  btn: {
    alignSelf: "flex-start",
    marginTop: SPACING.MEDIUM,
  },
});
