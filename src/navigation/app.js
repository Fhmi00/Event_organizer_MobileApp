import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/Home';
import Detail from '../screen/Detail';
import Order from '../screen/Order';
import Payment from '../screen/Payment';
import Pay from '../screen/Pay';

import Profile from '../screen/Profile';

import DrawerContent from '../components/DrawerContent';
import HeaderHome from '../components/Header/home';
import HeaderDefault from '../components/Header/default.js';
import HeaderDetail from '../components/Header/detail';
import PayHeader from '../components/Header/pay';
import AllEvent from '../screen/AllEvent';
import EditProfile from '../screen/EditProfile';
import Booking from '../screen/Booking';

function MenuNavigator() {
  return (
    // DAFTARKAN MENU YANG NANTINYA AKAN MASUK KE DALAM DRAWER DISINI
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          header: props => <HeaderHome {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          header: props => <HeaderDefault {...props} name="Profile" />,
          drawerIcon: ({size, color}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      {/* MY BOOKING */}
      {/* MY WISHLIST */}
    </Drawer.Navigator>
  );
}

export default function AppStackNavigator() {
  return (
    // DAFTARKAN MENU YANG NANTINYA DAPAT DI AKSES DILUAR DRAWER DISINI
    <Stack.Navigator initialRouteName="MenuNavigator">
      {/* HOME SCREEN */}
      <Stack.Screen
        name="MenuNavigator"
        component={MenuNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          header: props => <HeaderDetail {...props} />,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="AllEvent"
        component={AllEvent}
        options={{
          header: props => <HeaderDefault {...props} />,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Change Password"
        component={ChangePassword}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Order"
        component={Order}
        options={{
          header: props => <HeaderDefault {...props} name="Checkout" />,
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          header: props => <HeaderDefault {...props} name="Payment" />,
        }}
      />
      <Stack.Screen
        name="Pay"
        component={Pay}
        options={{
          header: props => <PayHeader {...props} name="Pay" />,
        }}
      />
      {/* EDIT PROFILE */}
      {/* CHANGE PASSWORD */}
    </Stack.Navigator>
  );
}
