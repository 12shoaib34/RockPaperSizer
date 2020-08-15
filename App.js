import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import Game from './component/game';
import Manu from './component/start-screen';

const App = () =>{
  return(
    <Game/>
  )
}

 const styles = StyleSheet.create({
  
  MainBox:{
    height:"100%",
    width:"100%",
    backgroundColor:"#c7c781"
  },

  BotSection:{
    height:"45%",
    width:"100%",
    backgroundColor:"red",
  },

  ResultBox:{
    height:"10%",
    width:"100%",
    backgroundColor:"blue",
  },

  PlayerBox:{
    height:"45%",
    width:"100%",
    backgroundColor:"red",
  },

  Btnsection:{
    marginTop:"40%",
    height:"50%",
    width:"100%",
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

export default App;

