/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import axios from '../../utils/axios';
import {getBookingSection} from '../../stores/actions/booking';
export default function Order(props) {
  const dispatch = useDispatch();
  // const detailEvent = useSelector(state => state.dataOrder);
  const eventId = props.route.params.eventId;
  console.log(eventId);

  // const dataSection = useSelector(state => state.dataSection);
  // const [data, setData] = useState({});
  // console.log(dataSection);
  const [listBooking, setListBooking] = useState([]);
  // console.log(listBooking);

  useEffect(() => {
    getDataBooking();
  }, [eventId]);

  const getDataBooking = async () => {
    try {
      // await axios.get(`/booking/bookingSection/${eventId}`);
      const section = await dispatch(getBookingSection(eventId));

      // setData(result1.data);

      // const dataSection = dispatch(getBookingSection(eventId));
      // const DATADUMMY = {
      //   status: 200,
      //   message: 'Success Get Data Section By Event Id',
      //   data: [
      //     {
      //       section: 'REG1-1',
      //       booked: 30,
      //       available: 0,
      //       statusFull: true,
      //     },
      //     {
      //       section: 'REG1-2',
      //       booked: 15,
      //       available: 15,
      //       statusFull: false,
      //     },
      //     {
      //       section: 'REG1-3',
      //       booked: 0,
      //       available: 30,
      //       statusFull: false,
      //     },
      //     {
      //       section: 'REG1-4',
      //       booked: 30,
      //       available: 0,
      //       statusFull: true,
      //     },
      //     {
      //       section: 'VVIP1-1',
      //       booked: 5,
      //       available: 5,
      //       statusFull: false,
      //     },
      //   ],
      // };
      const seat = [
        {
          type: 'VVIP',
          section: 1,
        },
        {type: 'VIP', section: 7},
        {type: 'REG', section: 9},
      ];
      const result = seat.map(item => {
        let data = []; // VVIP, VIP, REG
        for (let i = 1; i <= 4; i++) {
          // DIGUNAKAN UNTUK MENCARI DATA TIAP BAGIAN
          for (let j = 1; j <= item.section; j++) {
            // DIGUNAKAN UNTUK MENCARI DATA TIAP SECTION
            const filterSeat = section.data.filter(
              dataSeat => dataSeat.section === `${item.type}${i}-${j}`, // VVIP1-1 === VVIP1-1
            );
            // filterSeat = [{
            //   section: 'VVIP1-1',
            //   booked: 5,
            //   available: 5,
            //   statusFull: false,
            // }]
            const checkData = data.filter(
              dataAvailable => dataAvailable.type === item.type,
            ); // DIGUNAKAN UNTUK MENCARI TAU APAKAH TYPE SUDAH MASUK KE DALAM VARIABEL DATA ?
            // checkData = []
            if (checkData.length < 1) {
              // pengecekan data
              if (filterSeat.length < 1) {
                // JIKA DATA BELUM MASUK KEDALAM DATA BOOKING
                data.push({
                  type: item.type,
                  section: `${item.type}${i}-${j}`,
                  available: item.type.includes('VVIP')
                    ? 10
                    : item.type.includes('VIP')
                    ? 20
                    : 30,
                });
              }
              if (filterSeat.length > 0 && !filterSeat[0]?.statusFull) {
                // JIKA DATA SUDAH MASUK KEDALAM DATA BOOKING
                data.push({
                  type: filterSeat[0].section.includes('VVIP')
                    ? 'VVIP'
                    : item.type.includes('VIP')
                    ? 'VIP'
                    : 'REG',
                  section: filterSeat[0].section,
                  available: filterSeat[0].available,
                });
              }
            }
          }
        }
        return data;
      });
      // result = [[{type: "REG",section: "REG1-1", available: 30}], [{type: "VIP",section: "VIP1-1", available: 20}], [{type: "VVIP",section: "VVIP1-1", available: 5}]]
      const newResult = result.map(item => item[0]);
      // newResult = [
      //   {type: 'REG', section: 'REG1-1', available: 30},
      //   {type: 'VIP', section: 'VIP1-1', available: 20},
      //   {type: 'VVIP', section: 'VVIP1-1', available: 5},
      // ];
      setListBooking(newResult);
    } catch (error) {}
  };
  const checkout = id => {
    props.navigation.navigate('Booking', {eventId: id});
  };

  return (
    <>
      <ScrollView style={styles.booking}>
        <View style={styles.seat}>
          <Image source={require('../../assets/seat.png')} />
          <View style={styles.ticket}>
            <Text style={styles.ticketText}>Tickets</Text>
            <Text style={styles.sort}>By Price</Text>
            <Icon name="sort" size={35} color="blue" />
          </View>
          <View style={styles.section}>
            <Image source={require('../../assets/reg.png')} />
            <View style={styles.sectionCategory}>
              <Text style={styles.sectionText}>Section REG, Row 1</Text>
              <Text style={styles.sectionLeft}>12 seat available</Text>
            </View>
            <View style={styles.sectionPrice}>
              <Text style={styles.sectionText}>$15</Text>
              <Text style={styles.sectionLeft}>Per person</Text>
            </View>
          </View>
          <View style={styles.quantity}>
            <Text style={styles.quantityText}>Quantity</Text>
          </View>
          <View style={styles.section}>
            <Image source={require('../../assets/vip.png')} />
            <View style={styles.sectionCategory}>
              <Text style={styles.sectionText}>Section VIP, Row 2</Text>
              <Text style={styles.sectionLeft}>9 seat available</Text>
            </View>
            <View style={styles.sectionPrice}>
              <Text style={styles.sectionText}>$35</Text>
              <Text style={styles.sectionLeft}>Per person</Text>
            </View>
          </View>
          <View style={styles.quantity}>
            <Text style={styles.quantityText}>Quantity</Text>
          </View>
          <View style={styles.section}>
            <Image source={require('../../assets/vvip.png')} />
            <View style={styles.sectionCategory}>
              <Text style={styles.sectionText}>Section VVIP, Row 3</Text>
              <Text style={styles.sectionLeft}>6 seat available</Text>
            </View>
            <View style={styles.sectionPrice}>
              <Text style={styles.sectionText}>$50</Text>
              <Text style={styles.sectionLeft}>Per person</Text>
            </View>
          </View>
          <View style={styles.quantity}>
            <Text style={styles.quantityText}>Quantity</Text>
          </View>
          <View style={styles.checkout}>
            <Text style={styles.ticketSection}>Ticket Section</Text>
            <Text style={styles.category}>VIP</Text>
          </View>
          <View style={styles.checkout}>
            <Text style={styles.quantityText}>Quantity</Text>
            <Text style={styles.VIP}>2</Text>
          </View>
          <View style={styles.checkout}>
            <Text style={styles.quantityText}>Total Payment</Text>
            <Text style={styles.VIP}>$70</Text>
          </View>
          <TouchableOpacity style={styles.buttonCheckout} onPress={checkout}>
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
