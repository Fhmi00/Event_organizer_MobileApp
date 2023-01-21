/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import IconSearch from 'react-native-vector-icons/AntDesign';
import axios from '../../utils/axios';
import styles from './style';
import moment from 'moment';
import CardEvent from '../../components/CardEvent';
// import logCurrentStorage from '../../utils/checkAsyncStorage';

export default function Home(props) {
  const [data, setData] = useState([]);
  const [dateShow, setDateShow] = useState(
    moment(new Date()).format('YYYY-MM-DD'),
  );
  const [listDateShow, setListDateShow] = useState([]);

  useEffect(() => {
    // logCurrentStorage();
    getData();
    generateDate();
  }, [dateShow]);

  const getData = async () => {
    try {
      const result = await axios.get(
        `/event?page=1&limit=50&sort=&searchDateShow=${dateShow}&searchName=`,
      );
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const generateDate = () => {
    let listDate = [
      moment(dateShow).subtract(2, 'days'),
      moment(dateShow).subtract(1, 'days'),
      dateShow,
      moment(dateShow).subtract(-1, 'days'),
      moment(dateShow).subtract(-2, 'days'),
    ];
    setListDateShow(listDate);
  };

  const selectDate = date => {
    setDateShow(date);
  };
  console.log(listDateShow);
  const handleDetail = id => {
    props.navigation.navigate('Detail', {eventId: id});
  };

  const viewAll = () => props.navigation.navigate('AllEvent');
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.search}>
          <IconSearch name="search1" color="white" size={30} />
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="Event Name"
          />
        </View>
        <View style={styles.sortDateContainer}>
          {listDateShow.map((item, index) => (
            <TouchableOpacity
              style={index === 2 ? styles.active : styles.notActive}
              key={index}
              onPress={() => {
                selectDate(moment(item).format('YYYY-MM-DD'));
              }}>
              <View>
                <Text style={styles.date}>{moment(item).format('DD')}</Text>
                <Text style={styles.date}>{moment(item).format('ddd')}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.view_1}>
          <View style={styles.view_2}>
            <Text style={styles.textEvent}>Events For You</Text>
            <TouchableOpacity onPress={viewAll}>
              <Image source={require('../../assets/filter.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <CardEvent data={data} handleDetail={handleDetail} />
        </View>
      </View>
    </ScrollView>
  );
}
