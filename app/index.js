import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react';
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home/Home'
import Message from '../components/Message/Message'
import Profile from '../components/Profile/Profile'

const Main = () => {
    const Tab = createBottomTabNavigator()
    const styles = StyleSheet.create({
        safeAreaView: {

        }
    })
    return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Message" component={Message} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
    )
}

export default Main