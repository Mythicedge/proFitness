import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, Alert, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

function BMICalculator({ navigation }) {

    //state
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState((weight / (height * height)) * 703);
  
    function calculateBMI() {
      var w = parseInt({ weight });
      var h = parseInt({ height });
      var newBMI = (weight / (height * height)) * 703;
      //const newBMI = (weight / (height * height)) * 703;
      setBmi(newBMI);
      Alert.alert('Alert', 'Your BMI: ' + newBMI);
    }
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      
  
        <Text>BMI calculator</Text>
        <Text>Enter your weight</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          value={weight}
          placeholder='weight lbs'
          onChangeText={(val) => setWeight(val)}
        />
  
  
        <Text>Enter your height</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          value={height}
          placeholder='height in'
          onChangeText={(val) => setHeight(val)}
        //onChangeText={(val) => this.setHeight(val.target.value)}
        />
  
        <Text>weight: {weight}, height: {height}</Text>
        <Text>Your BMI: {bmi} </Text>
  
        <Button onPress={calculateBMI} title="Press to calculate BMI" />
      </View>
    );
  }

  export default BMICalculator;

  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 20,
      width: 200,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    }
  })