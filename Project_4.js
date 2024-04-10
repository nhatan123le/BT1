import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Project_1 from './Project_1'

const Project_4 = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text
        style={{ padding: 20 }}>
        You 've pressed button: {count} {count < 1 ? 'time' : 'times'}
      </Text>
      <TouchableOpacity
        onPress={handleClick}
        style={{ padding: 2 }}
      >
        <Text>Press Me</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Project_4;

const styles = StyleSheet.create({})