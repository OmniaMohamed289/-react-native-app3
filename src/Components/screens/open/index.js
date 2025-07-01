import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function OpenScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../../assets/image 45.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.text}>
                    <Text style={styles.welcome}>Welcome to GemStore! </Text>
                    <Text style={styles.fashionista}> The home for a fashionista</Text>

        </View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
   overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    alignItems: "center",
    marginBottom: 20,
    marginTop:400
  },
  welcome:{
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,    fontWeight:"600"

  },
  fashionista:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    fontWeight:"400"
  },
  button: {
    backgroundColor: '#FFFFFF40',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    borderColor:"#fff"
    ,borderWidth:1
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
        fontWeight:"400"

  },
});
