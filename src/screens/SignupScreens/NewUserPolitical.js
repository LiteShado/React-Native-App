import * as React from "react";
import { Button, View, Text, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import NewUserPoliticalComp from '../../components/Signup/NewUserPolitical'

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

export function NewUserPolitical() {
    const navigation = useNavigation();

    return (
        <>
        <SplashBackground>
        <WhiteStyledContainer>
        <SignupTitleContainer>
                        <SignupTitleText>
                            What are your political learnings?
                        </SignupTitleText>
        </SignupTitleContainer>
        <SignupSubtitleContainer>

        <NewUserPoliticalComp />

        <SignupPhoneNextLoginButtonTouchable>

                <PhoneNextLoginButtonBackground source={require('../../../assets/nextButton.png')}>
                <PhoneNextLoginButtonText
                onPress={() => navigation.navigate("NewUserProfilePrompt")}
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
