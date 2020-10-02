import React, { useEffect } from 'react';
import {Text,View,FlatList, ActivityIndicator, Alert} from 'react-native';
import { fetchIntermidiateSubject } from '../actions/questionAction';
import { connect } from 'react-redux';
import ListSubject from '../components/ListSubject';



const IntermidiateSubjectScreen = ({route,isLoading,error,navigation,subjects,fetchIntermidiateSubject}) => {

    const {courseName,typeName} =  route.params;

    useEffect(() => {
        fetchIntermidiateSubject(typeName,courseName);
    },[fetchIntermidiateSubject])    

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

    const onHandlePress = (courseType,courseName,subjectName) => {
        navigation.navigate('intermidiateQuestion',{
            courseType:courseType,
            courseName:courseName,
            subjectName:subjectName
        })        
    }

    return(
        <FlatList data={subjects}  keyExtractor={(item) => item._id} 
        numColumns={1} 
        renderItem={(itemData) => (
            <ListSubject onPress={() => {onHandlePress(itemData.item.courseType,itemData.item.courseName,itemData.item.subjectName)}} subjectName={
                itemData.item.subjectName
            } />
        )} />
    )
};

const mapStateToProps =  state => ({
    subjects:state.questionReducer.subject,
    isLoading:state.questionReducer.isLoading,
    error:state.questionReducer.error
})

export default connect(mapStateToProps,{fetchIntermidiateSubject})(IntermidiateSubjectScreen);