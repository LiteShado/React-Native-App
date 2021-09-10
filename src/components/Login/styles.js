import styled from "styled-components";
import { View, Text, Image, ImageBackground, TouchableOpacity, CheckBox } from "react-native";
import Constants from "expo-constants";
// import * as Font from "expo-font";
// import { useFonts } from "@use-expo/font";
// import { AppLoading } from "expo";

const StatusBarHeight = Constants.statusBarHeight;

// const customFonts = {
//     "SF Pro Display": require("../assets/fonts/SFPRODISPLAYREGULAR.OTF"),
// }
// const [ isLoaded ] = useFonts(customFonts);

//colors
export const Colors = {
    primary: "#E5E5E5",
    secondary: "#9363F9",
    tertiary: "#A6D4DF",
    darkLight: "#9CA3AF",
    messageBlue: "#65AEED",
    continueButtonBlue: "#6096EB",
    brand: "#9363F9",
    borderOutlineGray: "#C4C4C4",
    title: "#333333",
    subtitle: "#585858",
    inputline: "#E2E2E2"
};

const {primary, secondary, tertiary, messageBlue, continueButtonBlue, darkLight, brand, borderOutlineGray, title, subtitle, inputline} = Colors;


export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight}px;
`;
export const WhiteStyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight}px;
    background-color: white;
`;

//Login Page - Splash Page

export const SplashBackground = styled.ImageBackground`
    flex: 1;
    justify-content: flex-end;
    align-items: center
`;

export const InnerContainer = styled.View`
    flex: 1;
    padding-top: 120px;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
    width: 205px;
    height: 137px;
`;

export const LoginButtonContainer = styled.View`
    margin-top: 146px;
    width: 327px;
    height: 112px;
    align-content: center;
    justify-content: space-between;
`;
export const TikTokLoginButtonContainer = styled.View`
    margin-top: 5px;
    margin-left: 5px;
    width: 350px;
    height: 132px;
    align-content: center;
    justify-content: space-between;
    padding-top: 20px;
    ${'' /* margin-bottom: 50px; */}
`;

export const LoginButtonTouchable = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    height: 44px;
    border-radius: 30px;
    padding-vertical: 10px;
    padding-horizontal: 12px;
`;

export const LoginButtonIconContainer = styled.View`
    flex: 1;
    height: 18px;
    align-items: center;
    overflow: visible;
`;

export const LoginButtonIconImage = styled.Image`
    width: 16px;
    height: 18px;
`;

export const LoginButtonTextContainer = styled.View`
    flex: 4;
`;

export const LoginButtonText = styled.Text`
    font-size: 19px;
    font-style: normal;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: 0.36px;
    color: black;
`;

export const LoginUsePhoneContainer = styled.TouchableOpacity`
    height: 23px;
    width: 183px;
    align-items: center;
    margin-top: 24px;
`;

export const TikTokLoginUsePhoneContainer = styled.TouchableOpacity`
    height: 23px;
    width: 333px;
    align-items: center;
    margin-top: -20px;
    background-color: white;
`;

export const LoginUsePhoneText = styled.Text`
    color: #ffffff;
    font-size: 17px;
    line-height: 23px;
    font-style: normal;
    font-weight: normal;
`;

export const TikTokLoginUsePhoneText = styled.Text`
    color: #000000;
    font-size: 17px;
    line-height: 23px;
    font-style: normal;
    font-weight: normal;
`;

export const SignupText = styled.Text`
    color: #ff88ff;
    font-size: 17px;
    line-height: 23px;
    font-style: normal;
    font-weight: normal;
`;

export const LoginFinePrintContainer = styled.View`
    margin-top: 42px;
    height: 30px;
`;

export const LoginFinePrintText = styled.Text`
    color: #ffffff;
    font-size: 12px;
    line-height: 30px;
`;

export const TosPrivacyContainer = styled.View`
    justify-content: space-between;
    width: 340px;
    flex-direction: row;
`;

export const TosPrivacyTouchable = styled.TouchableOpacity``;

export const TosPrivacyText = styled.Text`
    color: #ffffff;
    text-decoration: underline;
    font-size: 12px;
`;

// Use Phone Login Screen

export const PhoneLoginStyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight}px;
    background-color: #ffffff;
`;

export const PhoneTextBox = styled.View`
    width: 90%;
    align-items: flex-start;
    margin-bottom: 48px;
`;

export const TextInputStyle = styled.View`
    height: 40px;
    margin: 12px;
    border-width: 1px;
    padding: 10px;
`;


export const TitleContainer = styled.View`
    margin-left: 24px;
    margin-top: 60px;
`;

export const SignupTitleContainer = styled.View`
    margin-left: 24px;
    margin-top: 60px;
`;
export const TikTokTitleContainer = styled.View`
    margin-left: 0;
    margin-top: 70px;
    margin-bottom: 0px;
    justify-content: center;
    align-items: center;
`;

export const DropDownStyle = styled.View`
    margin: 25px;
`;

export const TitleText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: ${title};
`;

export const SignupTitleText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: ${title};
`;
export const TikTokTitleText = styled.Text`
    font-size: 23px;
    margin-bottom: 10px;
    font-weight: bold;
    color: ${title};
    border-color: black;
`;

export const SubtitleContainer = styled.View`
    margin-top: 8px;
    margin-left: 24px;
    background-color: white;
`;

export const SignupSubtitleContainer = styled.View`
    margin-top: 8px;
    margin-left: 24px;
    background-color: white;
`;
export const TikTokSubtitleContainer = styled.View`
    margin-top: 0px;
    margin-left: 24px;
    padding: 20px;
    background-color: white;
`;

export const SubtitleText = styled.Text`
    font-size: 14px;
    color: ${subtitle};
`;

export const SignupSubtitleText = styled.Text`
    font-size: 14px;
    color: ${subtitle};
`;
export const TikTokSubtitleText = styled.Text`
    font-size: 14px;
    color: ${subtitle};
`;

export const PhoneNextLoginButtonTouchable = styled.TouchableOpacity`
margin-bottom: 0;
height: 60px;
width: 100%;
`;

export const SignupPhoneNextLoginButtonTouchable = styled.TouchableOpacity`
margin-top: 64px;
margin-bottom: 0px;
height: 60px;
width: 410px;
`;


export const PhoneNextLoginButtonBackground = styled.ImageBackground`
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
`;

export const PhoneNextLoginButtonText = styled.Text`
    font-size: 18px;
    color: #ffffff;
    font-weight: bold;
`;

export const TOSAgreeCheckboxContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-left: 24px;
    margin-top: 20px;
`;

export const PhoneLoginFinePrintContainer = styled.View`
    padding: 25px;
    flex-direction: row;
    background-color: white;
`;

export const PhoneLoginSecureLogo = styled.Image`
    align-self: flex-start;
    width: 24px;
    height: 24px;
`;

export const PhoneLoginFinePrintText = styled.Text`
    align-self: center;
    margin-left: 9px;
    width: 85%;
    font-size: 12px;
    color: #767676;
`;

export const ErrorText = styled.Text`
    font-size: 14px;
    color: red;
`;

export const NextElement = styled.View`

`;
