import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './store';
import UgScreen from './screens/Main/UgScreen';
import CourseScreen from './screens/CourseScreen';
import SubjectScreen from './screens/SubjectScreen';
import YearScreen from './screens/YearScreen';
import QuestionScreen from './screens/QuestionScreen';
import {createDrawerNavigator} from '@react-navigation/drawer'


const HomeStack = createStackNavigator();
function HomeStackScreen(){
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen options={{
        headerTitle:'Examaid',
        headerTitleAlign:'center',
        headerTintColor:'red'
      }} name="home" component={HomeScreen} />
      <HomeStack.Screen options={({route}) => ({
        title:route.params.courseName
      })}
       name="course"  component={CourseScreen} />
      <HomeStack.Screen options={({route}) => ({
        title:route.params.courseName
      })} name="subject" component={SubjectScreen} />
      <HomeStack.Screen options={({route}) => ({
        title:route.params.subjectName
      })} name="year" component={YearScreen} />
      <HomeStack.Screen  options={({route}) => ({
        title:route.params.yearName
      })} name="question" component={QuestionScreen}/>
    </HomeStack.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerScreen(){
  return(
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeStackScreen} />
  </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
       <DrawerScreen/>
      </NavigationContainer>
   </Provider>
  );
}


