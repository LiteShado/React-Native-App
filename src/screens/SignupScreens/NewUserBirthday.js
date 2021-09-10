import * as React from "react";
import { Button, View, Text, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import NewUserBirthdayComp from '../../components/Signup/NewUserBirthdayComp'

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
    SignupPhoneNextLoginButtonTouchable,
    SignupCompNextContainer
} from '../../components/Login/styles';

export function NewUserBirthday() {
    const navigation = useNavigation();

    return (

        <>
        <SplashBackground>
        <WhiteStyledContainer>
        <SignupTitleContainer>
                        <SignupTitleText>
                            When's your birthday?
                        </SignupTitleText>
        </SignupTitleContainer>
        <SignupSubtitleContainer>

            <NewUserBirthdayComp />

        <SignupSubtitleText>
                        Only your age will be shown on your profile.
        </SignupSubtitleText>
                        </SignupSubtitleContainer>


        <SignupPhoneNextLoginButtonTouchable>

        <PhoneNextLoginButtonBackground source={require('../../../assets/nextButton.png')}>
        <PhoneNextLoginButtonText
            onPress={() => navigation.navigate("NewUserDatingPref")}
            >
            Next
        </PhoneNextLoginButtonText>
        </PhoneNextLoginButtonBackground>
        </SignupPhoneNextLoginButtonTouchable>
        </WhiteStyledContainer>
        </SplashBackground>
        </>

    );
}
