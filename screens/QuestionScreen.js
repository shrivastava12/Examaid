import React, { useEffect } from 'react';
import {View,FlatList,StyleSheet,Text, Alert, TouchableNativeFeedback} from 'react-native';
import { connect } from 'react-redux';
import { fetchQuestion, fetchVocationalQuestion } from '../actions/questionAction';
import * as Linking from 'expo-linking';
import ListQuestion from '../components/ListQuestion';


const QuestionScreen = ({fetchQuestion,fetchVocationalQuestion,questions,isLoading,error,route}) => {

    const {courseName,subjectName,yearName} = route.params;    

   useEffect(() => {
       if(courseName === 'BCA'){
            fetchVocationalQuestion(courseName,yearName)
       }else if(courseName === 'Bsc-it'){
            fetchVocationalQuestion(courseName,yearName)
       }else if(courseName === 'Bio-tech'){
        fetchVocationalQuestion(courseName,yearName)
        }else if(courseName === 'MCA'){
            fetchVocationalQuestion(courseName,yearName)
            }
            else if(courseName === 'MBA'){
                fetchVocationalQuestion(courseName,yearName)
                }
       else{
        fetchQuestion(subjectName,yearName);
       }
      
   },[fetchQuestion,fetchVocationalQuestion])


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


const handleOnpress = (file) => {
    Linking.openURL(`http://syllabusapi.ml${file}`);
};



    return(
        <View style={styles.container}>
            <FlatList data={questions} keyExtractor={(item,index) => item._id}  numColumns={1} renderItem={(itemData) => (
               
               <ListQuestion onPress={() => {handleOnpress(itemData.item.file)}} fileName={itemData.item.fileName} />
        
            )}  />
        </View>
    )
};

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        padding:20,
       
      
    },
})

const mapStateToProps  = state => ({
    questions:state.questionReducer.question,
    isLoading:state.questionReducer.isLoading,
    error:state.questionReducer.error
})

export default connect(mapStateToProps,{fetchQuestion,fetchVocationalQuestion})(QuestionScreen);