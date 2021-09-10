import React, {useState, useRef } from 'react';
import { CheckBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native';

// formik
import { Formik } from 'formik';
import PhoneInput from 'react-native-phone-number-input';

// colors
import { Colors, PhoneLoginFinePrintContainer, PhoneLoginFinePrintText, PhoneLoginSecureLogo } from './styles';
const {primary, inputline} = Colors;

import {
    PhoneNextLoginButtonBackground,
    PhoneNextLoginButtonText,
    PhoneNextLoginButtonTouchable,
    PhoneTextBox,
    PhoneLoginStyledContainer,
    SubtitleContainer,
    SubtitleText,
    TitleContainer,
    TitleText,
    TOSAgreeCheckboxContainer,
    TOSAgreeCheckbox,
} from './styles';


function PhoneVerificationComp({navigation, route}) {

    // const navigation = useNavigation();

    return(
        <>
            <PhoneLoginStyledContainer>
                <PhoneTextBox>
                    <TitleContainer>
                        <TitleText>
                            Verify your phone number
                        </TitleText>
                    </TitleContainer>
                    <SubtitleContainer>
                        <SubtitleText>
                            Enter the code we've sent by text to

                            {/* {route.params.phoneNumber.toString().slice(0,-4) +'****'}. */}

                        </SubtitleText>
                    </SubtitleContainer>
                </PhoneTextBox>
            </PhoneLoginStyledContainer>

            <PhoneNextLoginButtonTouchable>
                <PhoneNextLoginButtonBackground source={require('../../../assets/nextButton.png')}

                onPress={() => navigation.navigate("Home")}
                >
                    <PhoneNextLoginButtonText>
                        Next
                    </PhoneNextLoginButtonText>
                </PhoneNextLoginButtonBackground>
            </PhoneNextLoginButtonTouchable>
        </>

    );
}

export default PhoneVerificationComp;
