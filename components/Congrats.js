import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useState } from 'react';

const Congrats = ({route: { params: { pic, category}}}) => {
  const [pics, setPics] = useState([
    require('/Users/nicholasleon/hackreactor work/FoodFight/assets/steakhouse.jpeg'),
    require('/Users/nicholasleon/hackreactor work/FoodFight/assets/American(Traditional).jpeg'),
    require('/Users/nicholasleon/hackreactor work/FoodFight/assets/Pizza.jpeg'),
    require('/Users/nicholasleon/hackreactor work/FoodFight/assets/Seafood.jpeg'),
    require('/Users/nicholasleon/hackreactor work/FoodFight/assets/Breakfast.jpeg'),
    require('/Users/nicholasleon/hackreactor work/FoodFight/assets/Italian.jpeg'),
    require('/Users/nicholasleon/hackreactor work/FoodFight/assets/Vietnamese.jpeg'),
    require('/Users/nicholasleon/hackreactor work/FoodFight/assets/Korean.jpeg'),
    require('/Users/nicholasleon/hackreactor work/FoodFight/assets/French.jpeg'),
    require('/Users/nicholasleon/hackreactor work/FoodFight/assets/Brazillian.jpeg')
  ]);
    return(
    <SafeAreaView style={styles.container}>
      <Text>Congratulations, looks like you're eating {category[0]}!</Text>
      <Image style={styles.image} source={pics[pic]} />
      <Image style={styles.belt} source={require('/Users/nicholasleon/hackreactor work/FoodFight/assets/Championship_Belt.png')}/>
      <Image style={styles.shorts} source={require('/Users/nicholasleon/hackreactor work/FoodFight/assets/shorts.jpeg')} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03a9f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '50%',
    maxHeight: '30%',
    resizeMode: 'contain',
  },
  belt: {
    position: 'absolute',
    width: '50%',
    bottom: 300,
    zIndex: 5,
  },
  shorts: {
    position: 'absolute',
    width: '70%',
    resizeMode: 'contain',
    bottom: -90,
  }
});

export default Congrats;