import React, { useState } from 'react';
import {View,FlatList,StyleSheet, ActivityIndicator, Alert} from 'react-native';
import { connect } from 'react-redux';
import { fetchSyllabus, fetchVocationalSyllabus } from '../actions/syllabusAction';
import ListQuestion from '../components/ListQuestion';
import * as Linking from 'expo-linking';

const SyllabusScreen = ({route,fetchSyllabus,fetchVocationalSyllabus,syllabus,isLoading,error}) => {
    const {courseType,courseName,subjectName} = route.params;


    useState(() => {
        if(courseName === 'BCA'){
            fetchVocationalSyllabus(courseType,courseName);
        }else if(courseName === 'BBM'){
            fetchVocationalSyllabus(courseType,courseName);
        }
        else{
            fetchSyllabus(courseType,courseName,subjectName)
        }
    },[fetchSyllabus,fetchVocationalSyllabus])

    const handleOnPress = (file) => {
        Linking.openURL(`http://syllabusapi.ml${file}`)
    };

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
        <View style={styles.container}>
            <FlatList data={syllabus} keyExtractor={(item) => item._id} 
            renderItem={(itemData) => (
                <ListQuestion onPress={() => {handleOnPress(itemData.item.file)}} fileName={itemData.item.fileName} />
            )} />
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    },
})

const mapStateToProps = state => ({
    syllabus:state.syllabusReducer.syllabus,
    isLoading:state.syllabusReducer.isLoading,
    error:state.syllabusReducer.error
});

export default connect(mapStateToProps,{fetchSyllabus,fetchVocationalSyllabus})(SyllabusScreen);