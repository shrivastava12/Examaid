import React, { useEffect } from 'react';
import {FlatList, Alert, ActivityIndicator, View} from 'react-native';
import ListSubject from '../components/ListSubject';
import { fetchSyllabusSubject } from '../actions/syllabusAction';
import { connect } from 'react-redux';

const subject = [
    {id:'1',subjectName:'history'},
    {id:'2',subjectName:'geography'},
    {id:'3',subjectName:'civics'},
]

const SyllabusSubjectScreen = ({navigation,route,fetchSyllabusSubject,error,isLoading}) => {

    const {courseType,courseName} =  route.props;
    useEffect(() => {
        fetchSyllabusSubject(courseType,courseName)
    },[fetchSyllabusSubject]);

// TODO
    const onHandlePress = (courseType,courseName,subjectName) => {
        
        navigation.navigate('syllabusPage',{
            courseType:courseType,
            courseName:courseName,
            subjectName:subjectName
        })
        
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
        <FlatList data={subject} numColumns={1} 
        renderItem={(itemData) =>(
            <ListSubject onPress={() => {onHandlePress(itemData.item.courseType,itemData.item.courseName,itemData.item.subjectName)}}
            subjectName={itemData.item.subjectName} />
                
        ) } />
    )

};
const mapStateToProps = state => ({
    subjects:state.syllabusReducer.subject,
    error:state.syllabusReducer.error,
    isLoading:state.syllabusReducer.isLoading,
})

export default connect(mapStateToProps,{fetchSyllabusSubject})(SyllabusSubjectScreen);