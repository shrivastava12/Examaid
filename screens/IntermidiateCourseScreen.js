import React, { useEffect } from 'react';
import {StyleSheet, View,Text, FlatList, TouchableNativeFeedback, ImageBackground} from 'react-native';
import { fetchIntermidiateCourse } from '../actions/questionAction';
import { connect } from 'react-redux';


const IntermidiateCourseScreen = ({fetchIntermidiateCourse,navigation,courses,route}) => {

    const {courseType} = route.params;

    useEffect(() => {
        fetchIntermidiateCourse(courseType);
    },[fetchIntermidiateCourse]);

    const onHandlePress =  (courseName,typeName) => {
        navigation.navigate('intermidiateSubject',{
            courseName:courseName,
            typeName:typeName
        });
    }

    return(
        <FlatList data={courses} numColumns={1}  keyExtractor={(item) => item._id}
        renderItem={(itemData) => (
            <View style={styles.gridItem}>
                <TouchableNativeFeedback style={{flex:1}} onPress={()  => {
                    onHandlePress(itemData.item.courseName,itemData.item.typeName)
                }} >
                    <View style={{...styles.container,...{backgroundColor:itemData.item.color}}}>
                        {/* <ImageBackground style={styles.img} source={require('../assets/img/study.png/')} > */}
        <Text style={styles.title}>{itemData.item.courseName}</Text>
                        {/* </ImageBackground> */}
                    </View>
                </TouchableNativeFeedback>
            </View>
        )} />
    )
};

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:20,
        height:130,
        borderRadius:10,
        overflow:'hidden',
        elevation:5
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:25,
        color:'white',
        textAlign:'center',
        marginBottom:5,
        opacity:5,
        fontWeight:'bold'
    
    },
});

const mapStateToProps =  state => ({
    courses:state.questionReducer.course,
})

export default  connect(mapStateToProps,{fetchIntermidiateCourse}) (IntermidiateCourseScreen);
