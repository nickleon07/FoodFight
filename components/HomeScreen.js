import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { Audio } from 'expo-av';

const HomeScreen = ({ navigation }) => {



  const checkIfNum = (number) => {
    const validZip = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return ( validZip.test(number) )
  };

  const handlePress = () => {
    Alert.prompt("Zip Code", "Gimmie dem digits ;)", (number) => {
      if(checkIfNum(number)) {
        Alert.alert("Get Ready!");
        navigation.navigate('BattleScreen')

      } else {
        Alert.alert("I know I look good but I need your Zip Code, not your number!");
      }
    });
  };
  return(
    <SafeAreaView style={styles.container}>
      <Image style={styles.splashLogo} source={require('../assets/FoodFightLogo.jpeg')} />
      <TouchableOpacity style={styles.roundOneButton} onPress={handlePress}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03a9f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashLogo: {
    maxHeight: '75%',
    maxWidth: '75%',
    resizeMode: 'contain',
  },
  roundOneButton: {
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    height: 50,
    width: 140,
    backgroundColor: '#ffee58'
  },
  buttonText: {
    color:'black',
    textAlign: 'center',
    paddingTop: 2,
    fontSize: 22
  }
});

export default HomeScreen;