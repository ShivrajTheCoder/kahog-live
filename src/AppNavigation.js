import React from "react";

import HomePage from "./HomePage";
import HostPage from "./HostPage";
import AudiencePage from "./AudiencePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomNav from "./components/BottomNav";
import Home from "./screens/Home";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function AppNavigation(props) {
    return (
        <Tab.Navigator initialRouteName="Home" tabBar={props => <BottomNav {...props} />}>
            <Tab.Screen options={{headerShown: false}} headerMode="none" name="HomePage" component={HomePage} />
            <Tab.Screen options={{headerShown: false}} headerMode="none" name="Home" component={Home} />
            <Tab.Screen options={{headerShown: false}} name="HostPage" component={HostPage} />
            <Tab.Screen options={{headerShown: false}} name="AudiencePage" component={AudiencePage} />
        </Tab.Navigator>
    );
}