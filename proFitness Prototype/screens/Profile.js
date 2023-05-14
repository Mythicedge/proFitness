import { StyleSheet, KeyboardAvoidingView, Text, SafeAreaView, Pressable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >

    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => {
                    navigation.navigate("Home")
                }} style = {styles.button}>
        <Text style={styles.buttonText}>WORKOUT SCREEN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
                    navigation.navigate("BMI")
                }} style = {[styles.button, styles.buttonOutline]}>
        <Text style={styles.buttonOutlineText}>BMI CALCULATOR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
                    navigation.navigate("Home1")
                }} style = {styles.button}>
        <Text style={styles.buttonText}>SETTINGS SCREEN</Text>
      </TouchableOpacity>
    </View>

    </KeyboardAvoidingView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,

  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonOutlinText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  }
})