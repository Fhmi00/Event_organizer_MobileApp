import React from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Pay(props) {
  console.log(props.route.params.params);
  return (
    <>
      <WebView source={{uri: props.route.params.params}} />
    </>
  );
}

const style = StyleSheet.create({});
