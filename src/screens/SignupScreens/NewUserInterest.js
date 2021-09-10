import * as React from "react";
import { Button, View, Text, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import NewUserInterestComp from '../../components/Signup/NewUserInterest'

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

export function NewUserInterest() {
    const navigation = useNavigation();

    return (
        <>
        <SplashBackground>
        <WhiteStyledContainer>
        <SignupTitleContainer>
                        <SignupTitleText>
                            Who are you interested in?
                        </SignupTitleText>
        </SignupTitleContainer>
        <SignupSubtitleContainer>

        <NewUserInterestComp />
        <SignupPhoneNextLoginButtonTouchable>

                <PhoneNextLoginButtonBackground source={require('../../../assets/nextButton.png')}>
                <PhoneNextLoginButtonText
                onPress={() => navigation.navigate("NewUserIdentity")}
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
