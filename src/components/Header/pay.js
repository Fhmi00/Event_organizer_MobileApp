import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PayHeader(props) {
  const backScreen = () => {
    props.navigation.navigate('Home');
  };
  console.log(props);
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={backScreen}>
        <Icon name="long-arrow-left" size={25} color="white" />
      </TouchableOpacity>
      <View style={(styles.section, styles.sectionCenter)}>
        <Text style={styles.name}>{props.name}</Text>
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
    backgroundColor: 'rgba(51, 102, 255, 1)',
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
