import { StyleSheet, View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Activities() {
    const [activityData, setActivityData] = useState(null)
    const getActivities = async () => {
        const res = await axios.get('backendURL goes here').then((data) => {
            setActivityData(data)
        })
    }
    // useEffect(() => {
    //     getActivities()
    // })
    return (
        <View style={styles.container}>
            <Text >Activities feed go here</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderColor:'black',
        borderWidth:1,
        flex:1
    },
    
});

export default Activities