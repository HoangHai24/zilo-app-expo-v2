import React from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {MaterialIcons,FontAwesome} from "@expo/vector-icons"
import HomeScreen from "src/screens/Home";

const Tabs = createMaterialTopTabNavigator()

const TabRoutes = () => {
    return (
        <Tabs.Navigator
            tabBarPosition="bottom"
            initialRouteName="Home"
            backBehavior="initialRoute"
            tabBarOptions={{
                labelStyle: {
                    fontSize: 10,
                    padding: 0,
                    margin: 0
                },
                tabStyle: {
                    flex: 1
                },
                activeTintColor: "#c52728",
                showIcon: true,
                showLabel: false,
                inactiveTintColor: "#666",
                indicatorStyle: {
                    top: 0,
                    backgroundColor: "#c52728"
                }

            }}
        >
            <Tabs.Screen name="Home" component={HomeScreen}
                         options={{
                             tabBarLabel: 'Danh bạ',
                             tabBarIcon: ({focused, color}) => (
                                 <MaterialIcons name="contacts" size={focused ? 24 : 22} color={color}/>)
                         }}
            />
        </Tabs.Navigator>
    );
};

export default TabRoutes;
