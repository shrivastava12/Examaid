import React, { useState, useEffect, useLayoutEffect } from 'react';
import {View,Text,FlatList,StyleSheet,ImageBackground,TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import { connect } from 'react-redux';
import { fetchCourse } from '../actions/questionAction';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import customHeaderButton from '../components/customHeaderButton';
const HomeScreen = ({fetchCourse,navigation}) => {

    const [items,setItems] = useState([
        { id:'1', name: 'UG', code: '#1abc9c' },
        { id:'2', name: 'PG', code: '#2ecc71' },
        { id:'3', name: '11th', code: '#3498db' },
        { id:'4', name: '12th', code: '#9b59b6' },
       
    ]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft:() => (
                <HeaderButtons HeaderButtonComponent={customHeaderButton}>
                    <Item title="Menu" iconName='md-menu'
                    onPress={() => {
                        navigation.toggleDrawer()
                    }} />
                </HeaderButtons>
        )
        })
    },[navigation])
    let TouchableCmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 23){
        TouchableCmp =  TouchableNativeFeedback;
    }

    const onHandlePress = (id) => {
        let routeName;
        if(id === '1'){
            routeName = 'ug'
        }else if(id === '2'){
            routeName = 'pg'
        }
        navigation.navigate('course',{
            courseName:routeName
        })
    }
   
    return(

        <FlatList data={items} numColumns={2} 
        renderItem={(itemData) =>(
            <View style={styles.gridItem}>
            <TouchableCmp style={{flex:1}} onPress={() => onHandlePress(itemData.item.id)} >
                
                <View style={{...styles.container,...{backgroundColor:itemData.item.code}}}> 
                <ImageBackground style={styles.img} source={require('../assets/img/study.png/')} >

        <Text style={styles.title}>{itemData.item.name}</Text>
        </ImageBackground>
                </View>
            </TouchableCmp>
        </View>
        )} />

    )
}

const styles =  StyleSheet.create({

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
        alignItems:'center'
    },
    title:{
        fontSize:26,
        textAlign:'center',
        color:'black',
        fontWeight:'bold',
        marginTop:20,
    },
    img:{
        height:100,
        width:'100%'

    }
     


});



export default connect(null,{fetchCourse})(HomeScreen);