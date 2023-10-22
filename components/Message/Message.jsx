import { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native'

function Message() {
    const styles = StyleSheet.create({
        container: {
            borderColor: 'black',
            borderWidth: 1,
            flex: 1,
        },
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
            <Text >Span existing messages</Text>
        </View>
    )

}

export default Message