import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }),
      2000;
  });

  return (
    <View>
      <Text>page Splash</Text>
    </View>
  );
};

export default Splash;
