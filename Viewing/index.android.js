/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableOpacity
} from 'react-native';

class Viewing extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  
//     render() {
      
//     var Drawer = (
//     <View style={{flex: 1, backgroundColor: '#fff'}}>
//         <TouchableOpacity>
//             <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
//           </TouchableOpacity>
//     </View>
//   );
      
//     return (
//       <Navigator
//         initialRoute = {{ title: 'Welcome', index: 0}}
//         renderScene = {(route, navigator) => {
//           <MyScene title = {route.title}>
//            <DrawerLayoutAndroid
//               drawerWidth={150}
//               drawerPosition={DrawerLayoutAndroid.positions.Left}
//               renderNavigationView={() => Drawer}/>
//           </MyScene>
//         }}
//         >
        
     
       
//         </Navigator>
//     );
//   }
    render() {
    var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <TouchableOpacity>
  
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Draer!</Text>
          </TouchableOpacity>
    </View>
  );
    return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
      </View>
    </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  drawer: {
    flex: 1,
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('Viewing', () => Viewing);
