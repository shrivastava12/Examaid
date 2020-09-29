import React, { useEffect } from 'react';
import {FlatList,Alert, View} from 'react-native';
import { connect } from 'react-redux';
import { fetchSubject } from '../actions/questionAction';
import ListSubject from '../components/ListSubject';

const SubjectScreen = ({fetchSubject,subjects,isLoading,error,navigation,route}) => {

    const {courseName} = route.params;
    
    useEffect(() => {
        fetchSubject(courseName);
    },[fetchSubject])
    

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


    const handleOnPress =  (courseName,subjectName) => {
        navigation.navigate('year',{
            courseName:courseName,
            subjectName:subjectName
        })
    }

     return(
      <FlatList data={subjects} keyExtractor={(item,index) => item._id}   numColumns={1} renderItem={(itemData) => (
          <ListSubject onPress={() => handleOnPress(itemData.item.courseName,itemData.item.subjectName)} subjectName={itemData.item.subjectName} />
      )} />
     ) 
};


const mapStateToProps = state => ({
    subjects:state.questionReducer.subject,
    isLoading:state.questionReducer.isLoading,
    error:state.questionReducer.error
})

export default connect(mapStateToProps,{fetchSubject})(SubjectScreen);
