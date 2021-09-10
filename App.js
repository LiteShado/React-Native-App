import React from 'react';
import RootStack from './src/navigators/RootStack';
// import Login from './src/screens/LoginScreens/LoginScreen';

export default function App() {
  return (
    <RootStack />
  );
}

// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import {AuthenticationScreen} from './src/screens/LoginScreens/AuthenticationScreen';
// import {SignupScreen} from './src/screens/SignupScreens/SignupScreen';
// import {HomeScreen} from './src/screens/Home/HomeScreen';
// import {InputOTPScreen} from './src/screens/LoginScreens/InputOTPScreen';
// import {LoginScreen} from './src/screens/LoginScreens/LoginScreen';
// import {TikTokScreen} from './src/screens/LoginScreens/TikTokScreen';
// import {AppleScreen} from './src/screens/LoginScreens/AppleScreen';
// import {UserLoginScreen} from './src/screens/LoginScreens/UserLoginScreen';
// import {FacebookLoginScreen} from './src/screens/LoginScreens/FacebookLoginScreen';
// import {TwitterLoginScreen} from './src/screens/LoginScreens/TwitterLoginScreen';
// import {GoogleLoginScreen} from './src/screens/LoginScreens/GoogleLoginScreen';
// import {InstagramLoginScreen} from './src/screens/LoginScreens/InstagramLoginScreen';
// import {NewUserBirthday} from './src/screens/SignupScreens/NewUserBirthday';
// import {NewUserChildren} from './src/screens/SignupScreens/NewUserChildren';
// import {NewUserDatingPref} from './src/screens/SignupScreens/NewUserDatingPref';
// import {NewUserDrink} from './src/screens/SignupScreens/NewUserDrink';
// import {NewUserEducation} from './src/screens/SignupScreens/NewUserEducation';
// import {NewUserFirstName} from './src/screens/SignupScreens/NewUserFirstName';
// import {NewUserHeight} from './src/screens/SignupScreens/NewUserHeight';
// import {NewUserIdentity} from './src/screens/SignupScreens/NewUserIdentity';
// import {NewUserInterest} from './src/screens/SignupScreens/NewUserInterest';
// import {NewUserPolitical} from './src/screens/SignupScreens/NewUserPolitical';
// import {NewUserProfilePrompt} from './src/screens/SignupScreens/NewUserProfilePrompt';
// import {NewUserReligion} from './src/screens/SignupScreens/NewUserReligion';
// import {NewUserWorkout} from './src/screens/SignupScreens/NewUserWorkout';
// import {NewUserZodiac} from './src/screens/SignupScreens/NewUserZodiac';

import ProgressBar from 'react-native-progress/Bar';

// console.disableYellowBox = ["Unable to symbolicate"];
// fixes error : Unable to symbolicate stack trace: The stack is null
// (node:46085) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 change listeners added to [HasteMap]. Use emitter.setMaxListeners() to increase limit
// (Use `node --trace-warnings ...` to show where the warning was created)

const Stack = createStackNavigator();

// const App = () => {
//     return (
//       <RootStack />
//     );
//   }

// export default App;

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator  initialRouteName="Home">
//         <Stack.Screen
//         name="Home"
//         component={LoginScreen}
//         />
//         <Stack.Screen
//         name="Signup"
//         component={SignupScreen}
//         />
//         <Stack.Screen
//         name="Authentication"
//         component={AuthenticationScreen}
//         />
//         <Stack.Screen
//         name="OTP"
//         component={InputOTPScreen}
//         />
//         <Stack.Screen
//         name="Apple"
//         component={AppleScreen}
//         />
//         <Stack.Screen
//         name="TikTok"
//         component={TikTokScreen}
//         />
//         <Stack.Screen
//         name="UserLogin"
//         component={UserLoginScreen}
//         />
//         <Stack.Screen
//         name="FacebookLogin"
//         component={FacebookLoginScreen}
//         />
//         <Stack.Screen
//         name="TwitterLogin"
//         component={TwitterLoginScreen}
//         />
//         <Stack.Screen
//         name="GoogleLogin"
//         component={GoogleLoginScreen}
//         />
//         <Stack.Screen
//         name="InstagramLogin"
//         component={InstagramLoginScreen}
//         />
//         <Stack.Screen
//         name="NewUserBirthday"
//         component={NewUserBirthday}
//         />
//         <Stack.Screen
//         name="NewUserChildren"
//         component={NewUserChildren}
//         />
//         <Stack.Screen
//         name="NewUserDatingPref"
//         component={NewUserDatingPref}
//         />
//         <Stack.Screen
//         name="NewUserDrink"
//         component={NewUserDrink}
//         />
//         <Stack.Screen
//         name="NewUserEducation"
//         component={NewUserEducation}
//         />
//         <Stack.Screen
//         name="NewUserFirstName"
//         component={NewUserFirstName}
//         />
//         <Stack.Screen
//         name="NewUserHeight"
//         component={NewUserHeight}
//         />
//         <Stack.Screen
//         name="NewUserIdentity"
//         component={NewUserIdentity}
//         />
//         <Stack.Screen
//         name="NewUserInterest"
//         component={NewUserInterest}
//         />
//         <Stack.Screen
//         name="NewUserPolitical"
//         component={NewUserPolitical}
//         />
//         <Stack.Screen
//         name="NewUserProfilePrompt"
//         component={NewUserProfilePrompt}
//         />
//         <Stack.Screen
//         name="NewUserReligion"
//         component={NewUserReligion}
//         />
//         <Stack.Screen
//         name="NewUserWorkout"
//         component={NewUserWorkout}
//         />
//         <Stack.Screen
//         name="NewUserZodiac"
//         component={NewUserZodiac}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;
