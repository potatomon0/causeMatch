import 'react-native-gesture-handler';
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import SearchBar from '../SearchBar/SearchBar'
import Activities from '../Activities/Activities'

function Home() {
    const Stack = createStackNavigator()
    return (
        // <Stack.Screen name='' component={}/>
        <>
            <SearchBar />
            <Activities />
        </>

    )
}

export default Home