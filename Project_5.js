import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SquareComponent = ({ bgColor = 'aqua', text = 'Square 1' }) => (
  <View style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: bgColor }}>
    <Text>{text}</Text>
  </View>
)

const Project_5 = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row'
    }}>
      <SquareComponent />
      <SquareComponent text='Square 2' bgColor='pink' />
      <SquareComponent text='Square 3' bgColor='green' />
    </View>
  )
}

export default Project_5

const styles = StyleSheet.create({})