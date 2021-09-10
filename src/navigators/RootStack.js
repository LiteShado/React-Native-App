import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
// React Navigation
import { createStackNavigator } from '@react-navigation/stack';

import { View, Text, ColorSchemeName } from 'react-native';

import {AuthenticationScreen} from '../screens/LoginScreens/AuthenticationScreen';
import {SignupScreen} from '../screens/SignupScreens/SignupScreen';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {InputOTPScreen} from '../screens/LoginScreens/InputOTPScreen';
import {LoginScreen} from '../screens/LoginScreens/LoginScreen';
import {TikTokScreen} from '../screens/LoginScreens/TikTokScreen';
import {AppleScreen} from '../screens/LoginScreens/AppleScreen';
import {UserLoginScreen} from '../screens/LoginScreens/UserLoginScreen';
import {FacebookLoginScreen} from '../screens/LoginScreens/FacebookLoginScreen';
import {TwitterLoginScreen} from '../screens/LoginScreens/TwitterLoginScreen';
import {GoogleLoginScreen} from '../screens/LoginScreens/GoogleLoginScreen';
import {InstagramLoginScreen} from '../screens/LoginScreens/InstagramLoginScreen';
import {NewUserBirthday} from '../screens/SignupScreens/NewUserBirthday';
import {NewUserChildren} from '../screens/SignupScreens/NewUserChildren';
import {NewUserDatingPref} from '../screens/SignupScreens/NewUserDatingPref';
import {NewUserDrink} from '../screens/SignupScreens/NewUserDrink';
import {NewUserEducation} from '../screens/SignupScreens/NewUserEducation';
import {NewUserFirstName} from '../screens/SignupScreens/NewUserFirstName';
import {NewUserHeight} from '../screens/SignupScreens/NewUserHeight';
import {NewUserIdentity} from '../screens/SignupScreens/NewUserIdentity';
import {NewUserInterest} from '../screens/SignupScreens/NewUserInterest';
import {NewUserPolitical} from '../screens/SignupScreens/NewUserPolitical';
import {NewUserProfilePrompt} from '../screens/SignupScreens/NewUserProfilePrompt';
import {NewUserReligion} from '../screens/SignupScreens/NewUserReligion';
import {NewUserWorkout} from '../screens/SignupScreens/NewUserWorkout';
import {NewUserZodiac} from '../screens/SignupScreens/NewUserZodiac';

import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';

import {BottomTabNavigator} from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

//  import { RootStackParamList } from '../types';


//  export default function Navigation({ colorScheme }) {

    // colorScheme = ColorSchemeName;

    // return (
    //   <NavigationContainer
    //     linking={LinkingConfiguration}
    //     theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        // <RootStack
        // linking={LinkingConfiguration}
        // />
    //   </NavigationContainer>
    // );
//   }




const Stack = createStackNavigator();

// const RootStack = () = {

function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 15,
                    }
                    }}
                    >

                    <Stack.Screen
                    name="Home"
                    component={LoginScreen}
                    />
                    <Stack.Screen
                    name="Signup"
                    component={SignupScreen}
                    />
                    <Stack.Screen
                    name="Authentication"
                    component={AuthenticationScreen}
                    />
                    <Stack.Screen
                    name="OTP"
                    component={InputOTPScreen}
                    />
                    <Stack.Screen
                    name="Apple"
                    component={AppleScreen}
                    />
                    <Stack.Screen
                    name="TikTok"
                    component={TikTokScreen}
                    />
                    <Stack.Screen
                    name="UserLogin"
                    component={UserLoginScreen}
                    />
                    <Stack.Screen
                    name="FacebookLogin"
                    component={FacebookLoginScreen}
                    />
                    <Stack.Screen
                    name="TwitterLogin"
                    component={TwitterLoginScreen}
                    />
                    <Stack.Screen
                    name="GoogleLogin"
                    component={GoogleLoginScreen}
                    />
                    <Stack.Screen
                    name="InstagramLogin"
                    component={InstagramLoginScreen}
                    />
                    <Stack.Screen
                    name="NewUserBirthday"
                    component={NewUserBirthday}
                    />
                    <Stack.Screen
                    name="NewUserChildren"
                    component={NewUserChildren}
                    />
                    <Stack.Screen
                    name="NewUserDatingPref"
                    component={NewUserDatingPref}
                    />
                    <Stack.Screen
                    name="NewUserDrink"
                    component={NewUserDrink}
                    />
                    <Stack.Screen
                    name="NewUserEducation"
                    component={NewUserEducation}
                    />
                    <Stack.Screen
                    name="NewUserFirstName"
                    component={NewUserFirstName}
                    />
                    <Stack.Screen
                    name="NewUserHeight"
                    component={NewUserHeight}
                    />
                    <Stack.Screen
                    name="NewUserIdentity"
                    component={NewUserIdentity}
                    />
                    <Stack.Screen
                    name="NewUserInterest"
                    component={NewUserInterest}
                    />
                    <Stack.Screen
                    name="NewUserPolitical"
                    component={NewUserPolitical}
                    />
                    <Stack.Screen
                    name="NewUserProfilePrompt"
                    component={NewUserProfilePrompt}
                    />
                    <Stack.Screen
                    name="NewUserReligion"
                    component={NewUserReligion}
                    />
                    <Stack.Screen
                    name="NewUserWorkout"
                    component={NewUserWorkout}
                    />
                    <Stack.Screen
                    name="NewUserZodiac"
                    component={NewUserZodiac}
                    />
            </Stack.Navigator>
         </NavigationContainer>
    );
    }
    
    // <Stack.Screen name="NotFound"
    // component={BottomTabNavigator}
    // options={{ title: 'Oops!' }}

    // />

export default RootStack;
