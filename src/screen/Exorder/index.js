/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function Order(props) {
  const event = props.route.params.params;
  const [listBooking, setListBooking] = useState([]);
  const [numReg, setNumReg] = useState(0);
  const [typeReg, setTypeReg] = useState([]);
  const [typeVip, setTypeVip] = useState([]);
  const [typeVvip, setTypeVvip] = useState([]);
  // const [type, setType] = useState([]);
  const [numVvip, setNumVvip] = useState(0);
  const [numVip, setNumVip] = useState(0);
  const pushOrder = {
    eventId: event.eventId,
    eventName: event.name,
    totalTicket: numVvip + numVip + numReg,
    totalPayment: numVvip * 30 + numVip * 20 + numReg * 10,
    section: [...typeVvip, ...typeVip, ...typeReg],
  };

  useEffect(() => {
    getDataBooking();
    console.log(event.eventId);
    // console.log(typeVip);
    // console.log(typeVvip);
  }, []);

  useEffect(() => {
    getDataBooking();
  }, [numVvip, numVip, numReg]);

  const getDataBooking = () => {
    // https://www.notion.so/Modul-Booking-293a2b5a8f2b4d09a8e1f25304592c22
    const DATADUMMY = {
      status: 200,
      message: 'Success Get Data Section By Event Id',
      data: [
        {
          section: 'REG1-1',
          booked: 30,
          available: 0,
          statusFull: true,
        },
        {
          section: 'REG1-2',
          booked: 15,
          available: 15,
          statusFull: false,
        },
        {
          section: 'REG1-3',
          booked: 0,
          available: 30,
          statusFull: false,
        },
        {
          section: 'REG1-4',
          booked: 30,
          available: 0,
          statusFull: true,
        },
        {
          section: 'VVIP1-1',
          booked: 5,
          available: 5,
          statusFull: false,
        },
      ],
    };
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
          const filterSeat = DATADUMMY.data.filter(
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
                price: item.type.includes('VVIP')
                  ? 30
                  : item.type.includes('VIP')
                  ? 20
                  : 10,
                image: item.type.includes('VVIP')
                  ? 'https://res.cloudinary.com/di6rwbzkv/image/upload/v1669092860/Riven/User/vvip_fxampo.png'
                  : item.type.includes('VIP')
                  ? 'https://res.cloudinary.com/di6rwbzkv/image/upload/v1669092857/Riven/User/vip_nikrqp.png'
                  : 'https://res.cloudinary.com/di6rwbzkv/image/upload/v1669092849/Riven/User/regular_ucoa8l.png',
                function: item.type.includes('VVIP')
                  ? numVvip
                  : item.type.includes('VIP')
                  ? numVip
                  : numReg,
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
                price: filterSeat[0].section.includes('VVIP')
                  ? 30
                  : item.type.includes('VIP')
                  ? 20
                  : 10,
                image: filterSeat[0].section.includes('VVIP')
                  ? 'https://res.cloudinary.com/di6rwbzkv/image/upload/v1669092860/Riven/User/vvip_fxampo.png'
                  : item.type.includes('VIP')
                  ? 'https://res.cloudinary.com/di6rwbzkv/image/upload/v1669092857/Riven/User/vip_nikrqp.png'
                  : 'https://res.cloudinary.com/di6rwbzkv/image/upload/v1669092849/Riven/User/regular_ucoa8l.png',
                function: filterSeat[0].section.includes('VVIP')
                  ? numVvip
                  : item.type.includes('VIP')
                  ? numVip
                  : numReg,
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
    //   {type: 'REG', section: 'REG1-1', available: 30,price:30},
    //   {type: 'VIP', section: 'VIP1-1', available: 20},
    //   {type: 'VVIP', section: 'VVIP1-1', available: 5},
    // ];
    setListBooking(newResult);
  };

  // const handleplus = (type, stock) => {
  //   setNum(num + 1);
  //   if (type === 'VVIP') {
  //     setNumVvip(numVvip + 1);
  //   } else if (type === 'VIP') {
  //     setNumVip(numVip + 1);
  //   }
  //   type === 'VVIP' ? setNumVvip(numVvip + 1) : setNumVvip(numVvip);
  // };

  const handleCheckout = () => {
    props.navigation.navigate('Payment', {params: pushOrder});
  };

  return (
    <>
      <ScrollView>
        <StatusBar
          backgroundColor={'#3366FF'}
          barStyle="light-content"
          translucent={false}
        />
        <View style={{backgroundColor: '#3366FF', height: 70}} />
        <ScrollView style={style.mainContainer}>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <Image source={require('../../assets/img/seat.png')} />
          </View>
          <View style={{marginVertical: 30}}>
            <Text style={style.p}>Tickets</Text>
            {/* <Text style={style.p}>{typeVvip.join()}</Text>
            <Text style={style.p}>{typeVip.join()}</Text>
            <Text style={style.p}>{typeReg.join()}</Text>
            <Text style={style.p}>{pushOrder.section.join()}</Text> */}
          </View>
          <View>
            {listBooking.map(item => (
              <View
                key={item.type}
                style={{marginBottom: 20, flexDirection: 'row'}}>
                <View style={{marginRight: 10}}>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    style={style.imgTicket}
                  />
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: 240,
                    }}>
                    <Text style={style.section}>SECTION {item.type}</Text>
                    <Text style={style.section}>${item.price}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: 265,
                    }}>
                    <Text style={style.sectionSeat}>
                      {item.available} Seats Available
                    </Text>
                    <Text style={style.sectionSeat}>per person</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: 275,
                    }}>
                    <Text style={style.section}>Quantity</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 100,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          if (item.type === 'VVIP') {
                            setNumVvip(numVvip - 1);
                            setTypeVvip(typeVvip.slice(0, -1));
                          } else if (item.type === 'VIP') {
                            setNumVip(numVip - 1);
                            setTypeVip(typeVip.slice(0, -1));
                          } else if (item.type === 'REG') {
                            setNumReg(numReg - 1);
                            setTypeReg(typeReg.slice(0, -1));
                          }

                          if (numVvip <= 0) {
                            setNumVvip(0);
                          }
                          if (numVip <= 0) {
                            setNumVip(0);
                          }
                          if (numReg <= 0) {
                            setNumReg(0);
                          }
                        }}>
                        <Image source={require('../../assets/img/minus.png')} />
                      </TouchableOpacity>
                      <Text style={style.p}>{item.function}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          if (item.type === 'VVIP') {
                            setNumVvip(numVvip + 1);
                            setTypeVvip(typeVvip => [...typeVvip, item.type]);
                          } else if (item.type === 'VIP') {
                            setNumVip(numVip + 1);
                            setTypeVip(typeVip => [...typeVip, item.type]);
                          } else if (item.type === 'REG') {
                            setNumReg(numReg + 1);
                            setTypeReg(typeReg => [...typeReg, item.type]);
                          }

                          if (numVvip >= item.available) {
                            setNumVvip(item.available);
                          } else if (numVip >= item.available) {
                            setNumVip(item.available);
                          } else if (numReg >= item.available) {
                            setNumReg(item.available);
                          }
                        }}>
                        <Image source={require('../../assets/img/plus.png')} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <View style={style.checkout}>
          <View>
            <Text style={style.section}>Ticket : {pushOrder.totalTicket}</Text>
            <Text style={style.section}>Total : ${pushOrder.totalPayment}</Text>
          </View>
          <TouchableOpacity style={style.btnLogin} onPress={handleCheckout}>
            <Text style={style.btnloginText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FCFCFC',
    width: '100%',
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // minHeight: 650,
    height: '100%',
    marginTop: -30,
    paddingBottom: 100,
  },
  p: {
    fontSize: 18,
    marginBottom: 8,
    lineHeight: 24,
    color: 'black',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  section: {
    fontSize: 15,
    // marginBottom: 8,
    lineHeight: 24,
    color: 'black',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  sectionSeat: {
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 24,
    color: '#C1C5D0',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  imgTicket: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  checkout: {
    backgroundColor: '#FCFCFC',
    borderRadius: 20,
    height: 100,
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnLogin: {
    backgroundColor: '#3366FF',
    borderRadius: 15,
    paddingVertical: 12,
    marginBottom: 16,
    elevation: 10,
    shadowColor: '#3366FF',
    height: 60,
    width: 240,
  },
  btnloginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-bold',
  },
});
