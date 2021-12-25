import React, {useState, useEffect} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {  useNavigation } from '@react-navigation/core';



const LoginScreen = () => {
    const [email,setEmail]=useState('')
    const [password, setPassword]=useState('')
    const navigation = useNavigation()
    useEffect(()=>{
        auth.onAuthStateChanged(user=> {
            if(user){
                navigation.replace("Home")
            }
        })
    },[])

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user.email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage)
        });
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log('logged in with :', user.email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behaviour="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={text=>setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={text=>setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                    onPress={handleLogin}
                    style={ styles.button}
                >
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutLine]}
                >
                    <Text style={styles.buttonOutLineText}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    inputContainer:{
        width:'80%'
    },
    input:{
        backgroundColor:'#ffffff',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5
    },
    buttonContainer:{
        width: '60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40
    },
    button:{
        backgroundColor: '#0E86D4',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 5,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonOutLine:{
        backgroundColor:'#ffffff',
        marginTop:5,
        borderColor: '#0E86D4',
        borderWidth:1
    },
    buttonText:{
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutLineText:{
        color: '#0E86D4',
        fontWeight: '700',
        fontSize: 16,
    }

})
