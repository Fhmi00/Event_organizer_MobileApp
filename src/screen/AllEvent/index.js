/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  TextInput,
} from 'react-native';

import styles from './style';
import moment from 'moment';
import IconSearch from 'react-native-vector-icons/AntDesign';
import defaultImage from '../../assets/event.png';
import {getAllEvent} from '../../stores/actions/event';
import Dropdown from 'react-native-paper-dropdown';

import {useDispatch, useSelector} from 'react-redux';

export default function AllEvent(props) {
  const dispacth = useDispatch();
  const dataEvent = useSelector(state => {
    state.event.data;
  });
  console.log(dataEvent);
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(10);
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const filterrList = [
    {
      label: 'Newest',
      value: 'ASC',
    },
    {
      label: 'Lastest',
      value: 'DSC',
    },
  ];

  useEffect(() => {
    getDataEvent();
  }, [getDataEvent, search]);

  useEffect(() => {
    getDataEvent();
  }, [getDataEvent, page, search]);

  console.log(search);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDataEvent = useCallback(async () => {
    try {
      if (page <= totalPage) {
        const result = await dispacth(getAllEvent(search));
        if (page === 1) {
          setData(result.action.payload.data.data);
        } else {
          setData([...data, ...result.action.payload.data.data]);
        }
        setTotalPage(result.action.payload.data.pagination.totalPage);
      } else {
        setLast(true);
      }
      setRefresh(false);
      setLoading(false);
      setLoadMore(false);
    } catch (error) {}
  });

  const handleRefresh = () => {
    console.log('REFRESH SCREEN');
    setPage(1);
    setLast(false);
    if (page !== 1) {
      setRefresh(true);
    } else {
      getDataEvent();
    }
  };
  const handleSearch = value => {
    setSearch(value);
  };
  const handleLoadMore = () => {
    console.log('GET DATA AGAIN');
    if (!loadMore) {
      // false
      const newPage = page + 1; // 1 + 1 = 2
      setLoadMore(true);
      if (newPage <= totalPage + 1) {
        setLoading(true);
        setPage(newPage);
      } else {
        setLoading(false);
      }
    }
  };
  const handleDetail = eventId => {
    props.navigation.navigate('Detail', {eventId: eventId});
  };

  const ListHeader = () => {
    return <></>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.search}>
          <IconSearch name="search1" color="white" size={20} />
          <TextInput
            style={styles.input}
            onChangeText={text => handleSearch(text, 'search')}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="Event Name"
          />
        </View>
        <View>
          <Dropdown
            label={'Filter'}
            mode={'outlined'}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={filter}
            setValue={setFilter}
            list={filterrList}
          />
        </View>
      </View>
      <FlatList
        data={data}
        numColumns="2"
        style={styles.flatlist}
        renderItem={({item}) => (
          <View style={styles.card}>
            <TouchableOpacity
              onPress={() => {
                handleDetail(item.eventId);
              }}>
              <Image
                source={
                  item.image
                    ? {
                        uri: `https://res.cloudinary.com/dxjd1vzqg/image/upload/v1663839147/${item.image}`,
                      }
                    : defaultImage
                }
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={styles.detail}>
              <Text style={styles.eventDate}>
                {moment(item.dateTimeShow).format('ddd MMM Do , h:mm a')}
              </Text>
              <Text style={styles.eventName}>{item.name}</Text>
            </View>
          </View>
        )}
        // keyExtractor={item => item.eventId}
        onRefresh={handleRefresh}
        refreshing={refresh}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={() => (
          <View style={{alignItems: 'center'}}>
            {last ? (
              <Text>-- No more data --</Text>
            ) : loading ? (
              <ActivityIndicator size="large" color="blue" />
            ) : null}
          </View>
        )}
      />
    </View>
  );
}
