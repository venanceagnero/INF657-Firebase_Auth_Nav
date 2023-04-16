import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { useState } from 'react';
import { TaskData, categories } from './TaskData';
import Task from "./Task";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function TaskList(
   
) {
    const [taskList, setTaskList] = useState(TaskData);
    const deleteTask = (id) => {
        console.log(taskList.filter((task) => task.id !== id));
    }

    return ( <SafeAreaView style = { styles.screen } >
            <FlatList data = { TaskData }
            keyExtractor = {
                (taskList) => taskList.id }
            renderItem = {
                ({ item }) => ( < Task title = { item.title }
                    description = { item.description }
                    image = { item.image }
                    onPress = {
                        () => console.log("Task selected", item.title) }
                    renderRightActions = {
                        () => ( <View style = { styles.deletecontainer } >
                            <TouchableWithoutFeedback onPress = {
                                () => deleteTask(item.id) } >
                            <MaterialCommunityIcons name = "trash-can"
                            size = { 35 }
                            color = "black" / >
                            </TouchableWithoutFeedback>
                            </View>
                        )
                    }
                    />)}/ >
                    </SafeAreaView>
                )



            }

            const styles = StyleSheet.create({
                screen: {
                    paddingTop: Constants.statusBarHeight,
                    flex: 1,
                },
                deletecontainer: {
                    backgroundColor: "red",
                    width: 70,
                    justifyContent: "center",
                    alignItems: "center"
                }

            })