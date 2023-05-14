import { StyleSheet, Text, SafeAreaView, Image, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FitnessItems } from '../Context';

const FitScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const excersises = route.params.excersises;
    const current = excersises[index];
    const { completed, setCompleted, minutes, setMinutes, calories, setCalories, workout, setWorkout } = useContext(FitnessItems);
    return (
        <SafeAreaView style={{ marginTop: 50 }}>
            <Image style={{ width: "100%", height: 370 }} source={{ uri: current.image }} />
            <Text style={{ marginLeft: "auto", marginRight: "auto", marginTop: 30, fontSize: 25, fontWeight: "bold" }}>{current.name}</Text>
            <Text style={{ marginLeft: "auto", marginRight: "auto", marginTop: 30, fontSize: 30, fontWeight: "bold" }}>x{current.sets}</Text>
            {index + 1 >= excersises.length ? (
                <Pressable onPress={() => {
                    navigation.navigate("Home")
                }}
                    style={{ backgroundColor: "blue", marginLeft: "auto", marginRight: "auto", marginTop: 30, borderRadius: 20, padding: 10, width: 150 }}>
                    <Text style={{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: 20 }}>DONE</Text>
                </Pressable>
            ) : (
                <Pressable onPress={() => {
                    navigation.navigate("RestScreen")
                    setCompleted([...completed, current.name])
                    setWorkout(workout + 1)
                    setMinutes(minutes + 2.5)
                    setCalories(calories + 6.30)
                    setTimeout(() => {
                        setIndex(index + 1)
                    }, 2000);
                }}
                    style={{ backgroundColor: "blue", marginLeft: "auto", marginRight: "auto", marginTop: 30, borderRadius: 20, padding: 10, width: 150 }}>
                    <Text style={{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: 20 }}>DONE</Text>
                </Pressable>
            )}

            <Pressable
                style={{ flexDirection: "row", alignItems: "center", marginLeft: "auto", marginRight: "auto", marginTop: 50 }}>
                <Pressable
                    disabled={index === 0}
                    onPress={() => {
                        navigation.navigate("RestScreen");

                        setTimeout(() => {
                            setIndex(index - 1)
                        }, 2000);
                    }} style={{ backgroundColor: "green", padding: 10, borderRadius: 20, marginHorizontal: 20, width: 100 }}>
                    <Text style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: 15 }}>PREV</Text>
                </Pressable>

                {index + 1 >= excersises.length ? (
                    <Pressable onPress={() => {
                        navigation.navigate("Home")
                    }}
                        style={{ backgroundColor: "red", padding: 10, borderRadius: 20, marginHorizontal: 20, width: 100 }}>
                        <Text style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: 15 }}>SKIP</Text>
                    </Pressable>
                ) : (
                    <Pressable onPress={() => {
                        navigation.navigate("RestScreen")
                        setTimeout(() => {
                            setIndex(index + 1)
                        }, 2000);
                    }}
                        style={{ backgroundColor: "red", padding: 10, borderRadius: 20, marginHorizontal: 20, width: 100 }}>
                        <Text style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: 15 }}>SKIP</Text>
                    </Pressable>
                )}

            </Pressable>
        </SafeAreaView>
    )
}

export default FitScreen

const styles = StyleSheet.create({})