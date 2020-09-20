import React, { useEffect } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { fetchCourse } from '../../actions/questionAction';


const UgScreen = ({courses,route,fetchCourse}) => {

    const {courseName} = route.params;
    console.log(courseName);
    useEffect(() => {
        fetchCourse(courseName);
    },[fetchCourse])
    console.log('sdfd',courses)

    return(
        <View style={styles.container}>
            <Text>Ug Screen</Text>
        </View>
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
})

export default connect(mapStateToProps,{fetchCourse})(UgScreen);