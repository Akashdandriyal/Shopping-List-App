import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Shopping List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#ffffff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
