import React from 'react';
import { TouchableNativeFeedback,StyleSheet,Text, View } from 'react-native';

const ListQuestion =  props => {
    
    return(
        <TouchableNativeFeedback onPress={props.onPress} >
            <View style={styles.question}>
                <Text style={styles.text}>
                    {props.fileName}
                </Text>
            </View>
        </TouchableNativeFeedback>
    )
};

const styles =  StyleSheet.create({

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


export default ListQuestion;