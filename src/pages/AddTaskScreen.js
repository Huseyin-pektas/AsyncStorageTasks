import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AddTaskScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text onPress={()=>navigation.navigate("Onboarding")}>AddTaskScreen</Text>

    </View>
  )
}

export default AddTaskScreen

const styles = StyleSheet.create({})