import * as React from "react";
import { Button, View, Text, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import NewUserHeightComp from '../../components/Signup/NewUserHeight'

import {
    SignupTitleContainer,
    SignupTitleText,
    SignupSubtitleText,
    SignupSubtitleContainer,
    SplashBackground,
    WhiteStyledContainer,
    TextInputStyle,
    PhoneNextLoginButtonBackground,
    PhoneNextLoginButtonText,
    PhoneNextLoginButtonTouchable,
    SignupPhoneNextLoginButtonTouchable
} from '../../components/Login/styles';

export function NewUserHeight() {
    const navigation = useNavigation();

    return (
        <>
        <SplashBackground>
        <WhiteStyledContainer>
        <SignupTitleContainer>
                        <SignupTitleText>
                            What's is your height?
                        </SignupTitleText>
        </SignupTitleContainer>
        {/* <SignupSubtitleContainer> */}

        <NewUserHeightComp />

        <SignupPhoneNextLoginButtonTouchable>
                <PhoneNextLoginButtonBackground source={require('../../../assets/nextButton.png')}>
                <PhoneNextLoginButtonText
                onPress={() => navigation.navigate("NewUserWorkout")}
                >
                Next
                </PhoneNextLoginButtonText>
                </PhoneNextLoginButtonBackground>
                </SignupPhoneNextLoginButtonTouchable>

        {/* </SignupSubtitleContainer> */}
        </WhiteStyledContainer>
        </SplashBackground>
        </>

    );
}
