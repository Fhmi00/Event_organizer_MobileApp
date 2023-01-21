import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ToastAndroid} from 'react-native';
import Logo from '../../assets/logo.png';
import IconFb from '../../assets/btnFacebook.png';
import IconGoogle from '../../assets/btnGoogle.png';
import IconBio from '../../assets/btnBio.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './style';
import {login} from '../../stores/actions/auth';
import {GetUserById} from '../../stores/actions/user';
import {useDispatch} from 'react-redux';

export default function Signin(props) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      console.log(form);
      // const result = await axios.post('auth/login', form);
      if (form.email === '' || form.password === '') {
        ToastAndroid.show(
          'Please fill your email/password ',
          ToastAndroid.CENTER,
        );
      } else {
        const result = await dispatch(login(form));
        await AsyncStorage.setItem(
          'userId',
          result.action.payload.data.data.userId,
        );
        await AsyncStorage.setItem(
          'token',
          result.action.payload.data.data.token,
        );
        await AsyncStorage.setItem(
          'refreshToken',
          result.action.payload.data.data.refreshToken,
        );
        await dispatch(GetUserById(result.action.payload.data.data.userId));

        ToastAndroid.show(result.action.payload.data.msg, ToastAndroid.SHORT);
        props.navigation.replace('AppScreen', {
          screen: 'Home',
        });
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.show(error.response.data.msg, ToastAndroid.SHORT);
    }
  };

  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };

  const navigateSignup = () => {
    props.navigation.replace('AuthScreen', {screen: 'Signup'});
  };
  const navigateForgotPassword = () => {
    props.navigation.replace('AuthScreen', {screen: 'ForgotPassword'});
  };
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={navigateSignup}>
        <Image source={Logo} style={styles.logo} />
      </TouchableOpacity>
      <Text style={styles.loginText}>Log In</Text>
      <Text style={styles.text}>Hi, Welcome back to Urticket!</Text>

      <Input
        placeholder={'Input your email'}
        onChangeText={text => handleChangeForm(text, 'email')}
      />
      <Input
        secureTextEntry={true}
        placeholder={'Input Password'}
        onChangeText={text => handleChangeForm(text, 'password')}
      />
      <TouchableOpacity onPress={navigateForgotPassword}>
        <Text style={styles.frogotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button text={'Login'} onPress={handleLogin} />
      <Text style={styles.textSign}>or sign in with</Text>
      <TouchableOpacity style={styles.icon}>
        <Image source={IconGoogle} />
        <Image source={IconFb} />
        <Image source={IconBio} />
      </TouchableOpacity>
    </View>
  );
}
