import React, { useEffect } from 'react';
import {View,Text,TouchableNativeFeedback,Alert,FlatList,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { fetchYear } from '../actions/questionAction';



const YearScreen = ({fetchYear,isLoading,error,navigation,years,route}) => {
        
    const {courseName,subjectName} = route.params;
        useEffect(() => {
            fetchYear(courseName)
        },[fetchYear])

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

    const handlePress = (yearName) => {
        if(subjectName === 'vocational'){
            navigation.navigate('question',{
                courseName:courseName,
                subjectName:subjectName,
                yearName:yearName
            })
        }else{
            navigation.navigate('question',{
                courseName:'test',
                subjectName:subjectName,
                yearName:yearName
            })
        }
     
    }


    return(
        <View style={styles.container}>
             <FlatList data={years}   keyExtractor={(item,index) => item._id}  numColumns={1} renderItem={(itemData) => (
          <TouchableNativeFeedback onPress={() => {handlePress(itemData.item.yearName)}}>
          <View style={styles.item}>
              <Text style={styles.text}>{itemData.item.yearName}</Text>
          </View>
          </TouchableNativeFeedback>
      )} />
        </View>
    )
};

const styles =  StyleSheet.create({

    container:{
        flex:1,
        margin:10,

    },
    item:{
        flex:1,
        height:40,
        borderRadius:20,
        margin:15,
        backgroundColor:'#384FC5',
        justifyContent:'center',
        alignItems:'center',
        elevation:10,
        borderWidth:1,
        borderBottomColor:'black'
    },
    text:{
        color:'white',
        fontSize:21,
        fontWeight:'bold'
    }
})
const mapStateToProps = state => ({
    years:state.questionReducer.year,
    isLoading:state.questionReducer.isLoading,
    error:state.questionReducer.error,
})

export default connect(mapStateToProps,{fetchYear})(YearScreen)