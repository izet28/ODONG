import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import welcome from './welcome.png';

const ActionButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 30,
        backgroundColor: '#FD79A8',
        paddingVertical: 13,
        width: 225,
        marginBottom: 35,
      }}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default function Welcome({navigation}) {
  const handleGotTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
      }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#FD79A8',
          marginBottom: 68,
          marginTop: 57,
        }}>
        Welcome to O-DONG
      </Text>
      <Image
        source={welcome}
        style={{
          width: 267,
          height: 169,
          marginBottom: 200,
        }}
      />
      <View>
        <ActionButton title="Login" onPress={() => handleGotTo('Login')} />
        <ActionButton
          title="Register"
          onPress={() => handleGotTo('Register')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
