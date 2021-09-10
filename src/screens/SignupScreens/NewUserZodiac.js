import * as React from "react";
import { Button, View, Text, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import NewUserZodiacComp from '../../components/Signup/NewUserZodiac'

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

export function NewUserZodiac() {
    const navigation = useNavigation();

    return (
        <>
        <SplashBackground>
        <WhiteStyledContainer>
        <SignupTitleContainer>
                        <SignupTitleText>
                            What is your zodiac sign?
                        </SignupTitleText>
        </SignupTitleContainer>
        <SignupSubtitleContainer>

        <NewUserZodiacComp />

        <SignupPhoneNextLoginButtonTouchable>

                <PhoneNextLoginButtonBackground source={require('../../../assets/nextButton.png')}>
                <PhoneNextLoginButtonText
                onPress={() => navigation.navigate("NewUserEducation")}
                >
                Next
                </PhoneNextLoginButtonText>
                </PhoneNextLoginButtonBackground>
                </SignupPhoneNextLoginButtonTouchable>
        </SignupSubtitleContainer>
        </WhiteStyledContainer>
        </SplashBackground>
        </>

    );
}
