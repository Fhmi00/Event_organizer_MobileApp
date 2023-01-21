import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 230,
    marginVertical: 5,
    marginHorizontal: 5,
    marginLeft: 18,
  },
  flatlist: {backgroundColor: 'white'},

  container: {flex: 1, backgroundColor: '#3366FF'},
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    margin: 5,
    width: 300,
    paddingHorizontal: 5,
    borderRadius: 20,
  },
  eventName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: 'white',
  },
  image: {width: 140, height: 210, borderRadius: 15, marginHorizontal: 5},
  detail: {position: 'absolute', bottom: 100, paddingHorizontal: 5},
  text: {color: 'white'},
});
export default styles;
