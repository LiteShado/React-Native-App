import * as React from "react";
import { Button, View, Text, KeyboardAvoidingView } from 'react-native';
import TikTokLogin from "../../components/Login/TikTokLogin"
import {KeyboardContainer} from '../../styles/styles';
import PhoneLogin from "../../components/Login/PhoneLogin"


import { useNavigation } from '@react-navigation/native';

export function AppleScreen() {
    const navigation = useNavigation();

    return (
        <>
        <Text>Hi from Apple</Text>
        </>

    );
}
