import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  payment: {
    backgroundColor: 'rgba(51, 102, 255, 1)',
  },
  paymentSection: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginTop: 30,
    paddingVertical: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  paymentText: {
    fontFamily: 'Merienda-ExtraBold',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  paymentImage: {
    marginHorizontal: 10,
  },
  paymentMethodText: {
    fontFamily: 'Merienda-Bold',
    fontSize: 16,
    color: 'black',
    marginHorizontal: 10,
  },
  rowPayment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  total: {
    fontSize: 16,
    fontFamily: 'Merienda-Bold',
    color: 'black',
  },
  price: {
    fontFamily: 'Merienda-Bold',
    fontSize: 16,
    color: 'blue',
  },
  buttonPayment: {
    backgroundColor: 'rgba(51, 102, 255, 1)',
    borderRadius: 10,
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    fontFamily: 'Merienda-ExtraBold',
    fontSize: 20,
    color: 'white',
  },
});
