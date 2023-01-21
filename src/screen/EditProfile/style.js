import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  profile: {
    backgroundColor: 'rgba(51, 102, 255, 1)',
    paddingTop: 20,
  },
  photoProfile: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  photo: {
    width: 150,
    height: 150,
    borderColor: 'rgba(51, 102, 255, 1)',
    borderWidth: 5,
    borderRadius: 100,
  },
  editImage: {
    top: -40,
    left: 60,
  },
  textEdit: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 20,
    height: 40,
    margin: 10,
    borderRadius: 10,
    fontFamily: 'Merienda-Bold',
    fontSize: 14,
    color: 'black',
  },
  label: {
    fontFamily: 'Merienda-ExtraBold',
    fontSize: 14,
    color: 'black',
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  inputDate: {
    borderWidth: 1,
    paddingHorizontal: 20,
    height: 40,
    marginVertical: 10,
    marginLeft: 10,
    borderRadius: 10,
    fontFamily: 'Merienda-Bold',
    fontSize: 14,
    color: 'black',
    width: '80%',
  },
  buttonSave: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  save: {
    fontFamily: 'Merienda-ExtraBold',
    fontSize: 16,
    color: 'white',
  },
});
