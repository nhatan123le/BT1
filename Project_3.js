import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Project_3 = () => {

  const handleClick = () => {
    Alert.alert('Hello')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={{ fontSize: 16, color: 'blue', fontStyle: 'italic', fontWeight: 'bold' }}>Button 1</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Project_3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  button: {
    backgroundColor: 'none',
    padding: 20
  }
})