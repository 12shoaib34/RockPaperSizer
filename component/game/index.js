import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from 'react-native'

const Game = () =>{
  return(
    <ScrollView>
        <View style={styles.MainBox}>
            <View style={styles.BotSection}>
            </View>
            <View style={styles.ResultBox}></View>
            <View style={styles.PlayerBox}>
            </View>
            <View style={styles.Btnsection}>
                <TouchableOpacity style={styles.SlectBtn}>
                    <Image style={{height:"100%", width:"100%"}} source={require('../../assets/bt1.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SlectBtn}>
                    <Image style={{height:"100%", width:"100%"}} source={require('../../assets/bt2.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SlectBtn}>
                    <Image style={{height:"100%", width:"100%"}} source={require('../../assets/bt3.jpg')}/>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  
  MainBox:{
    height:windowHeight,
    width:windowWidth,
    backgroundColor:"#c7c781",
    justifyContent:'space-between'
  },

  BotSection:{
    height:200,
    width:"100%",
    backgroundColor:"red",
  },

  ResultBox:{
    height:50,
    width:"100%",
    backgroundColor:"blue",
  },

  PlayerBox:{
    height:200,
    width:"100%",
    backgroundColor:"red",
  },

  Btnsection:{
    // marginTop:"40%",
    height:100,
    width:windowWidth,
    backgroundColor:"orange",
    flexDirection:"row",
    paddingHorizontal:30,
    justifyContent:"space-between",
    alignItems:"center"
  },

  SlectBtn:{
    height:80,
    borderRadius:5,
    overflow:"hidden",
    width:80,
    backgroundColor:"blue",
  }


})

export default Game;

