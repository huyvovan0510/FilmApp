import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import React, { memo } from "react";
import { Colors, SPACING, Typography } from "@/theme";

const SIT_DATA = ["G1", "G2", "G3", "G4", "G5", "H1", "H2", "H3", "H4", "H5"];
const keyExtractor = (item: string) => `${item}`;

interface SeatSelectionProps {
  onSelectSeat: (sit: string) => void;
  sitSelected?: string;
}

const SeatSelection = memo(
  ({ onSelectSeat, sitSelected }: SeatSelectionProps) => {
    const renderSeat = ({ item }: { item: string }) => {
      const isSelected = item === sitSelected;
      return (
        <Pressable
          style={[
            styles.itemContainer,
            { borderColor: isSelected ? Colors.while : Colors.accent },
          ]}
          onPress={() => onSelectSeat(item)}
        >
          <Text style={styles.txtSit}>{item}</Text>
        </Pressable>
      );
    };
    return (
      <View style={styles.container}>
        <Text style={styles.txtTile}>{"Select seat"}</Text>
        <View style={{ alignSelf: "center" }}>
          <FlatList
            data={SIT_DATA}
            keyExtractor={keyExtractor}
            renderItem={renderSeat}
            numColumns={5}
          />
        </View>
      </View>
    );
  }
);

export { SeatSelection };
const styles = StyleSheet.create({
  itemContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.accent,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SPACING.SMALL,
    marginBottom: SPACING.SMALL,
  },
  txtSit: {
    ...Typography.Small,
  },
  container: {
    paddingHorizontal: SPACING.MEDIUM,
    marginVertical: SPACING.LARGE,
  },
  txtTile: {
    ...Typography.Title,

    marginBottom: SPACING.MEDIUM,
  },
});
