import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {backgroundColor: 'white', height: '100%'},
  logo: {width: '50%', margin: 12},
  loginText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    margin: 12,
    color: '#373A42',
  },
  text: {
    fontSize: 15,
    margin: 12,
    color: '#373A42',
  },
  inputText: {
    color: '#0d0d0d',
  },
  frogotPassword: {textAlign: 'right', color: 'blue', margin: 12},
  textSign: {marginTop: 50, textAlign: 'center'},
  icon: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
export default styles;
