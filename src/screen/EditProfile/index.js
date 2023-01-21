import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import axios from '../../utils/axios';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {RadioButton} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {GetUserById} from '../../stores/actions/user';

export default function Profile() {
  const dataUser = useSelector(state => state.user.data);
  const dispatch = useDispatch();
  const userId = dataUser.id;
  const [image, setImage] = useState(null);
  const [checked, setChecked] = useState(dataUser.gender);
  const [form, setForm] = useState({
    name: dataUser.name,
    email: dataUser.email,
  });
  console.log(dataUser);
  const [data, setData] = useState();
  // const [formImage, setFormImage] = useState({});
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(dataUser.profession);
  const [items, setItems] = useState([
    {label: 'Programmer', value: 'programmer'},
    {label: 'Farmer', value: 'farmer'},
    {label: 'Singer', value: 'singer'},
    {label: 'Entrepeneur', value: 'entrepeneur'},
  ]);
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const dateOfBirth = date;

  const alldata = {
    ...form,
    gender: checked,
    dateOfBirth,
    profession: value,
  };
  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };
  const handleUpdateProfile = async () => {
    try {
      const result = await axios.patch(`user/updateUser/${userId}`, alldata);
      alert(result.data.msg);
      await dispatch(GetUserById(userId));
    } catch (error) {
      console.log(error);
    }
  };

  const openCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const data = await launchCamera({
          selectionLimit: 1,
        });
        setImage(data.assets[0]);
        setData(data);
        const formData = new FormData();

        return formData.append('image', {
          name: data.assets[0].fileName,
          type: data.assets[0].type,
          uri: data.assets[0].uri,
        });
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const openGalery = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const data = await launchImageLibrary({
          selectionLimit: 1,
        });
        setImage(data.assets[0]);
        setData(data);
        const formData = new FormData();

        return formData.append('image', {
          name: data.assets[0].fileName,
          type: data.assets[0].type,
          uri: data.assets[0].uri,
        });
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const updateImage = async () => {
    const formData = new FormData();

    formData.append('image', {
      name: data.assets[0].fileName,
      type: data.assets[0].type,
      uri: data.assets[0].uri,
    });
    console.log('upload image');
    try {
      await axios.patch(`user/updateImage/${userId}`, formData);

      console.log('dtop loading');
      alert('succes update image');
      await dispatch(GetUserById(userId));
      setImage(null);
      // console.log(formData);
    } catch (error) {
      setImage(null);
      alert(error.response.data.msg);
    }
  };
  // console.log(image.fileName);
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <ScrollView>
        <View style={styles.avatar}>
          {image ? (
            <Image source={{uri: image.uri}} style={styles.preview} />
          ) : dataUser.image ? (
            <Image
              style={styles.preview}
              source={{
                uri: `https://res.cloudinary.com/dxjd1vzqg/image/upload/v1663839147/${dataUser.image}`,
              }}
              // style={{width: '100%', height: '100%', borderRadius: 20}}
            />
          ) : (
            <Icon
              size={50}
              color="white"
              name="user"
              style={{marginTop: 20, textAlign: 'center'}}
            />
          )}
        </View>

        <TouchableOpacity style={styles.updateImage} onPress={updateImage}>
          <Icon
            size={20}
            name="check"
            color="white"
            // style={{marginRight: 10}}
          />
        </TouchableOpacity>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.updateImage} onPress={openGalery}>
            <Icon
              size={20}
              name="edit-2"
              color="white"
              // style={{marginRight: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.updateImage} onPress={openCamera}>
            <Icon
              size={20}
              name="camera"
              color="white"
              // style={{marginRight: 10}}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: '#373A42',
            fontSize: 24,
            fontWeight: '600',
            marginLeft: 120,
          }}>
          {dataUser.name ? dataUser.name : 'anonymous'}
        </Text>

        <View style={{marginTop: 100, width: '100%'}} />
        <Text style={{marginRight: 250, marginBottom: 15}}>Name</Text>
        <TextInput
          placeholder={dataUser.name}
          onChangeText={text => handleChangeForm(text, 'name')}
          style={styles.input}
          // value={user.data.name}
        />
        <Text style={{marginRight: 250, marginBottom: 15}}>Email</Text>
        <TextInput
          placeholder={dataUser.email}
          onChangeText={text => handleChangeForm(text, 'email')}
          style={styles.input}
          // value={user.data.email}
          // name="email"
        />

        <View
          style={{
            flexDirection: 'row',

            width: 250,
            marginLeft: 25,
            justifyContent: 'space-around',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="male"
              status={checked === 'male' ? 'checked' : 'unchecked'}
              // status="checked"
              onPress={() => setChecked('male')}
            />
            <Text>Male</Text>
          </View>
          <View style={{marginBottom: 50}}>
            <Text>Gender</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="female"
              status={checked === 'female' ? 'checked' : 'unchecked'}
              // status="checked"
              onPress={() => setChecked('female')}
              style={{color: 'black'}}
            />
            <Text>Female</Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{width: 300, marginBottom: 20}}
          />
        </View>
        {/* <Button title="Open" onPress={() => setOpenDate(true)} /> */}
        <View
          style={{
            flexDirection: 'row',

            width: 200,
            marginLeft: 100,
          }}>
          <Text style={{color: 'black'}}>
            {dataUser.dateOfBirth ? dataUser.dateOfBirth : ' Date of birth '}
          </Text>
          <TouchableOpacity onPress={() => setOpenDate(true)}>
            <Icon
              size={20}
              name="calendar"
              color="grey"
              // style={{marginRight: 10}}
            />
          </TouchableOpacity>
        </View>
        <DatePicker
          modal
          mode="date"
          open={openDate}
          date={date}
          onConfirm={date => {
            setOpenDate(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpenDate(false);
          }}
        />
        <TouchableOpacity
          onPress={handleUpdateProfile}
          style={{
            backgroundColor: '#3366FF',
            width: 300,
            height: 50,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
            Save
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  updateImage: {
    backgroundColor: '#3366FF',
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    marginTop: 20,
    marginLeft: 80,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'gray',
    marginTop: 20,
    marginHorizontal: 100,
  },
  preview: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#373A42',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    width: 300,
    height: 40,
    borderRadius: 15,
    marginBottom: 15,
    color: 'black',
  },
});
