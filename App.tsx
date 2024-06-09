import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'


export default function App() {
  const mode = useColorScheme() === 'dark'
  const [colorChange, changeColor] = useState("#000000")

  const generateColor = () => {
    const HexValues = "0123456789abcdef"
    let colorValue = "#"

    for (let i = 0; i < 6; i++) {
      const element = HexValues[(Math.floor(Math.random()*16))];
        colorValue+=element
      
    }
    changeColor(colorValue);
  }
  
  return (
    <>
      <StatusBar backgroundColor={colorChange}/>
        <View style={[styles.container, {backgroundColor: colorChange}]}>
          <View style={mode?styles.buttonContainer : styles.buttonContainerLight }>
            <TouchableOpacity onPress={generateColor}>
          <Text style={mode?styles.headingText:styles.headingTextLight}>Color Switch</Text>
          </TouchableOpacity>
          </View>
        </View>
        
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1 ,
    
  },
  headingTextLight:{
    padding:20,
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
    fontSize: 16,
    backgroundColor: '#000',
    borderRadius: 30
  },
  headingText:{
    padding:20,
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 30

  },
  buttonContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  buttonContainerLight:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})