import * as React from "react";
import { Button, View, Text, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function UserLoginScreen() {
    const navigation = useNavigation();

    return (
        <>
        <Text>Hi from User Login Screen</Text>
        </>

    );
}
