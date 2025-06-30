import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../../assets/shutterstock_1781009285 1.png')}
        style={styles.containerHeader}
      >
        <Text style={styles.textHeader}>
          Autumn{'\n'}Collection{'\n'}2022
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 30,
    overflow: 'hidden',
    marginHorizontal: 20,
    marginTop: 10,
    height: 200,
    marginTop:80
  },
  containerHeader: {
    flex: 1,
    justifyContent: 'center',
   
  },
  textHeader: {
    color: '#fff',
    fontSize: 32,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingLeft: 60,
  },
});
