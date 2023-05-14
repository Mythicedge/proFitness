import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import FitnessCards from '../components/FitnessCards'
import { FitnessItems } from '../Context';

const Home = () => {
  const { minutes, calories, workout, } = useContext(FitnessItems);

  return (
    <ScrollView >
      <View style={{ backgroundColor: "grey", padding: 10, height: 150, width: "100%", marginTop: 50 }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Workout Reccomendations</Text>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 50 }}>

          <View>
            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>CALORIES LOST</Text>
            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>{calories}</Text>
          </View>

          <View>
            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>WORKOUTS COMPLETED</Text>
            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>{workout}</Text>
          </View>

          <View>
            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>TIME WORKING OUT</Text>
            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>{minutes}</Text>
          </View>

        </View>

      </View>

      <FitnessCards />

    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})