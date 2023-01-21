import React from 'react';
import {FlatList, View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './style';
import defaultImage from '../../assets/event.png';
import moment from 'moment';

export default function CardEvent(props) {
  return (
    <FlatList
      horizontal={true}
      data={props.data}
      style={styles.flatlist}
      renderItem={({item}) => (
        <View style={styles.card} key="{item}">
          <Image
            source={
              item.image
                ? {
                    uri: `https://res.cloudinary.com/dxjd1vzqg/image/upload/v1672099418/${item.image}`,
                  }
                : defaultImage
            }
            style={styles.image}
          />
          <View style={styles.detail}>
            <Text style={styles.eventDate}>
              {moment(item.dateTimeShow).format('ddd MMM Do , h:mm a')}
            </Text>
            <Text style={styles.eventName}>{item.name}</Text>
            <TouchableOpacity
              onPress={() => {
                props.handleDetail(item.id);
              }}>
              <Image source={require('../../assets/detail.png')} />
            </TouchableOpacity>
          </View>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
}
