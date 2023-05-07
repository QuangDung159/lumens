import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabHome from '../components/TabHome';
import TabNotification from '../components/TabNotification';
import TabPayment from '../components/TabPayment';
import TabUser from '../components/TabUser';
import TabBar from '../components/TabBar';
import { TAB_HOME, TAB_NOTIFICATION, TAB_PAYMENT, TAB_USER } from '../constants/common';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={TAB_HOME} component={TabHome} />
      <Tab.Screen name={TAB_NOTIFICATION} component={TabNotification} />
      <Tab.Screen name={TAB_PAYMENT} component={TabPayment} />
      <Tab.Screen name={TAB_USER} component={TabUser} />
    </Tab.Navigator>
  )
}