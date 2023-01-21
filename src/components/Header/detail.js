import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import IconLike from 'react-native-vector-icons/AntDesign';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function HeaderDetail(props) {
  const backScreen = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={backScreen}>
        <Icon name="long-arrow-left" size={25} color="white" />
      </TouchableOpacity>
      <View style={(styles.section, styles.sectionCenter)}>
        <TouchableOpacity onPress={backScreen}>
          <IconLike name="heart" color="white" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,
    alignItems: 'center',
  },
  sectionCenter: {
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Merienda-ExtraBold',
    fontSize: 20,
    color: 'white',
  },
});
