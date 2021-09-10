import * as React from "react";
import { Button, View, Text, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import NewUserIdentityComp from '../../components/Signup/NewUserIdentity'

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
    PhoneNextLoginButtonTouchable,SignupPhoneNextLoginButtonTouchable
} from '../../components/Login/styles';

export function NewUserIdentity() {
    const navigation = useNavigation();

    return (
        <>
        <SplashBackground>
        <WhiteStyledContainer>
        <SignupTitleContainer>
                        <SignupTitleText>
                            How do you identify yourself?
                        </SignupTitleText>
        </SignupTitleContainer>
        <SignupSubtitleContainer>

        <NewUserIdentityComp />
        <SignupPhoneNextLoginButtonTouchable>

            <PhoneNextLoginButtonBackground source={require('../../../assets/nextButton.png')}>
            <PhoneNextLoginButtonText
            onPress={() => navigation.navigate("NewUserHeight")}
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
