/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, Image, View, ImageBackground} from 'react-native';
// import HeaderDetail from '../../components/Header/detail.js';
import axios from '../../utils/axios';
import styles from './style';
import Button from '../../components/Button';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {dataOrder} from '../../stores/actions/dataOrder.js';

import IconLocation from 'react-native-vector-icons/EvilIcons';
import IconClock from 'react-native-vector-icons/EvilIcons';

export default function Detail(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [image, setImage] = useState('');
  const eventId = props.route.params.eventId;
  // console.log(eventId);

  useEffect(() => {
    getData();
    console.log(props.route.params.eventId);
  }, [image]);

  const getData = async () => {
    try {
      const result = await axios.get(`/event/${eventId}`);
      console.log(result.data.msg);
      setData(result.data.data);
      setImage(result.data.data[0]?.image);
      // console.log(image);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuyTickets = async () => {
    try {
      const body = {
        eventId: eventId,
        price: data[0]?.price,
      };
      await dispatch(dataOrder(body));
      props.navigation.replace('Booking', {
        eventId: eventId,
        price: data[0]?.price,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <HeaderDetail {...props} /> */}
      <ScrollView>
        <ScrollView>
          <View>
            <Image
              source={{
                uri: `https://res.cloudinary.com/dxjd1vzqg/image/upload/v1672099418/${data[0]?.image}`,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.eventName}>{data[0]?.name}</Text>
            <View style={styles.location}>
              <IconLocation name="location" color="red" size={30} />
              <Text style={styles.textLocation}>{data[0]?.location}</Text>
            </View>
            <View style={styles.location}>
              <IconClock name="clock" color="red" size={30} />
              <Text style={styles.textLocation}>
                {moment(data[0]?.dateTimeShow).format('ddd MMM Do , h:mm a')}
              </Text>
            </View>
            <Image source={require('../../assets/attendees.png')} />
          </View>

          <View style={styles.container_1}>
            <View style={styles.container_2}>
              <Text style={styles.title}>Detail</Text>
              <Text>{data[0]?.detail}</Text>
              <Text>Read More</Text>
              <Text style={styles.title}>Location</Text>
              <Text>{data[0]?.location}</Text>
            </View>
            <ImageBackground
              source={require('../../assets/location.png')}
              style={styles.map}
              resizeMode={'cover'}>
              <Button text={'Buy Tickets'} onPress={handleBuyTickets} />
            </ImageBackground>
          </View>
        </ScrollView>
      </ScrollView>
    </>
  );
}
