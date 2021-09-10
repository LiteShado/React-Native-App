import * as React from "react";
import { Button, View, Text, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import NewUserReligionComp from '../../components/Signup/NewUserReligion'

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

export function NewUserReligion() {
    const navigation = useNavigation();

    return (
        <>
        <SplashBackground>
        <WhiteStyledContainer>
        <SignupTitleContainer>
                        <SignupTitleText>
                            So you identify with a religion?
                        </SignupTitleText>
        </SignupTitleContainer>
        <SignupSubtitleContainer>

        <NewUserReligionComp />

        <SignupPhoneNextLoginButtonTouchable>

                <PhoneNextLoginButtonBackground source={require('../../../assets/nextButton.png')}>
                <PhoneNextLoginButtonText
                onPress={() => navigation.navigate("NewUserPolitical")}
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
