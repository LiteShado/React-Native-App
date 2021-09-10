import React from 'react';

import {
    LoginButtonTouchable,
    LoginButtonIconContainer,
    LoginButtonIconImage,
    LoginButtonTextContainer,
    LoginButtonText,
} from './styles'

function TikTokLoginButton({onPress, title}) {
    var bgColor;
    var textColor;
    var logoPath;
    if(title == "Use phone/ email/ username"){
        bgColor = '#ffffff';
        textColor = '#000000';
        logoPath = require('../../../assets/user.png');
    }else if (title === "Facebook") {
        bgColor = '#ffffff';
        textColor = '#000000';
        logoPath = require('../../../assets/facebook.png');
    }else if (title === "Apple") {
        bgColor = '#ffffff';
        textColor = '#000000';
        logoPath = require('../../../assets/apple.png');
    }else if (title === "Google") {
        bgColor = '#ffffff';
        textColor = '#000000';
        logoPath = require('../../../assets/google.png');
    }else if (title === "Twitter") {
        bgColor = '#ffffff';
        textColor = '#000000';
        logoPath = require('../../../assets/twitter.png');
    }else {
        bgColor = '#ffffff';
        textColor = '#000000';
        logoPath = require('../../../assets/instagram.png');
    }


    return (
        <LoginButtonTouchable onPress={onPress} style={{backgroundColor: bgColor}}>
            <LoginButtonIconContainer >
                <LoginButtonIconImage source={logoPath}/>
            </LoginButtonIconContainer>
            <LoginButtonTextContainer>
                <LoginButtonText style={{color: textColor}}>{`Continue with ${title}`}</LoginButtonText>
            </LoginButtonTextContainer>
        </LoginButtonTouchable>

    );
}

export default TikTokLoginButton;
