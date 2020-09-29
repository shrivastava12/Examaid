import React, { useEffect, useState } from 'react';
import {FlatList,ActivityIndicator,StyleSheet, Text,View, Alert} from 'react-native';
import { connect } from 'react-redux';
import { fetchCourse } from '../actions/questionAction';
import ListCourse from '../components/ListCourse';


const CourseScreen = ({courses,navigation,isLoading,error,route,fetchCourse}) => {
    
  

    const {courseName} = route.params;
    console.log(courseName);
    useEffect(() => {
        fetchCourse(courseName);

    },[fetchCourse])
    console.log('sdfd',courses)
    
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

    const handleOnPress = (courseName) => {

        if(courseName ==='Bsc-it'){
            navigation.navigate('year',{
                courseName:courseName,
                subjectName:'vocational'
            })
        }
        else if(courseName === 'BCA'){
            navigation.navigate('year',{
                courseName:courseName,
                subjectName:'vocational'
            })
        }
        else if(courseName === 'Bio-tech'){
            navigation.navigate('year',{
                courseName:courseName,
                subjectName:'vocational'
            })
        }
        else if(courseName === 'MCA'){
            navigation.navigate('year',{
                courseName:courseName,
                subjectName:'vocational'
            })
        }
        else if(courseName === 'MBA'){
            navigation.navigate('year',{
                courseName:courseName,
                subjectName:'vocational'
            })
        }
        else{
            navigation.navigate('subject',{
                courseName:courseName
            })
        }
           
    }

    return(
      <FlatList data={courses} numColumns={2} keyExtractor={(item,index) => item._id} 
            renderItem = {
                (itemData) => (
                    <ListCourse  backgroundColor={itemData.item.color} courseName={itemData.item.courseName} onPress={() => handleOnPress(itemData.item.courseName)} />
                )
            }
      />
    )
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

const mapStateToProps = state => ({
    courses:state.questionReducer.course,
    isLoading:state.questionReducer.isLoading,
    error:state.questionReducer.error
})

export default connect(mapStateToProps,{fetchCourse})(CourseScreen);