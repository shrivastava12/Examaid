import React, { useEffect } from 'react';
import {StyleSheet, View, ActivityIndicator, Alert} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListQuestion from '../components/ListQuestion';
import { connect } from 'react-redux';
import { fetchIntermidiateQuestion } from '../actions/questionAction';
import * as Linking from 'expo-linking';
const IntermidiateQuestionScreen = ({route,isLoading,error,fetchIntermidiateQuestion,questions}) => {
    
    const {typeName,courseName,subjectName} = route.params;

    useEffect(() => {
        fetchIntermidiateQuestion(typeName,courseName,subjectName);
    },[fetchIntermidiateQuestion])

    const handleOnPress = (file) => {
        Linking.openURL(`http://syllabusapi.ml${file}`)
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
        <View style={styles.container}>
            <FlatList data={questions} keyExtractor={(item) => item._id}
            renderItem={(itemData) => (
                <ListQuestion onPress={() => {handleOnPress(itemData.item.file)}} fileName={itemData.item.fileName} />
            )} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    },
})

const mapStateToProps = state => ({
    questions:state.questionReducer.question,
    isLoading:state.questionReducer.isLoading,
    error:state.questionReducer.error
})

export default connect(mapStateToProps,{fetchIntermidiateQuestion})(IntermidiateQuestionScreen);