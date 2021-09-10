import * as React from "react";
import { SafeAreaView, Button, View, Text, KeyboardAvoidingView, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import NewUserFirstNameComp from '../../components/Signup/NewUserFirstName'

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

export function SignupScreen() {
    const navigation = useNavigation();

    return (
        <>
        <SplashBackground>
        <WhiteStyledContainer>
        <SignupTitleContainer>
                        <SignupTitleText>
                            What's your first name?
                        </SignupTitleText>
        </SignupTitleContainer>
        <SignupSubtitleContainer>
                        <SignupSubtitleText>
                        You will not be able to change this later.
                        </SignupSubtitleText>

                        <NewUserFirstNameComp />

                        <SignupSubtitleText>
                        Your name will be shown on your profile.
                        </SignupSubtitleText>

        </SignupSubtitleContainer>
                        <SignupPhoneNextLoginButtonTouchable>

                        <PhoneNextLoginButtonBackground source={require('../../../assets/nextButton.png')}>
                    <PhoneNextLoginButtonText
                    onPress={() => navigation.navigate("NewUserBirthday")}
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
