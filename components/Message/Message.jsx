import { useState } from 'react';
import { Text } from 'react-native'

function Message() {
    const styles = StyleSheet.create({
        container: {
            borderColor: 'black',
            borderWidth: 1,
            flex: 1
        },
    })
    const [messageData, setMessageData] = useState(null)
    const getMessages = async () => {
        const res = await axios.get('backendURL goes here').then((data) => {
            setMessageData(data)
        })
    }
    return (
        <View style={styles.container}>
            <Text >Activities feed go here</Text>
        </View>
    )

}

export default Message