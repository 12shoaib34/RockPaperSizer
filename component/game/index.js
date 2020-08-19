import React, {useState, useEffect} from 'react'
import LottieView from 'lottie-react-native';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Alert
} from 'react-native'

function random (list) {
  return list[Math.floor((Math.random()*list.length))];
}

const Game = (prop) =>{
  const [you, setYou] = useState(null)
  const [com, setCom] = useState(null)

  function answerGenerator () {
    if(you == 1 && com == 2){
      Alert.alert(
        "Hahahaha!",
        "You lose.",
        [
          { text: "OK", onPress: () => {
            setYou(null)
            setCom(null)
          }}
        ],
        { cancelable: false }
      );
    }
    if(you == 1 && com == 3){
      Alert.alert(
        "Congratulations",
        "You Win.",
        [
          { text: "OK", onPress: () => {
            setYou(null)
            setCom(null)
          }}
        ],
        { cancelable: false }
      );
    }
    if(you == 2 && com == 1){
      Alert.alert(
        "Congratulations",
        "You Win.",
        [
          { text: "OK", onPress: () => {
            setYou(null)
            setCom(null)
          }}
        ],
        { cancelable: false }
      );
    }
    if(you == 2 && com == 3){
      Alert.alert(
        "Hahahaha!",
        "You lose.",
        [
          { text: "OK", onPress: () => {
            setYou(null)
            setCom(null)
          }}
        ],
        { cancelable: false }
      );
    }
    if(you == 3 && com == 1){
      Alert.alert(
        "Hahahaha!",
        "You lose.",
        [
          { text: "OK", onPress: () => {
            setYou(null)
            setCom(null)
          }}
        ],
        { cancelable: false }
      );
    }
    
    if(you == 3 && com == 2){
      Alert.alert(
        "Congratulations",
        "You Win.",
        [
          { text: "OK", onPress: () => {
            setYou(null)
            setCom(null)
          }}
        ],
        { cancelable: false }
      );
    }
    if(you == com && you !== null && com !== null){
      Alert.alert(
        "Its Dray",
        "You both are same.",
        [
          { text: "OK", onPress: () => {
            setYou(null)
            setCom(null)
          }}
        ],
        { cancelable: false }
      );
    }
  } 
  function userImageGenerator (x) {
    if(x == 1){
      return require('../../assets/bt1.jpg')
    }
    if(x == 2){
      return require('../../assets/bt2.jpg')
    }
    if(x == 2){
      return require('../../assets/bt3.jpg')
    }
  } 
  useEffect(()=>{
    answerGenerator()
  },[you])
  return(
    <ScrollView>
        <View style={styles.MainBox}>
            <View style={styles.BotSection}>
            <View style={styles.BackBtnBox}>
             <TouchableOpacity onPress={()=>{prop.backBtn()}}style={styles.BackBtn}>
            <Image style={{height:"70%", width:"70%"}} source={require('../../assets/b.png')}/>
            </TouchableOpacity> 
          </View>
              <Text style={styles.Text}>Computer</Text>
              <View style={styles.Bot}>
                <Image style={{height:"100%", width:"100%"}} source={com}/>
              </View>
            </View>
            <View style={styles.AnimationBox}>
              <LottieView source={require('../../animations/23721-paper-plane.json')} autoPlay loop />
            </View>
            <View style={styles.PlayerBox}>
              <Text style={styles.Text}>You</Text>
              <View style={styles.Bot}>
                <Image style={{height:"100%", width:"100%"}} source={userImageGenerator(you)}/>
              </View>
            </View>
            <View style={styles.Btnsection}>
                <TouchableOpacity onPress={()=>{
                  setCom(
                    random([1,2,3])
                  )
                  setYou(1)
                }} style={styles.SlectBtn}>
                    <Image style={{height:"100%", width:"100%"}} source={require('../../assets/bt1.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                  setCom(
                    random([1,2,3])
                  )
                  setYou(2)
                }} style={styles.SlectBtn}>
                    <Image style={{height:"100%", width:"100%"}} source={require('../../assets/bt2.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                  setCom(
                    random([1,2,3])
                  )
                  setYou(3)
                }} style={styles.SlectBtn}>
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
    paddingHorizontal:10,
    paddingVertical:10,
    backgroundColor:"#280F28",
    // justifyContent:'space-between'
  },

  BackBtnBox:{
    width:"100%",
    // backgroundColor:"red",
    paddingHorizontal:20,

  },

  BackBtn:{
    height:60,
    width:60,
    // backgroundColor:"black",
  },

  BotSection:{
    height:250,
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    borderRadius:5,
    backgroundColor:"#384558",
  },

  Text:{
    fontSize:25,
    color:"#0077b6",
    fontFamily:"monospace"
  },

  Bot:{
      height:100,
      borderWidth: 2,
      borderRadius:5,
      borderStyle:"dashed",
      borderColor:"#8d99ae",
      width:100,
      marginTop:20,
  },

  AnimationBox:{
    // width:"100%",
    height:180,
    // backgroundColor:"whitesmoke",
  },

  ResultText:{
    fontSize:25,
    color:"yellow",
    fontFamily:"monospace"
  },

  PlayerBox:{
    height:200,
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#384558",
    borderRadius:5,
  },

  Btnsection:{
    height:100,
    width:"100%",
    backgroundColor:"#384558",
    borderRadius:5,
    flexDirection:"row",
    marginTop:25,
    paddingHorizontal:30,
    justifyContent:"space-between",
    alignItems:"center",
    // marginTop:70,
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

