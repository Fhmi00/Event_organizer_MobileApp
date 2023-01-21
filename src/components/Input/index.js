import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './style';

export default function Input(props) {
  return (
    <View>
      <TextInput
        style={styles.input}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        placeholderTextColor={'rgba(160, 163, 189, 1)'}
        onChangeText={props.onChangeText}
      />
    </View>
  );
}
