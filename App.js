import React, {useCallback} from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import Game from './component/game';
import Menu from './component/start-screen';
import { useState } from 'react'


const App = () =>{

    let [Show, setmenu] = useState(true)

    if(Show){
      return(
        <Menu Changer={()=>{
          setmenu(false)
        }}/>
      )
    }
    else{
      return (
        <Game backBtn={()=>{
          setmenu(true)
        }}/>
      )
  }
}



  



export default App;

