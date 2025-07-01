import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function HomeHeader() {
  return (
    <>
      <View style={styles.header}>
        <Feather name="menu" size={24} color="black" />
        <Text style={styles.title}>Gemstore</Text>
        <Feather name="bell" size={24} color="black" />
      </View>

      <View style={styles.categories}>
        <View style={styles.category}>
          <AntDesign
            style={[styles.icon, styles.black]}
            name="woman"
            size={24}
          />
          <Text style={styles.textIcon}>Women</Text>
        </View>

        <View style={styles.category}>
          <AntDesign style={styles.icon} name="man" size={24} />
          <Text style={styles.textIcon}>Men</Text>
        </View>

        <View style={styles.category}>
          <Fontisto style={styles.icon} name="sunglasses-alt" size={24} />
          <Text style={styles.textIcon}>Accessories</Text>
        </View>

        <View style={styles.category}>
          <MaterialIcons style={styles.icon} name="thermostat" size={24} />
          <Text style={styles.textIcon}>Beauty</Text>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop: 90,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  categories: {
    marginTop: 30,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  category: {
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#ccc9",
    padding: 15,
    width: 60,
    height: 60,
    borderRadius: 50,
    textAlign: "center",
    textAlignVertical: "center",
  },
  black: {
    backgroundColor: "#000",
    color: "#fff",
  },
  textIcon: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 12,
    color: "gray",
  },
});
