import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from "src/screens/Auths/Login";

const AuthRoutes = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    );
};

export default AuthRoutes;
