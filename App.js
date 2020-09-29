import 'react-native-gesture-handler';
import React from 'react';
import {  Share, Alert, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './store';
import CourseScreen from './screens/CourseScreen';
import SubjectScreen from './screens/SubjectScreen';
import YearScreen from './screens/YearScreen';
import QuestionScreen from './screens/QuestionScreen';
import {createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import SyllabusHomeScreen from './screens/SyllabusHomeScreen';
import SyllabusCourseScreen from './screens/SyllabusCourseScreen';
import SyllabusSubjectScreen from './screens/SyllabusSubjectScreen';
import IntermidiateCourseScreen from './screens/IntermidiateCourseScreen';
import IntermidiateSubjectScreen from './screens/IntermidiateSubjectScreen';
import IntermidiateQuestionScreen from './screens/IntermidiateQuestionScreen';


// Sharing option for app

const onShare = async () => {
  try {
    const result = await Share.share({
      message: 'https://play.google.com/store/apps/details?id=com.imangi.templerun2',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    Alert.alert(error.message);
  }
};


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

      <HomeStack.Screen name="intermidiate" component={IntermidiateCourseScreen} />

      <HomeStack.Screen name="intermidiateSubject" component={IntermidiateSubjectScreen}  />
      
      <HomeStack.Screen name="intermidiateQuestion" component={IntermidiateQuestionScreen} />
    
    </HomeStack.Navigator>
  )
}


// Syllabus Screen
const syllabusStack = createStackNavigator();

function syllabusStackScreen(){
  return(
    <syllabusStack.Navigator>
      <syllabusStack.Screen name="syllabus" component={SyllabusHomeScreen} />
      <syllabusStack.Screen name="syllabusCourse" component={SyllabusCourseScreen} />
      <syllabusStack.Screen name="syllabusSubject" component={SyllabusSubjectScreen} />
    </syllabusStack.Navigator>
  )
}


function CustomDrawerContent(props){
  return(
    <DrawerContentScrollView {...props} >
      <DrawerItemList {...props} />
      <DrawerItem label="Share"  icon={({ focused }) => <Ionicons color='red' size={25} name='md-share' />} onPress={onShare} />
    </DrawerContentScrollView>
  )
}


const Drawer = createDrawerNavigator();

function DrawerScreen(){
  return(
  <Drawer.Navigator screenOptions={
    ({route}) => ({
      drawerIcon:() => {
        let iconName;
        if(route.name === 'home'){
            iconName = Platform.OS === 'android' ? 'md-list' :'ios-list'
        }else if(route.name === 'syllabus'){
            iconName = Platform.OS === 'android' ? 'md-book' : 'ios-book'
        }
        return <Ionicons name={iconName} size={23} color='red' />
      }
    })
  }
    drawerContent={props => <CustomDrawerContent {...props} /> } >
    <Drawer.Screen name="home" component={HomeStackScreen} />
    <Drawer.Screen name="syllabus" component={syllabusStackScreen} />
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


