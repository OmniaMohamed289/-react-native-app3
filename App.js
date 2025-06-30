import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/header/index';
import Products from './src/Components/ProductsList/index';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Header />
      <Products />
    </>
  );
}
