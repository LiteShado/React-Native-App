import * as React from "react";
import { Button, View, Text, KeyboardAvoidingView } from 'react-native';
import PhoneLogin from "../../components/Login/PhoneLogin"
// import InputOTPScreen from '../../screens/LoginScreens/InputOTPScreen';
// import {KeyboardContainer} from '../../styles/styles';
import { useNavigation } from '@react-navigation/native';


export function AuthenticationScreen() {
  const navigation = useNavigation();
    return (
        <PhoneLogin />
    );
  }
