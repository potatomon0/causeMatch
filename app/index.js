import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import {Stack,useRouter} from 'expo-router'

const Home = () => {
    const router = useRouter()
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home