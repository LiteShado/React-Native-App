import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';

import * as React from 'react';

import ChatsScreen from '../screens/ChatScreens/ChatsScreen';
import { BottomTabParamList } from '../../types';
import { render } from 'react-dom';

// const BottomTab = createBottomTabNavigator(BottomTabParamList);
//should i pass params??

const BottomTab = createBottomTabNavigator();


// const BottomTab = createBottomTabNavigator;

export default function BottomTabNavigator() {

  return (
    <NavigationContainer>
    <BottomTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
        indicatorStyle: {
        height: 4,
        },
        showIcon: true
      }}>

      <BottomTab.Screen
        name="Likes"
        component={ChatsScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ size }) => {
                <MaterialCommunityIcons
                    name="heart-outline"
                    size={18} />
        }
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={ChatsScreen}
        options={{
            tabBarLabel: () =>  null,
            tabBarIcon: ({ size }) => {
                <MaterialCommunityIcons
                    name="account"
                    size={18} />
        }
        }}
      />
      <BottomTab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
            tabBarLabel: () =>  null,
            tabBarIcon: ({ size }) => {
                <MaterialCommunityIcons
                    name="chat"
                    size={18} />
        }
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ChatsScreen}
        options={{
            tabBarLabel: () =>  null,
            tabBarIcon: ({ size }) => {
                <MaterialCommunityIcons
                    name="account"
                    size={18} />
            }
        }}
      />
    </BottomTab.Navigator>
    </NavigationContainer>
  );
}

// https://icons.expo.fyi/

// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
