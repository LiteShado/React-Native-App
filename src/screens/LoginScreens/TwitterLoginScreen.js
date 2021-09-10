import * as React from "react";
import { Button, View, Text, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function TwitterLoginScreen() {
    const navigation = useNavigation();

    return (
        <>
        <Text>Hi from Twitter Login Screen</Text>
        </>

    );
}
