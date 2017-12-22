/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Dimensions,
} from 'react-native';

import { LLCStackNavigatorConfig } from './LLCNavConfig'
import { StackNavigator, TabNavigator } from 'react-navigation';

class A extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#E9E9EE'}}>
        <View style={{width: Dimensions.get('window').width, height: 64, marginTop:0, backgroundColor:'white', alignItems: 'center', justifyContent: 'center'}}>
          <Button 
          title='A'
          onPress={
            () => {
            this.props.navigation.navigate('B', {comefrom: 'right'});
          }}>
        </Button>
        </View>
        
      </View>
    );
  }
}

class B extends Component {

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#E9E9EE'}}>
        <View style={{width: Dimensions.get('window').width, height: 64, marginTop:0, backgroundColor:'white', alignItems: 'center', justifyContent: 'center'}}>
          <Button 
          title='B'
          onPress={
            () => {
            this.props.navigation.navigate('C', {comefrom: 'bottom'});
          }}>
        </Button>
        </View>
        
      </View>
    );
  }
}

class C extends Component {
  static navigationOptions ={
    gesturesEnabled: false,
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#E9E9EE'}}>
        <View style={{width: Dimensions.get('window').width, height: 64, marginTop:0, backgroundColor:'white', alignItems: 'center', justifyContent: 'center'}}>
          <Button 
          title='C'
          onPress={
            () => {
            this.props.navigation.navigate('D', {comefrom: 'left', isfade: true});
          }}>
        </Button>
        </View>
        
      </View>
    );
  }
}

class D extends Component {
  static navigationOptions ={
    gesturesEnabled: false,
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#E9E9EE'}}>
        <View style={{width: Dimensions.get('window').width, height: 64, marginTop:0, backgroundColor:'white', alignItems: 'center', justifyContent: 'center'}}>
          <Button 
          title='D'
          onPress={
            () => {
            this.props.navigation.navigate('E', {comefrom: 'top'});
          }}>
        </Button>
        </View>
        
      </View>
    );
  }
}

class E extends Component {
  static navigationOptions ={
    gesturesEnabled: false,
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#E9E9EE'}}>
        <View style={{width: Dimensions.get('window').width, height: 64, marginTop:0, backgroundColor:'white', alignItems: 'center', justifyContent: 'center'}}>
          <Button 
          title='E'
          onPress={
            () => {
            // this.props.navigation.navigate('F', {comefrom: 'top'});
          }}>
        </Button>
        </View>
        
      </View>
    );
  }
}

const RouteConfigs = {
  A: {
    screen: A,    
    navigationOptions: {
      headerTitle: 'A',
    },
  },
  B: {
    screen: B,
    navigationOptions: {
      headerTitle: 'B',
    },
  }, 
  C: {
    screen: C,
    navigationOptions: {
      headerTitle: 'C',
    }
  },
  D: {
    screen: D,
    navigationOptions: {
      headerTitle: 'D',
    }
  },
  E: {
    screen: E,
    navigationOptions: {
      headerTitle: 'E',
    }
  },
};

const Nav = StackNavigator(RouteConfigs, LLCStackNavigatorConfig);

export default Nav;



