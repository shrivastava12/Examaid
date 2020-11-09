import React, { useEffect } from 'react';
import {StyleSheet,View,Text,FlatList, Alert, ActivityIndicator} from 'react-native';
import ListCourse from '../components/ListCourse';
import { fetchSyllabusCourse } from '../actions/syllabusAction';
import { connect } from 'react-redux';

const data = [
    {id:'1',courseName:'bscit',color:'red'},
    {id:'2',courseName:'bca',color:'blue'},

]


const SyllabusCourseScreen = ({navigation,route,courses,fetchSyllabusCourse,isLoading,error}) => {

    const {courseType} = route.params;

    useEffect(() => {
        fetchSyllabusCourse(courseType);        
    },[fetchSyllabusCourse])

    const handleOnPress = (courseType,courseName) => {
        if(courseName === 'BCA'){
            navigation.navigate('syllabusPage',{
                courseType:courseType,
                courseName:courseName,
                subjectName:'vocational'
            })
        }else if(courseName === 'BBM'){
            navigation.navigate('syllabusPage',{
                courseType:courseType,
            courseName:courseName,
            subjectName:'vocational'
            })
        }
        else if(courseName === 'B.Sc-IT'){
            navigation.navigate('syllabusPage',{
                courseType:courseType,
            courseName:courseName,
            subjectName:'vocational'
            })
        }
        else if(courseName === 'Bio-Tech'){
            navigation.navigate('syllabusPage',{
                courseType:courseType,
            courseName:courseName,
            subjectName:'vocational'
            })
        }
        else if(courseName === 'EWM'){
            navigation.navigate('syllabusPage',{
                courseType:courseType,
            courseName:courseName,
            subjectName:'vocational'
            })
        }
        else if(courseName === 'MBA'){
            navigation.navigate('syllabusPage',{
                courseType:courseType,
            courseName:courseName,
            subjectName:'vocational'
            })
        }
        else if(courseName === 'MCA'){
            navigation.navigate('syllabusPage',{
                courseType:courseType,
            courseName:courseName,
            subjectName:'vocational'
            })
        }
        else if(courseName === 'M.sc(Bio-tech)'){
            navigation.navigate('syllabusPage',{
                courseType:courseType,
            courseName:courseName,
            subjectName:'vocational'
            })
        }
        else{
            navigation.navigate('syllabusSubject',{
                courseType:courseType,
                courseName:courseName
            })
        }
       
    }

    if(isLoading === true){
        return(
            <View style={{flex:1,justifyContent:'center',flexDirection:'row',justifyContent:'space-around',padding:10}}>
                <ActivityIndicator size="large" color="black" />
            </View>
        )
    }
    
    if(error === true ){
        return(
            <View>
         {   Alert.alert('Alert','Some error occured..! Please make sure that you are connected to internet.',[
                () => {}
            ])}
            </View>
        )
    }
    

    return(
        <FlatList data={courses} keyExtractor={(item) => item._id} numColumns={2} 
        renderItem={(itemData) => (
            <ListCourse backgroundColor={itemData.item.color} 
            courseName={itemData.item.courseName}
            onPress={() => {handleOnPress(itemData.item.courseType,itemData.item.courseName)}}
            />
        )} />
    )

};

const mapStateToProps = state => ({
    courses:state.syllabusReducer.course,
    error:state.syllabusReducer.error,
    isLoading:state.syllabusReducer.isLoading,
})

export default connect(mapStateToProps,{fetchSyllabusCourse})(SyllabusCourseScreen);

