import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// components

import LoginButton from '../../components/Login/LoginButton';
import PhoneLogin from '../../components/Login/PhoneLogin';
import AuthenticationScreen from '../../screens/LoginScreens/AuthenticationScreen';
import AppleScreen from '../../screens/LoginScreens/AppleScreen';
import TikTokScreen from '../../screens/LoginScreens/TikTokScreen';

import {
    SplashBackground,
    StyledContainer,
    InnerContainer,
    PageLogo,
    LoginButtonContainer,
    LoginUsePhoneContainer,
    LoginUsePhoneText,
    LoginFinePrintContainer,
    LoginFinePrintText,
    TosPrivacyContainer,
    TosPrivacyTouchable,
    TosPrivacyText,
} from '../../components/Login/styles';

// const Login = ({navigation}) => {
export function LoginScreen(){
    const navigation = useNavigation();


    return(
        <SplashBackground source={require('../../../assets/background.png')}>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <PageLogo source={require("../../../assets/logo.png")}/>
                    <LoginButtonContainer>
                        <LoginButton
                        title="TikTok"
                            onPress={() => navigation.navigate("TikTok")}
                        />
                        <LoginButton
                        title="Apple"
                            onPress={() => navigation.navigate("Apple")}
                        />

                        <LoginUsePhoneText />
                    </LoginButtonContainer>
                    <LoginUsePhoneContainer onPress={() => navigation.navigate("Authentication")}>

                        <LoginUsePhoneText>

                        Use cell phone number

                        </LoginUsePhoneText>
                    </LoginUsePhoneContainer>
                    <LoginFinePrintContainer>
                        <LoginFinePrintText>
                            Don't worry! We will not post to Facebook
                        </LoginFinePrintText>
                    </LoginFinePrintContainer>
                    <TosPrivacyContainer>
                        <TosPrivacyTouchable>
                            <TosPrivacyText>
                                Terms of Service
                            </TosPrivacyText>
                        </TosPrivacyTouchable>
                        <TosPrivacyTouchable>
                            <TosPrivacyText>
                                Privacy Policy
                            </TosPrivacyText>
                        </TosPrivacyTouchable>
                    </TosPrivacyContainer>
                </InnerContainer>
            </StyledContainer>
        </SplashBackground>
    );
}

// export default LoginScreen;
