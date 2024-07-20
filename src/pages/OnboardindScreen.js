import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../themes/Colors'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AsyncStorageKey from '../constants/AsyncStorageKey'

const OnboardindScreen = () => {
  const navigation = useNavigation()
  const width = Dimensions.get("screen").width


  const handleOnboardingComplete = async () => {
    await AsyncStorage.setItem(AsyncStorageKey.OnboardindgComplete, "true")
      navigation.replace("TaskList")

  }


  return (
    <View style={styles.container}>
      <View style={{
        width: width,
        backgroundColor: colors.primary,
        height: "70%",
        borderBottomLeftRadius: width / 2,
        borderBottomRightRadius: width / 2,
        transform: [{ scaleX: 1.5 }]
      }}>
        <View style={styles.inlineContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} resizeMode="stretch"
              source={require("../assets/image/Task2x.png")} />
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.FooterText}>Haydi işlerini Planla</Text>
            <TouchableOpacity style={styles.Touch}
              onPress={handleOnboardingComplete}
            >
              <Text style={styles.touchText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default OnboardindScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    alignItems: "center"

  },
  inlineContainer: {
  },
  imageContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 400,
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 130,
  },
  FooterText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary
  },
  Touch: {
    borderRadius: 5,
    margin: -10,
  },
  touchText: {
    fontSize: 50,
    padding: 10,
    fontWeight: "bold",
    color: colors.secondary,

  }
})