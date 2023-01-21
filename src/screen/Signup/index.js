import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import {Checkbox} from 'react-native-paper';
import Logo from '../../assets/logo.png';
import axios from '../../utils/axios';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Signup(props) {
  const [checked, setChecked] = React.useState(false);
  const [form, setForm] = useState({});
  const handSignUp = async () => {
    try {
      console.log(form);
      await axios.post('/auth/register', form);
      props.navigation.replace('AuthScreen', {screen: 'Signin'});
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };

  const navigateLogin = () => {
    props.navigation.replace('AuthScreen', {screen: 'Signin'});
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.textSignup}>Sign Up</Text>
      <View style={styles.view_1}>
        <Text style={styles.h4}>Already have an account?</Text>
        <TouchableOpacity onPress={navigateLogin}>
          <Text style={styles.textLogin}>Log In</Text>
        </TouchableOpacity>
      </View>

      <Input
        style={styles.input}
        placeholderTextColor={'rgba(160, 163, 189, 1)'}
        placeholder={'Input your email'}
        onChangeText={text => handleChangeForm(text, 'email')}
      />
      <Input
        style={styles.input}
        secureTextEntry={true}
        placeholder={'Input Password'}
        placeholderTextColor={'rgba(160, 163, 189, 1)'}
        onChangeText={text => handleChangeForm(text, 'password')}
      />
      <Input
        style={styles.input}
        secureTextEntry={true}
        placeholder={'Confirm Password'}
        placeholderTextColor={'rgba(160, 163, 189, 1)'}
        onChangeText={text => handleChangeForm(text, 'confirmPassword')}
      />
      <View style={styles.view_2}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text>Accept term and condition</Text>
      </View>
      <Button text={'SignUp'} onPress={handSignUp} />
    </ScrollView>
  );
}
