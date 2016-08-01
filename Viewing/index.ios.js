/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  
} from 'react-native';

var Welcome = require('./app/ios/components/welcome');
var More = require('./app/ios/components/more');
var About = require('./app/ios/components/about');

class Viewing extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'welcome'
    };
  }
  
  render(){
    return(
      
      <TabBarIOS selectedTab={this.state.selectedTab}>
        
        <TabBarIOS.Item 
         selected = {this.state.selectedTab === 'welcome'}
          systemIcon = {'featured'}

          onPress= {() => {
              this.setState({
                selectedTab: 'welcome'
              });
            }}>
          <Welcome />
        </TabBarIOS.Item>
        
       <TabBarIOS.Item 
          selected = {this.state.selectedTab === 'more'}
          systemIcon = {'more'}

          onPress= {() => {
              this.setState({
                selectedTab: 'more'
              });
            }}>
          <More />
        </TabBarIOS.Item>
        
        <TabBarIOS.Item
            selected = {this.state.selectedTab === 'about'}
            systemIcon = {'contacts'}

            onPress= {() => {
              this.setState({
                selectedTab: 'about'
              });
            }}>
          <About />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}


AppRegistry.registerComponent('Viewing', () => Viewing);
