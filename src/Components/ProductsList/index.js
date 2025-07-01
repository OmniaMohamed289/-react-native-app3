import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from "react-native";
import React, { useState, useEffect } from "react";

export default function ProductsList({ navigation }) {
  const [products, setProducts] = useState([]);
  const [status, setstatus] = useState(true);
  const [show, setShow] = useState("show All");

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
      })
      .catch(error => console.error("Fetch Error:", error));
  }, []);

  const handleShowAll = () => {
    // status==true?setstatus(false)&&setShow("Show Less"):setstatus(true)&&setShow("Show All")
     if (status) {
    setstatus(false);
    setShow("Show Less");
  } else {
    setstatus(true);
    setShow("Show All");
  }
  
  };

const handleDetails = (product) => {
  navigation.navigate('ProductDetails', { product });
};

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.Product} onPress={() => handleDetails(item)}>
      <Image style={styles.Productimg} source={{ uri: item.thumbnail }} />
      <View style={styles.Prodetails}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.Productscontainer}>
      <View style={styles.Productsheader}>
        <Text style={styles.FeatureProducts}>Feature Products</Text>
        <TouchableOpacity style={styles.bttnShow} onPress={handleShowAll}>
          <Text style={styles.bttnText}>{show}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal={status}
        decelerationRate="fast" 
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ProductsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Productscontainer: {
  },
  Productsheader: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical:25,
            marginTop: 30,

  },
  FeatureProducts: {
    fontSize: 20,
    fontWeight: "700",

  },
  bttnShow: {
    padding: 5,
  },
  bttnText: {
    color: "#9B9B9B",
    fontSize: 15,
  },
  ProductsList: {
    paddingHorizontal: 0,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center"
  },
  Product: {
    marginRight: 20,
    width: 141,
    marginBottom:30,
        padding:10,
          elevation:10,
marginLeft:15,
  backgroundColor: "#ffff",
  minWidth:160,
  paddingRight:10
  },
  Productimg: {
    borderRadius: 20,
    width: 141,
    height: 186,
    resizeMode: "cover",
    backgroundColor:'#E0E0E0',
    marginRight:10
  },
  Prodetails: {
    marginTop: 12,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 6,
  },
});
