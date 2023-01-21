/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Logo from '../../assets/logo.png';

export default function ForgotPassword(props) {
  const handleForgotPassword = () => {
    props.navigation.replace('AuthScreen', {screen: 'Signin'});
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Image source={Logo} style={{width: '50%', margin: 12}} />
      <Text style={{fontSize: 30, margin: 12, color: '#373A42'}}>
        Forgot Password
      </Text>
      <View style={{display: 'flex', flexDirection: 'row', margin: 12}}>
        <Text style={{fontSize: 15, color: '#373A42'}}>
          You’ll get mail soon on your email
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholderTextColor={'rgba(160, 163, 189, 1)'}
        placeholder="Input your email"
        onChangeText={text => handleChangeForm(text, 'email')}
      />

      <TouchableOpacity style={styles.login} onPress={handleForgotPassword}>
        <Text style={{textAlign: 'center', color: 'white'}}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    paddingVertical: 20,
    margin: 12,
    backgroundColor: '#3366FF',
    padding: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    paddingVertical: 15,
    margin: 12,
    borderColor: '#C1C5D0',
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
  },
  icon: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
