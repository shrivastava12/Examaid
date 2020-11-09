import React, { useLayoutEffect } from 'react';
import {Text,View,StyleSheet,FlatList, TouchableNativeFeedback} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import customHeaderButton from '../components/customHeaderButton';

const course = [
    { id:'1', name: 'Under graduate(UG)', code: '#3C40C6' },
    { id:'2', name: 'Post graduate(PG)', code: '#6AB04A' },
   
]

const SyllabusHomeScreen = ({navigation}) => {


    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft:() => (
                <HeaderButtons HeaderButtonComponent={customHeaderButton} >
                    <Item title="Menu" iconName='md-menu' onPress={() =>
                    navigation.toggleDrawer()} />
                </HeaderButtons>
            )
        })
    },[navigation]);

    const onHandlePress = (id) => {
        if(id === '1'){
            navigation.navigate('syllabusCourse',{
                courseType:'ug'
            })
        }else if(id === '2'){
            navigation.navigate('syllabusCourse',{
                courseType:'pg'
            })
        }else if(id === '3'){
            navigation.navigate('syllabusCourse',{
                courseType:'11'
            })
        }
        else{
            navigation.navigate('syllabusCourse',{
                courseType:'12'
            })
        }
    }

    return(
  
            <FlatList data={course} numColumns={1} renderItem={(itemData) => (
              <View style={styles.gridItem}>
              <TouchableNativeFeedback onPress={() => {onHandlePress(itemData.item.id)}} style={{flex:1}}>
                <View style={{...styles.course,...{backgroundColor:itemData.item.code}}}>
                        <Text style={styles.text}>{itemData.item.name}</Text>
                </View>
                </TouchableNativeFeedback>
                </View>
            )} />
          
    )

};

const styles =  StyleSheet.create({
    gridItem:{
        flex:1,
        margin:20,
        marginBottom:10,
        overflow:'hidden',
        height:120,
        elevation:5,
        borderBottomWidth:1,
        borderBottomColor:'black',
        borderRadius:12
    },

    course:{
       
       flex:1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        
    },
    text:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',

    }
})


export default SyllabusHomeScreen;