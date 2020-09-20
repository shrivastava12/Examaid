import React from 'react';
import {View,StyleSheet,Text, TouchableNativeFeedback, ImageBackground} from 'react-native';

const ListCourse =  props => {
    return(
        <View style={styles.gridItem}>
        <TouchableNativeFeedback style={{flex:1}} onPress={props.onPress} >
            <View style={{...styles.container,...{backgroundColor:props.backgroundColor}}}> 
           <ImageBackground style={styles.img} source={require('../assets/img/graduation.png/')}>
            <Text style={styles.title}>{props.courseName}</Text>
            </ImageBackground>
            </View> 
        </TouchableNativeFeedback>
    </View>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:180,
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
        padding:15,
        justifyContent:'center',
        alignItems:'center',
       
    },
    title:{
        fontSize:26,
        color:'white',
        textAlign:'center',
        marginBottom:5,
        opacity:5,
        fontWeight:'bold'
    
    },
    img:{
        width:'100%',
        height:100,
        
    }
});

export default ListCourse;