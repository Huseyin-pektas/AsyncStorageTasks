import { Dimensions, SafeAreaView, StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { useState } from 'react'
import colors from '../themes/Colors'
import CustomTextInput from '../components/CustomTextInput'
import TodoItem from '../components/TodoItem'

const TaskListScreen = () => {

  const [search, setSearch] = useState("")
  const [tasks , setTasks] = useState([
    {
      userId:1,
      id:1,
      title:"title",
      status:"closed"
    },
    {
      userId:2,
      id:2,
      title:"title",
      status:"open"
    },
    {
      userId:3,
      id:3,
      title:"title",
      status:"done"
    },
    {
      userId:4,
      id:4,
      title:"title",
      status:"closed"
    },
    {
      userId:5,
      id:5,
      title:"title",
      status:"closed"
    },
    {
      userId:6,
      id:6,
      title:"title",
      status:"closed"
    }
  ])

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <SafeAreaView style={[styles.container,{marginBottom:20}]}>
          <CustomTextInput value = ""
          onChangeText={setSearch}
          />
          <FlatList
          data={tasks}
          renderItem={({item})=> <TodoItem/>}
          
          />
        </SafeAreaView>
      </View>
    </View>
  )
}

export default TaskListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary
  },
  mainContainer:{
    height:"100%",
    position:"absolute",
    width:Dimensions.get("screen").width,
    padding:15
  }
})