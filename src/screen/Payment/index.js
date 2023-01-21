import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import styles from './style';
import axios from '../../utils/axios';
import {useSelector} from 'react-redux';

export default function Payment(props) {
  const dataUser = useSelector(state => state.user.data);
  const userId = dataUser.id;
  const dataOrder = props.route.params.params;
  console.log(dataOrder);
  console.log(dataUser);
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);

  const handlePayment = async () => {
    try {
      const resultBooking = await axios.post(`booking/${userId}`, dataOrder);
      console.log(resultBooking);
      ToastAndroid.show(resultBooking.data.msg, ToastAndroid.SHORT);
      props.navigation.navigate('Pay', {
        params: resultBooking.data.data.redirectUrl,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ScrollView style={styles.payment}>
        <View style={styles.paymentSection}>
          <Text style={styles.paymentText}>Payment Method</Text>
          <View style={styles.paymentMethod}>
            <RadioButton
              value="first"
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Image
              source={require('../../assets/card.png')}
              style={styles.paymentImage}
            />
            <Text style={styles.paymentMethodText}>Card</Text>
          </View>
          <View style={styles.paymentMethod}>
            <RadioButton
              value="first"
              status={checked2 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked2(!checked2);
              }}
            />
            <Image
              source={require('../../assets/bank.png')}
              style={styles.paymentImage}
            />
            <Text style={styles.paymentMethodText}>Bank Transfer {userId}</Text>
          </View>
          <View style={styles.paymentMethod}>
            <RadioButton
              value="first"
              status={checked3 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked3(!checked3);
              }}
            />
            <Image
              source={require('../../assets/retail.png')}
              style={styles.paymentImage}
            />
            <Text style={styles.paymentMethodText}>Retail</Text>
          </View>
          <View style={styles.paymentMethod}>
            <RadioButton
              value="first"
              status={checked4 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked4(!checked4);
              }}
            />
            <Image
              source={require('../../assets/e-money.png')}
              style={styles.paymentImage}
            />
            <Text style={styles.paymentMethodText}>E - Money</Text>
          </View>
          <View style={styles.rowPayment}>
            <Text style={styles.total}>Total Payment</Text>
            <Text style={styles.price}>{dataOrder.totalPayment + ' $'}</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonPayment}
            onPress={handlePayment}>
            <Text style={styles.button}>Payment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
