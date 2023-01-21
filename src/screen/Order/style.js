import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  booking: {
    backgroundColor: 'rgba(51, 102, 255, 1)',
  },
  seat: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
  },
  ticket: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 50,
  },
  ticketText: {
    fontFamily: 'Merienda-ExtraBold',
    fontSize: 20,
    color: 'black',
  },
  sort: {
    fontFamily: 'Merienda-ExtraBold',
    fontSize: 20,
    color: 'black',
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
  },
  sectionCategory: {
    flex: 1,
    marginLeft: 20,
  },
  sectionText: {
    fontFamily: 'Merienda-Bold',
    fontSize: 16,
    color: 'black',
  },
  sectionLeft: {
    fontFamily: 'Merienda-Regular',
    fontSize: 12,
  },
  quantity: {
    flexDirection: 'row',
    marginTop: 10,
  },
  quantityText: {
    fontFamily: 'Merienda-Bold',
    fontSize: 14,
    color: 'black',
  },
  ticketSection: {
    fontFamily: 'Merienda-Bold',
    fontSize: 14,
    color: 'black',
    marginTop: 30,
  },
  checkout: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  category: {
    fontFamily: 'Merienda-Bold',
    fontSize: 14,
    color: 'blue',
    marginTop: 30,
  },
  VIP: {
    fontFamily: 'Merienda-Bold',
    fontSize: 14,
    color: 'blue',
  },
  buttonCheckout: {
    marginTop: 30,
    borderRadius: 10,
    paddingVertical: 10,
    width: '100%',
    backgroundColor: 'rgba(51, 102, 255, 1)',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Merienda-ExtraBold',
    fontSize: 20,
    color: 'white',
  },
});
