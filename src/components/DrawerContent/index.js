import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Feather';
import axios from '../../utils/axios';
import {useSelector} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import defaultImage from '../../assets/profileDefault.jpg';

function DrawerContent(props) {
  const dataUser = useSelector(state => state.user.data);
  const handleLogout = async () => {
    try {
      await axios.post('/auth/logout');
      alert('Logout');
      await AsyncStorage.clear();
      props.navigation.replace('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.containerProfile}>
          <Image
            source={
              dataUser.image
                ? {
                    uri: `https://res.cloudinary.com/dxjd1vzqg/image/upload/v1663839147/event-organizing/user/${dataUser.image}`,
                  }
                : defaultImage
            }
            style={styles.avatar}
          />

          <View style={styles.biodata}>
            <Text style={styles.title}>{dataUser.name}s</Text>
            <Text style={styles.caption}>{dataUser.username}</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.containerSection}>
        <DrawerItem
          label="Logout"
          icon={({color, size}) => (
            <Icon color={color} size={size} name="log-out" />
          )}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProfile: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'gray',
  },
  biodata: {
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  containerSection: {
    marginBottom: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2,
  },
});

export default DrawerContent;
