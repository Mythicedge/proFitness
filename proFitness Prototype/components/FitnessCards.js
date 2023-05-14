import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Fitness from '../data/Fitness'
import { useNavigation } from '@react-navigation/native';

const FitnessCards = () => {
  const FitnessData = Fitness;
  const navigation = useNavigation();
  return (
    <View>
      {FitnessData.map((item, key) => (
        <Pressable
          onPress={() => navigation.navigate("Workout", { image: item.image, excersises: item.excersises, id: item.id })}
          key={key}
          style={{ alignItems: "center", marginTop: 20 }}>

          <Image
            style={{ width: "90%", height: 140, borderRadius: 8 }}
            source={{ uri: item.image }}>
          </Image>

          <Text
            style={{ position: "absolute", color: "white", fontSize: 18, fontWeight: "bold", left: 25, top: 5 }}>
            {item.name}
          </Text>
        </Pressable>
      ))}
    </View>
  )
}

export default FitnessCards

const styles = StyleSheet.create({})