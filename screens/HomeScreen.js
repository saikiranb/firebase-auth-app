import { NavigationContainer, useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {
    const navigation = useNavigation()
    const handleSignOut = () => {
        auth
        .signOut()
        .then(()=>{
            navigation.replace('Login')
        })
        .catch(error =>alert(error.message))
    }

    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email} </Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={handleSignOut}
            >
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    button:{
        backgroundColor: '#0E86D4',
        width: '60%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 15,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 16,
    },
})
