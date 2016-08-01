//@flow
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  VibrationIOS,
} from 'react-native';


class More extends Component {
  
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.text}>
            Click the awesome button to vibrate!
          </Text>
        </View>
        
        <View style={styles.bottom}>
          <TouchableOpacity onPressIn={() => VibrationIOS.vibrate()}>
            <View style = {styles.button}>
              <Text style = {styles.buttonText}>
                Click Me!
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
   backgroundColor: '#c18ecb',
    flex: 1,
  },
  top:{
    flex: 2,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom:{
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  text:{
    marginHorizontal: 20,
    fontSize: 39,
    color: 'white',
    fontWeight: '100',
    textAlign: 'center',
  },
  button:{
    backgroundColor: '#4ad0bc'
  },
  buttonText: {
    margin: 30,
    color: '#1d2357',
    fontSize: 60,
    fontWeight: '100',
  },
});

module.exports = More;