import * as React from "react";
import { Button, View, Text } from 'react-native';
import PhoneVerificationComp from '../../components/Login/PhoneVerification';
import OTPBox from '../../components/Login/OTPBox';

export function InputOTPScreen() {

    return (

      <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


        <PhoneVerificationComp />

        {/* <OTPBox /> */}

      </View>

      </>
    );
  }
