import * as React from "react";
import { Button, View, Text, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import GoogleSignInComp from '../../components/SocialSignIn/GoogleSignIn'

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
    PhoneNextLoginButtonTouchable
} from '../../components/Login/styles';

export function GoogleLoginScreen() {
    const navigation = useNavigation();

    return (
        <>
        <SplashBackground>
        <WhiteStyledContainer>

        <SignupSubtitleContainer>

        <SignupSubtitleText>
                        Google Sign In
        </SignupSubtitleText>
                        </SignupSubtitleContainer>
        <SignupSubtitleContainer>

        {/* <GoogleSignInComp /> */}

        </SignupSubtitleContainer>

        <PhoneNextLoginButtonTouchable>

        <PhoneNextLoginButtonBackground source={require('../../../assets/nextButton.png')}>
        <PhoneNextLoginButtonText
            onPress={() => navigation.navigate("NewUserDatingPref")}
            >
            Next
        </PhoneNextLoginButtonText>
        </PhoneNextLoginButtonBackground>
        </PhoneNextLoginButtonTouchable>
        </WhiteStyledContainer>
        </SplashBackground>
        </>

    );
}
