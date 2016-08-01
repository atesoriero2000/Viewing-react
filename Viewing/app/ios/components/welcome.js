//@flow
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

var Flag_img = require('Viewing/app/ios/images/FlagWaving.jpg');
var Scout_img = require('Viewing/app/ios/images/boy-scout-emblem.jpg');
var Eagle_img = require('Viewing/app/ios/images/Eagle.jpg');

class Welcome extends Component {
  
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.text}>
            Hello! Welcome to my beta Eagle Scout Project!
          </Text>
        </View>
        
        <View style={styles.bottom}>
          <Image 
            style={styles.image}
            source={Flag_img}
            />
          <Image
            style={styles.image}
            source={Scout_img}
            />
          <Image
            style={styles.image}
            source={Eagle_img}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
   // alignSelf: 'stretch',
   backgroundColor: '#424ac1',
    flex: 1,
    
  },
  top:{
    flex: 2,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'blue'//comment for final
  },
  bottom:{
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',//comment for final
    marginBottom: 40,
  },
  image:{
    flex: 3,
    margin: 10,
    height: 100,
    width: 100,
  },
  text:{
    marginHorizontal: 20,
    fontSize: 50,
    color: 'beige',
    fontWeight: '100',
    textAlign: 'center',
  },
});

module.exports = Welcome;