import * as React from "react";
import { Button, View, Text } from 'react-native';

import LoginScreen from '../LoginScreens/LoginScreen';

export function HomeScreen({navigation}) {
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title="Go to Auth screen"
            onPress={() => navigation.navigate('Authentication')}
        />

      </View>
    );
  }
