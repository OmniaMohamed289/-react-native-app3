import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Navbar from '../../navbar/index';
import Header from '../../header/index';
import Products from '../../ProductsList/index';

export default function App({ navigation }) {
  return (
    <>
     <StatusBar backgroundColor="black" barStyle="light-content" />
      <Navbar />
      <Header />
    <Products navigation={navigation} />

    </>
  );
}
