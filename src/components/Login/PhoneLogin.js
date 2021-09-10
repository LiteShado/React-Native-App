import React, {useState, useRef } from 'react';
import { Button, CheckBox } from 'react-native';

import PhoneInput from 'react-native-phone-number-input';

// styled components

import {
    ErrorText,
    PhoneLoginFinePrintContainer,
    PhoneLoginFinePrintText,
    PhoneLoginSecureLogo,
    PhoneLoginStyledContainer,
    PhoneNextLoginButtonBackground,
    PhoneNextLoginButtonText,
    PhoneNextLoginButtonTouchable,
    PhoneTextBox,
    SubtitleContainer,
    SubtitleText,
    TitleContainer,
    TitleText,
    TOSAgreeCheckboxContainer,
    Colors
} from './styles';

import { useNavigation } from '@react-navigation/native';

const {primary, darkLight} = Colors;

function PhoneLogin() {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [msg, setMsg] = useState("");
    const [checked, setChecked] = useState(false);

    const navigation = useNavigation();

    function formatPhoneNumber(phoneNumberString) {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(1)(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            var intlCode = (match[1] ? '+1' : '');
            return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
        }
        return null;
    }
    return(
        <>
            <PhoneLoginStyledContainer>
                <PhoneTextBox>
                    <TitleContainer>
                        <TitleText>
                            What's your phone number?
                        </TitleText>
                    </TitleContainer>
                    <SubtitleContainer>
                        <SubtitleText>
                        We take pride in our community by making sure everyone on Why Knot Me is authentic.
                        </SubtitleText>
                    </SubtitleContainer>
                </PhoneTextBox>
                <PhoneInput
                    defaultValue={value}
                    layout="second"
                    onChangeText={(text) => {
                    setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                    }}
                    defaultCode = "US"
                    autoFocus
                    containerStyle = {{backgroundColor: 'white'}}
                    textContainerStyle = {{backgroundColor: 'white'}}
                />
                <TOSAgreeCheckboxContainer onPress={()=>{
                    setChecked(!checked);
                }}>
                    <CheckBox value={checked} tintColors={{ true: darkLight, false: '#E2E2E2' }} onValueChange={()=>{setChecked(!checked)}}/>
                    <SubtitleText>
                        I agree to the terms and conditions.
                    </SubtitleText>
                </TOSAgreeCheckboxContainer>
                <SubtitleContainer>
                <ErrorText>
                    {msg}
                </ErrorText>
            </SubtitleContainer>
            </PhoneLoginStyledContainer>
            <PhoneLoginFinePrintContainer>
                <PhoneLoginSecureLogo source={require('../../../assets/SecureNumber.png')}/>
                <PhoneLoginFinePrintText>We will never share your phone number with anyone and it will not be on your profile.</PhoneLoginFinePrintText>
            </PhoneLoginFinePrintContainer>
            <PhoneNextLoginButtonTouchable onPress={()=>{
                    if(formattedValue==""){
                        setMsg('No number entered!');
                    }else if(!checked){
                        setMsg('Must agree to terms and conditions!');
                    }else if (formatPhoneNumber(formattedValue) === null) {
                        setMsg('Invalid phone number!');
                    }else{
                        setMsg('');
                        navigation.navigate("OTP", {phoneNumber: formatPhoneNumber(formattedValue)})}
                    }
                }
                >
                <PhoneNextLoginButtonBackground source={require('../../../assets/nextButton.png')}
                onPress={() => navigation.navigate("OTP")}>
                    <PhoneNextLoginButtonText
                    >
                        Next
                    </PhoneNextLoginButtonText>
                </PhoneNextLoginButtonBackground>
            </PhoneNextLoginButtonTouchable>


        </>
    );
}

export default PhoneLogin;
