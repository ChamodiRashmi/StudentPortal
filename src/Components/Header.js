import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.redBar}>
        <View style={styles.content}>
          <Image source={require('../../assets/usj logo.png')} style={styles.logo} />
          <Text style={styles.text}>University of Sri Jayewardenepura</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#b01623',
    height: 80,
    width: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redBar: {
    height: '100%',
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    margin: 10,
    marginLeft: 30,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Header;
