import { StyleSheet, View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Activities() {
    const styles = StyleSheet.create({
        container: {
            borderColor: 'black',
            borderWidth: 1,
            flex: 1,
            margin:10,
        },
        activity: {
            borderWidth:1,
            borderColor:'black',
            height:100,
            margin:10,textAlign: 'center'
        }
    })
    const [activityData, setActivityData] = useState(null)
    const getActivities = async () => {
        const res = await axios.get('backendURL goes here').then((data) => {
            setActivityData(data)
        })
    }
    // useEffect(() => {
    //     getActivities()
    // },[])
    return (
        <View style={styles.container}>
            <Text style={styles.activity}>Activity feed from backend</Text>
            <Text style={styles.activity}>Activity feed from backend</Text>
            <Text style={styles.activity}>Activity feed from backend</Text>
            <Text style={styles.activity}>Activity feed from backend</Text>
            <Text style={styles.activity}>Activity feed from backend</Text>
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