import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from '../../Components';
import {IconBack} from '../../Assets';
export default function Register() {
  return (
    <View style={{padding: 12}}>
      <IconBack width={25} height={25} style={{marginBottom: 40}} />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          maxWidth: 199,
          color: '#FD79A8',
          marginLeft: 27,
        }}>
        Mohon isi beberapa data untuk proses daftar anda
      </Text>
      <View style={{height: 103}} />
      <Input placeholder="masukan nama" />
      <View style={{height: 33}} />
      <Input placeholder="masukan alamat email" />
      <View style={{height: 33}} />
      <Input placeholder="masukan password" />
    </View>
  );
}

const styles = StyleSheet.create({});
