import { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native'

function Message() {
    const styles = StyleSheet.create({
        container: {
            borderColor: 'black',
            borderWidth: 1,
            flex: 1,
            paddingTop:20,
        },
        message:{
            // flex:1,
            borderWidth:1,
            borderColor:"black",
            height:75,
            margin:10,
            textAlign: 'center'
        }
    })
    const [messageData, setMessageData] = useState(null)
    const getMessages = async () => {
        const res = await axios.get('backendURL goes here').then((data) => {
            setMessageData(data)
        })
    }
    // useEffect(()=>{
    //     getMessages()
    // },[])
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Existing message</Text>
            <Text style={styles.message}>Existing messages</Text>
            <Text style={styles.message}>Existing messages</Text>
            <Text style={styles.message}>Existing messages</Text>
            <Text style={styles.message}>Existing messages</Text>
            <Text style={styles.message}>Existing messages</Text>
            <Text style={styles.message}>Existing messages</Text>
            
        </View>
    )

}

export default Message