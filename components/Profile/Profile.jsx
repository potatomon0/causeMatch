import { Text, Image, View, StyleSheet } from 'react-native'

function Profile() {
    const styles = StyleSheet.create({
        top: {
            flexDirection: "row",
        },
        nameBox: {
            borderColor: "black",
            borderWidth: 1,
            width: 170,
            margin: 20,
            marginLeft:8,
            height: 180
        },
        name: {
            borderColor: "black",
            borderWidth: 1,
            height: 50,
            textAlign: 'center',
            margin: 10
        },
        profileImg: {
            width: 200,
            height: 200,
            borderRadius: 100,
            borderColor: 'black',
            borderWidth: 1,
            margin:10,
            marginRight:5
        },
        tagBox: {
            borderColor: 'black',
            borderWidth: 1,
            flexDirection:'row',
            margin:10
        },
        tag: {
            borderColor: 'black',
            borderWidth: 1,
            width:55,
            height:55,
            margin:10,
            textAlign:'center'
        },
        contactInfo:{
            borderColor: 'black',
            borderWidth: 1,
            margin:10,
            textAlign:'center',
            height:85
        },
        experience:{
            borderColor: 'black',
            borderWidth: 1,
            height:350,
            margin:10,
            textAlign:'center'
        }
    })
    return (
        <View>
            <View style={styles.top}>
                <Image source={require('../../assets/images/female_profile_img.jpg')} style={styles.profileImg} />
                <View style={styles.nameBox}>
                    <Text style={styles.name}>Name</Text>
                    <Text style={styles.contactInfo}>Contact Info</Text>
                </View>
            </View>
            <View style={styles.tagBox}>
                <Text style={styles.tag}>Tag</Text>
                <Text style={styles.tag}>Tag</Text>
                <Text style={styles.tag}>Tag</Text>
                <Text style={styles.tag}>Tag</Text>
                <Text style={styles.tag}>Tag</Text>
            </View>
            <View>
                <Text style={styles.experience}>Previous Experience</Text>
            </View>
        </View>
    )
}

export default Profile