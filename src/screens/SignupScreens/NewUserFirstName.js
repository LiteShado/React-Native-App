import * as React from "react";
import { Button, View, Text, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

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

export function NewUserFirstName() {
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

                        <TextInputStyle>
                        <TextInput
                            onChangeText={onChangeText}
                            value={text}
                        />
                        </TextInputStyle>

                        <SignupSubtitleText>
                        Your name will be shown on your profile.
                        </SignupSubtitleText>
                        </SignupSubtitleContainer>
        </WhiteStyledContainer>
        </SplashBackground>
        </>

    );
}
