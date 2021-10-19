import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useState } from 'react';

const PriceScreen = () => {
  const [queryData, setData] = useState(null)

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.yelp.com/v3/businesses/search?location=94521',
  headers: {
    'Authorization': 'Bearer '
  }
};

axios(config)
.then(function (response) {
  setData(response.data);
})
.catch(function (error) {
  console.log(error);
});


  if(queryData === null) {
    return (
      <SafeAreaView>
        <Text>Loading</Text>
      </SafeAreaView>
    )
  } else {
    return (
    <SafeAreaView>
      <Text>{queryData.businesses[0].name}</Text>
    </SafeAreaView>
  )}
}
export default PriceScreen;