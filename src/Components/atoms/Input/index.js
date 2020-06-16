import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = ({placeholder}) => {
  return (
    <View>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#FD79A8',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
    color: '#FD79A8',
  },
});
