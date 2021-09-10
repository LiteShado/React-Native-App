import React, {useState} from 'react';
import {Text, Image, View} from 'react-native';

// import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';

//notes for this https://www.youtube.com/watch?v=TlVNKiH7P88

// GoogleSignin.configure({
//     webClientId: '',
//     offlineAccess: true
// });

// const [userGoogleInfo, setUserGoogleInfo] = useState({});
// const [loaded, setLoaded] = useState(false)

// signIn = async () => {

    // try {
    //   await GoogleSignin.hasPlayServices();

    //   const userInfo = await GoogleSignin.signIn();
    //   this.setState({ userInfo });

    // } catch (error) {
    //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //     // user cancelled the login flow
    //   } else if (error.code === statusCodes.IN_PROGRESS) {
    //     // operation (e.g. sign in) is in progress already
    //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //     // play services not available or outdated
    //   } else {
    //     // some other error happened
    //   }
    // }

    function GoogleSignInComp() {

    return (
        <>
        {/* <View>
            <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._signIn}
            disabled={this.state.isSigninInProgress} />
        </View> */}

        {/* {this.state.loaded ?
            <View>
            <Text>{this.state.userGoogleInfo.user.name}</Text>
            <Text>{this.state.userGoogleInfo.user.email}</Text>
        </View> :
        <Text>
            Not SignedIn
        </Text>
        } */}
    </>
    )
    // }
  };
