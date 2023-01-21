import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {fontFamily: 'Poppins-Bold'},
  image: {height: 400, width: '100%'},
  container: {
    position: 'absolute',
    top: 150,
    flexDirection: 'column',
    margin: 12,
  },
  eventName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: 'white',
  },
  location: {flexDirection: 'row'},
  textLocation: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: 'white',
  },
  container_1: {
    marginTop: -30,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 30,
  },
  container_2: {margin: 12},
  map: {
    height: 150,
    justifyContent: 'center',
  },
});

export default styles;
