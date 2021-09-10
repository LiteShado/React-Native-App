import styled from 'styled-components';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

// Company Colors
export const Colors = {
    primary: "#65AEED",
    secondary: "#9363F9",
    stroke: "E2E2E2",
    font: "#333333",
    shadowFont: "#767676",
    clickToRecord: "#EA4359"
}

const {primary, secondary, stroke, font, shadowFont, clickToRecord} = Colors;

// The syntax for these styled components is included below. It is efficient
// to divide components into screens they will be used on. Styled components
// can be any of the standard react native components, for example: Image,
// ImageBackground, Text, TouchableOpacity, View, etc.

// **IMPORTANT** The naming convention for styled components will be as follows:
// <<ScreenName>>_identifier_ComponentType
// e.g. Login_Button_TouchableOpacity or Settings_Options_Flatlist

// If the styled component is not for a screen but for a JSX component
// then the naming convention will be:
// C_<<ComponentName>>_identifier_ComponentType
// e.g. C_Logo_LogoWrapper_View or C_TOS_TermsOfServiceText_Text

// The container below can be used on most screens with very few exceptions.
// This container is a blank canvas in the safe area of any screen.
// Does not NEED to be used, just include if applicable.
export const StyledContainer = styled.View`
    flex: 1;
    justify-content: flex-end;
    padding-top: ${StatusBarHeight}px;
`;

// Screen Styled Components:

// Login Screen

export const KeyboardContainer = styled.View`
    flex: 1;
    align-items: center;
`;
export const KeyboardContainerInput = styled.View`
    flex-direction: row;
    align-items: center;
    padding-horizontal: 12;
`;
// Signup Screen

    // Random Screen

    // etc.


// JSX Component Styled Components:

    // Logo

    // Card

    // Profile Pic

    // etc.
