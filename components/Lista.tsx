import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SectionList,
  ScrollView,
} from "react-native";
import React from "react";
import data from "../services/data";
import organizer from "../helpers/organizer";

export default function SectionListExampleConverted() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={organizer(data)}
        renderItem={({ item }) => (
          <View style={styles.data}>
            <Text style={styles.item}>{item.id}</Text>
            <Text style={styles.item}>{item.brand}</Text>
            <Text style={styles.item}>{item.model}</Text>
            <Text style={styles.item}>{item.year}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  data: {
    marginBottom: 15,
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "center",
  },
  item: {
    padding: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 40,
    marginRight: 40,
    marginLeft: 40,
    borderRadius: 10,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: "#EB4348",
  },
});
