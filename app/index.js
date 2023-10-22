import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react';
import { Stack } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home/Home'
import Message from '../components/Message/Message'
import Profile from '../components/Profile/Profile'
import { AntDesign } from '@expo/vector-icons'

const Main = () => {
    const Tab = createBottomTabNavigator()
    const styles = StyleSheet.create({
        safeAreaView: {

        }
    })
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={24} color="black" />
                    ),
                    
                }}
            />
            <Tab.Screen name="Message" component={Message} options={{
                tabBarLabel: 'Message',
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="message1" size={24} color="black" />
                ),
            }}
            />
            <Tab.Screen name="Profile" component={Profile} 
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="profile" size={24} color="black" />
                ),
            }}
            />
        </Tab.Navigator>
    )
}

export default Main