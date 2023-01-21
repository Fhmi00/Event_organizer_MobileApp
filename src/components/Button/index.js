import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';

export default function Button(props) {
  return (
    <View style={styles.Button}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
