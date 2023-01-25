import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconNotif from 'react-native-vector-icons/Feather';
import Notification from '../../utils/notif';

export default function HomeHeader(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  const handleNotification = () => {
    console.log('Click Me !');
    // [without schedule]
    Notification.showNotification();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="navicon" color="white" size={30} />
      </TouchableOpacity>
      <View>
        <IconNotif
          name="message-square"
          color="white"
          size={30}
          onPress={handleNotification}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#3366FF',
  },
});
