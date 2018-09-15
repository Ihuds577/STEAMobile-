import React from 'react';
import { StyleSheet, Text, View, WebView, ScrollView, Button, Alert, Image } from 'react-native';
import {createBottomTabNavigator, SafeAreaView, createStackNavigator} from 'react-navigation';

class RockStarterScreen extends React.Component {
  render() {
    return (
      <WebView
      source = {{uri: 'https://sttefoundation.org/RockStar'}}
      style = {{marginTop: 30, flex: 1}}
      />
    );
  }
}

class QuestionOTDScreen extends React.Component{
  render(){
    return(
      <SafeAreaView>
      <ScrollView>
      <Text style = {{fontSize: 30, alignSelf: 'center'}}> Question Of The Day!</Text>
      <Text
        style = {{fontSize: 20, paddingTop: 30, paddingBottom: 30, alignSelf: 'center'}}>
        How many things make up a bakers dozen? </Text>
      <Button
        onPress = {() => {
          Alert.alert('You are Correct')
        }}
        title = "13"/>
      <Button
        onPress = {() => {
          Alert.alert('You are Incorrect')
        }}
        title = "12"/>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

class EventsScreen extends React.Component{

  render(){
    return(
      <WebView
      source = {{uri: 'https://sttefoundation.org/glitch'}}
      style = {{marginTop: 30, flex: 1}}
      />
    );
  }
}

class ProgramsScreen extends React.Component{

  render(){
    return(
      <ScrollView>
      <Button
        title= 'Events Page'
        onPress= {() => this.props.navigation.navigate('Events')} />
      <Button
        title= 'QuestionOTD Page'
        onPress= {() => this.props.navigation.navigate('QuestionOTD')} />
      <Button
        title= 'Programs Page'
        onPress= {() => this.props.navigation.navigate('Programs')} />
      </ScrollView>
    );
  }
}

class ActivityCell extends React.Component{

  render(){
    return(
      <View>
      <Text style = {{fontSize: 20, paddingTop: 120, alignSelf: 'center'}}> {this.props.projectTitle} </Text>
      <Image source = {require('./Assets/Bannana.jpg')} style = {{height: 120, width: 193, alignSelf: 'center'}}/>
      <Button
        onPress = {() => {
          this.props.navigation.navigate('Events')
        }}
        title = "Events"/>
      </View>
    );
  }
}

/*export default createBottomTabNavigator({
  Rockstarter: RockStarterScreen,
  QuestionOTD: QuestionOTDScreen,
  Events: EventsScreen,
  Programs: ProgramsScreen,
});
*/
export default class App extends React.Component{
  render(){
    return <RootStack />;
  }
}

const RootStack = createStackNavigator({
  Home: {
    screen: ProgramsScreen
  },
  Events: {
    screen: EventsScreen
  },
  QuestionOTD: {
    screen: QuestionOTDScreen
  },
  Programs:{
    screen: RockStarterScreen
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
