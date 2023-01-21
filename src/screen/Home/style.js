import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#3366FF'},
  sortDateContainer: {
    backgroundColor: '#222B45',
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 100,
  },
  dateContainer: {
    alignItems: 'center',
    borderColor: '#FF8900',
    borderWidth: 2,
    padding: 10,
    borderRadius: 16,
  },
  date: {color: 'white', textAlign: 'center'},
  header: {color: 'brown'},
  card: {
    width: 160,
    height: 276,
    marginHorizontal: 15,
  },
  input: {
    color: 'white',
    width: '80%',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    margin: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  view_1: {backgroundColor: '#222B45'},
  view_2: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#FCFCFC',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textEvent: {
    fontFamily: 'Poopins-Bold',
    fontSize: 25,
    color: '#373A42',
  },

  active: {
    alignItems: 'center',
    borderColor: '#FF8900',
    borderWidth: 2,
    padding: 10,
    borderRadius: 16,
  },
  notActive: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 16,
  },
});

export default styles;
