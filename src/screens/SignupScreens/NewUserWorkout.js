import * as React from "react";
import { Button, View, Text, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import NewUserWorkoutComp from '../../components/Signup/NewUserWorkout'

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

export function NewUserWorkout() {
    const navigation = useNavigation();

    return (
        <>
        <SplashBackground>
        <WhiteStyledContainer>
        <SignupTitleContainer>
                        <SignupTitleText>
                            Do you work out?
                        </SignupTitleText>
        </SignupTitleContainer>
        <SignupSubtitleContainer>

        <NewUserWorkoutComp />


        <SignupPhoneNextLoginButtonTouchable>

            <PhoneNextLoginButtonBackground source={require('../../../assets/nextButton.png')}>
            <PhoneNextLoginButtonText
            onPress={() => navigation.navigate("NewUserZodiac")}
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
