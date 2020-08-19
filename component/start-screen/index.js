import React,{useState} from 'react'
import LottieView from 'lottie-react-native';


import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Button
} from 'react-native'

const Menu = (prop) =>{

  return(
    <ScrollView>
        <View style={styles.MainMenu}>
            <Text style={styles.Header}>
                Rock Peaper Seazer
            </Text>
            <LottieView source={require('../../animations/23721-paper-plane.json')} autoPlay loop />
            <View style={styles.MainBox}>
                {/* <View style={styles.Pictures}>
                    <Image style={{height:"100%", width:"100%"}} source={require('../../assets/bt1.jpg')}/>
                </View>
                <View style={styles.Pictures}>
                    <Image style={{height:"100%", width:"100%"}} source={require('../../assets/bt2.jpg')}/>
                </View>
                <View style={styles.Pictures}>
                    <Image style={{height:"100%", width:"100%"}} source={require('../../assets/bt3.jpg')}/>
                </View> */}
            </View>
            <TouchableOpacity onPress={()=>{prop.Changer()}} style={styles.StartBtn}>
                <Text Style={styles.StartGame}>
                Start Game
                </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 const styles = StyleSheet.create({
  
  MainMenu:{
    height:windowHeight,
    width:windowWidth,
    backgroundColor:"#280F28",
    alignItems:"center",
    // justifyContent:"center",
  },

  Header:{
    fontSize:30,
    marginTop:30,
    color:"#0077b6",
  },
  
  Pictures:{
    backgroundColor:"#fff",
    height:80,
    width:80,
    margin:15,
    borderRadius:5,
    overflow:"hidden",
  },

  MainBox:{

      flexDirection:"row",
      flex:0.9,
      justifyContent:"center",
      alignItems:'center'
  },

  StartBtn:{
    height:50,
    width:150,
    backgroundColor:"#0077b6",
    marginBottom:30,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
  },

  StartGame:{
    fontFamily:"serif",
    fontWeight: '900',
    justifyContent:"center",
    alignItems:"center",

  }

  })

export default Menu;

