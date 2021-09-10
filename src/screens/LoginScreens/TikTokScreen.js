import * as React from "react";
import { Button, View, Text, KeyboardAvoidingView } from 'react-native';
import TikTokLogin from "../../components/Login/TikTokLogin"

import {
    LoginButtonContainer,
    TikTokLoginUsePhoneContainer,
    TikTokLoginUsePhoneText,
    TikTokLoginButtonContainer,
    TikTokTitleContainer,
    TikTokTitleText,
    TikTokSubtitleText,
    TikTokSubtitleContainer,
    SplashBackground,
    WhiteStyledContainer,
    SignupText
} from '../../components/Login/styles';
import TikTokLoginButton from '../../components/Login/TikTokLoginButton';


import { useNavigation } from '@react-navigation/native';

export function TikTokScreen() {
    const navigation = useNavigation();

    return (
        <>
        <SplashBackground>
        <WhiteStyledContainer>
        <TikTokTitleContainer>
                        <TikTokTitleText>
                            Log in to TikTok
                        </TikTokTitleText>
        </TikTokTitleContainer>
        <TikTokSubtitleContainer>
                        <TikTokSubtitleText>
                        We take pride in our community by making sure everyone on Why Knot Me is authentic.
                        </TikTokSubtitleText>
                        </TikTokSubtitleContainer>
        <TikTokLoginButtonContainer>
                        <TikTokLoginButton
                        title="Use phone/ email/ username"
                            onPress={() => navigation.navigate("UserLogin")}
                        />
                        <TikTokLoginButton
                        title="Facebook"
                            onPress={() => navigation.navigate("FacebookLogin")}
                        />
                        <TikTokLoginButton
                        title="Apple"
                            onPress={() => navigation.navigate("Apple")}
                        />
                        <TikTokLoginButton
                        title="Google"
                            onPress={() => navigation.navigate("GoogleLogin")}
                        />
                        <TikTokLoginButton
                        title="Twitter"
                            onPress={() => navigation.navigate("TwitterLogin")}
                        />
                        <TikTokLoginButton
                        title="Instagram"
                            onPress={() => navigation.navigate("InstagramLogin")}
                        />


                    </TikTokLoginButtonContainer>
                    </WhiteStyledContainer>
                        <TikTokLoginUsePhoneContainer
                        onPress={() => navigation.navigate("Signup")}
                        >

                        <TikTokLoginUsePhoneText>
                        Don't have an account?
                        <SignupText>
                        Sign Up
                        </SignupText>
                        </TikTokLoginUsePhoneText>
                        </TikTokLoginUsePhoneContainer>
                    </SplashBackground>

        </>

    );
}
