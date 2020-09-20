import React, { useEffect } from 'react';
import {View,FlatList,StyleSheet,Text, Alert, TouchableNativeFeedback} from 'react-native';
import { connect } from 'react-redux';
import { fetchQuestion } from '../actions/questionAction';

const QuestionScreen = ({fetchQuestion,questions,isLoading,error,route}) => {

    const {subjectName,yearName} = route.params;    

   useEffect(() => {
       fetchQuestion(subjectName,yearName);
   },[fetchQuestion])


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


    const question = [
        {id:'1',questionPaper:'hindi2020'},
        {id:'2',questionPaper:'English2020'},
        {id:'3',questionPaper:'Math 2020'},

    ]
    return(
        <View style={styles.container}>
            <FlatList data={questions} keyExtractor={(item,index) => item._id}  numColumns={1} renderItem={(itemData) => (
                <View>
                <TouchableNativeFeedback onPress={() => {}}>
                <View style={styles.question}>
                    <Text style={styles.text}>{itemData.item.questionName}</Text>
                </View>
                </TouchableNativeFeedback>
                </View>
            )}  />
        </View>
    )
};

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        padding:20,
       
      
    },
    question:{
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        backgroundColor:'blue',
        elevation:5,
        borderBottomColor:'black',
        borderRadius:40,
        height:40,
    

    },
    text:{
        color:'white',
        fontSize:18,
    }
})

const mapStateToProps  = state => ({
    questions:state.questionReducer.question,
    isLoading:state.questionReducer.isLoading,
    error:state.questionReducer.error
})

export default connect(mapStateToProps,{fetchQuestion})(QuestionScreen);