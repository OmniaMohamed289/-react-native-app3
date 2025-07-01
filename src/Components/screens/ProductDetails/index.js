import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProductDetails({ route }) {
  const { product } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} />

        <View style={styles.header}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>

        {/* Color Options */}
        <View style={styles.colorsContainer}>
          <Text style={styles.sectionTitle}>Color</Text>
          <View style={styles.colorsRow}>
            {["#DDBBB2", "#ECE2DD", "#000000"].map((color, index) => (
              <View
                key={index}
                style={[styles.colorCircle, { backgroundColor: color }]}
              />
            ))}
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{product.description}</Text>
        </View>

        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartButtonText}>Add To Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 25,
    zIndex: 10,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 450,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 5,
    fontWeight: "400",
  },
  price: {
    fontSize: 20,
    color: "black",
    marginBottom: 20,
    fontWeight: "800",
  },
  colorsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  colorsRow: {
    flexDirection: "row",
    gap: 10,
  },
  colorCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
  },
  descriptionContainer: {
    marginBottom: 30,
  },
  descriptionText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  cartButton: {
    backgroundColor: "#343434",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 40,
  },
  cartButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
