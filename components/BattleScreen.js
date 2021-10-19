import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import {useState} from 'react';

const BattleScreen = ({ navigation }) => {

  const [categories, setCategories] = useState(['Steakhouse', 'American (Traditional)', 'Pizza', 'Seafood', 'Breakfast', 'Italian', 'Vietnamese', 'Korean', 'French', 'Brazillian', 'Greek']);


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
    require('/Users/nicholasleon/hackreactor work/FoodFight/assets/Brazillian.jpeg'),
    require('/Users/nicholasleon/hackreactor work/FoodFight/assets/greek.jpeg')
  ]);

  const [picStrings, setString] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  if(pics.length === 1) {
    navigation.navigate('PriceScreen', {pic: picStrings, category: categories});
  }

  const handlePressBot = () => {
    setPics(
      ((pics) => {
      pics.shift();
      const newPics = pics.slice();
      return newPics;
    })(pics)
    );
    setCategories(((categories) => {
      categories.shift();
      const newCategories = categories.slice()
      return newCategories;
    })(categories));
    setString(((picStrings) => {
      picStrings.shift();
      const newString = picStrings.slice();
      return newString
    })(picStrings)
    );
  }

  const handlePressTop = () => {
    setPics(
      ((pics) => {
      pics.pop();
      const newPics = pics.slice();
      return newPics;
    })(pics)
    );
    setCategories(((categories) => {
      categories.pop();
      const newCategories = categories.slice()
      return newCategories;
    })(categories));
    setString(((picStrings) => {
      picStrings.pop();
      const newString = picStrings.slice();
      return newString
    })(picStrings)
    );
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{categories[0]}</Text>
      <TouchableOpacity style={styles.opacity} onPress={handlePressTop}>
          <Image style={styles.image} source={pics[0]} />
      </TouchableOpacity>
      <Image style={styles.vs} source={require('/Users/nicholasleon/hackreactor work/FoodFight/assets/VS.png')}/>
      <TouchableOpacity style={styles.opacity} onPress={handlePressBot}>
      <Image style={styles.image} source={pics[pics.length - 1]}/>
      </TouchableOpacity>
      <Text style={styles.text}>{categories[categories.length - 1]}</Text>
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
    marginTop: 50,
    maxHeight: '70%',
    maxWidth: '70%',
  },
  vs: {
    position: 'absolute',
    zIndex: 5,
  },
  text : {
    fontSize: 25,
  },
  opacity: {
    flex: 1,
    marginTop: 15,
    maxHeight: '50%'
  }
});
export default BattleScreen;