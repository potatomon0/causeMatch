import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import {Stack} from 'expo-router'
import Home from '../components/Home/Home'
import Message from '../components/Message/Message'
import Profile from '../components/Profile/Profile'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Main = () => {
    const Tab = createBottomTabNavigator()
    return (
        <SafeAreaView>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Message" component={Message} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator> 
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Main