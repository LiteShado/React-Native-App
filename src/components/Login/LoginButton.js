import React from 'react';

import {
    LoginButtonTouchable,
    LoginButtonIconContainer,
    LoginButtonIconImage,
    LoginButtonTextContainer,
    LoginButtonText,
} from './styles'

function LoginButton({onPress, title}) {
    var bgColor;
    var textColor;
    var logoPath;
    if(title == "TikTok"){
        bgColor = '#333333';
        textColor = '#ffffff';
        logoPath = require('../../../assets/tiktok.png');
    }else{
        bgColor = '#ffffff';
        textColor = '#000000';
        logoPath = require('../../../assets/apple.png');
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

export default LoginButton;
