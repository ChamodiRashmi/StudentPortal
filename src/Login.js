import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Header from './Components/Header'; // Assuming Header component is defined in a separate file

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <View>
        <Header />
        <View style={styles.container}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
          />

          <Button mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>
            Login
          </Button>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      marginBottom: 20, // Adjust as needed
      width: '80%', // Adjust as needed
    },
    button: {
      marginTop: 20, // Adjust as needed
    },
  });
  