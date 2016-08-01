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
  TouchableOpacity,
  Animated,
} from 'react-native';

var Flower =  require('Viewing/app/ios/images/Flower.jpg');
var finalBounce = 0;

class About extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }

  _onPress(){
   this.state.bounceValue.setValue(Animated.Value(1 + finalBounce));
    if(this.state.finalBounce == 1){
      this.state.finalBounce = .2;
    }else{ 
      this.state.finalBounce += .2;
    }
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 1 + this.state.finalBounce,
        friction: 1,
      }
    ).start();
  }
  
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.text}>
            Cool animation! Click on the picture!
          </Text>
        </View>
        
        <View style={styles.bottom}>
          <TouchableOpacity onPress={this._onPress}>
            <Animated.Image 
              style={{
                width: 150, 
                height: 150, 
                transform: [
                  {scale: this.state.bounceValue}, 
                ] 
              }}
              source={Flower}
              />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  
   componentDidMount(){
    this.state.bounceValue.setValue(1.5);
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 1,
        friction: 1,
      }
    ).start();
   }
  
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
   // alignSelf: 'stretch',
   backgroundColor: '#42b7c7',
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
    margin: 10,
    height: 10,
    width: 10,
  },
  text:{
    marginHorizontal: 20,
    fontSize: 50,
    color: '#edeec7',
    fontWeight: '100',
    textAlign: 'center',
  },
});

module.exports = About;