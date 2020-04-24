import React from 'react';
import {Dimensions} from 'react-native';
import {createStackNavigator, TransitionSpecs, HeaderStyleInterpolators} from "@react-navigation/stack";

import TabRoutes from "src/routes/TabRoutes";
import ChatScreen from "src/screens/Chat";
import GalleryScreen from "src/screens/Gallery";

const Stack = createStackNavigator();

const {width} = Dimensions.get("window");
const MyTransition = {
    gesturesEnabled: true,
    cardShadowEnabled: true,
    cardOverlayEnabled: true,
    animationEnabled: true,
    gestureResponseDistance: {
        horizontal: 60
    },
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({current, layouts}) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1, 2],
                            outputRange: [layouts.screen.width, 0, 0],
                        }),
                    }
                ],
            },
            overlayStyle: {
                opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.3],
                }),
            },
        }
    }
};

const StackRoutes = () => {

    return (
        <Stack.Navigator
            screenOptions={() => ({
                gestureEnabled: true,
                cardOverlayEnabled: true
            })}
            headerMode="none"
            mode="modal"
        >
            <Stack.Screen name="Root" component={TabRoutes}/>
            <Stack.Screen name="ChatBox" component={ChatScreen}
                          options={{
                              ...MyTransition
                          }}
            />
            <Stack.Screen name="Gallery" component={GalleryScreen}
                          options={{
                              ...MyTransition
                          }}
            />
        </Stack.Navigator>
    );
};

export default StackRoutes;
