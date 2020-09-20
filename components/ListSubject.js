import React from 'react';
import {View,Text,StyleSheet, TouchableNativeFeedback} from 'react-native';



const ListSubject = props => {


    return(
        <View style={styles.gridItem}>
            <TouchableNativeFeedback style={{flex:1}} onPress={props.onPress} >
                <View style={styles.container}>
    <Text style={styles.title} >{props.subjectName}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles =  StyleSheet.create({


    gridItem:{
        flex:1,
        margin:10,
        height:40,
        borderRadius:10,
        elevation:5
    
    },
    container:{
        flex:1,
        
        borderRadius:20,
        borderBottomWidth:1,
        borderBottomColor:'black',
        backgroundColor:'#7A8DF5',
        justifyContent:'center',
        alignItems:'center',
        shadowRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
    
    },
    title:{
        fontSize:20,
        color:'#EDE1C1',
    }
})

export default ListSubject;