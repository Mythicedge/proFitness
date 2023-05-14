import { StyleSheet, Text, ScrollView, Image, Pressable, View } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FitnessItems } from '../Context';
import { Feather } from '@expo/vector-icons';

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItems);
  return (
    <>
      <ScrollView style={{ backgroundColor: "white", marginTop: 50 }}>
        <Image style={{ width: '100%', height: 170 }} source={{ uri: route.params.image }} />
        {route.params.excersises.map((item, index) => (
          <Pressable style={{ margin: 10, flexDirection: "row", alignItems: "center" }} key={index}>
            <Image style={{ width: 90, height: 90 }} source={{ uri: item.image }} />

            <View style={{ marginLeft: 10, }}>
              <Text style={{ fontSize: 18, fontWeight: "bold", width: 225 }}>
                {item.name}
              </Text>
              <Text style={{ marginTop: 4, fontSize: 16, color: "gray" }}>
                x{item.sets}
              </Text>
            </View>
            {completed.includes(item.name) ? (
              <Feather name="check-circle" size={18} color="green" />
            ) : (
              null
            )}
          </Pressable>
        ))}
      </ScrollView>

      <Pressable style={{ backgroundColor: "blue", padding: 10, marginLeft: "auto", marginRight: "auto", marginVertical: 10, width: 120, borderRadius: 6 }}
        onPress={() => {
          navigation.navigate("FitScreen", { excersises: route.params.excersises })
          setCompleted([])
        }}>
      <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "600" }}>START</Text>
    </Pressable>
    </>
  )
}

export default WorkoutScreen

const styles = StyleSheet.create({})