import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 300,
    marginHorizontal: 20,
  },
  flatlist: {backgroundColor: 'white'},
  eventDate: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: 'white',
  },
  eventName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: 'white',
  },
  image: {width: 200, height: 300, borderRadius: 15, marginRight: 12},
  detail: {position: 'absolute', bottom: 30, paddingHorizontal: 12},
  text: {color: 'white'},
});
export default styles;
