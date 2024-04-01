import React from "react";

import HomePage from "./HomePage";
import HostPage from "./HostPage";
import AudiencePage from "./AudiencePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomNav from "./components/Layout/BottomNav";
import Home from "./screens/Home";
import AboutUs from "./screens/StaticScreens/AboutUs";
import SearchBar from "./components/SearchComponents/SearchBar";
import Search from "./screens/Search";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function AppNavigation(props) {
    return (
        <Tab.Navigator initialRouteName="Home" tabBar={props => <BottomNav {...props} />}>
            <Tab.Screen options={{headerShown: false}} headerMode="none" name="HomePage" component={HomePage} />
            <Tab.Screen options={{headerShown: false}} headerMode="none" name="Home" component={Home} />
            <Tab.Screen options={{headerShown: false}} name="HostPage" component={HostPage} />
            <Tab.Screen options={{headerShown: false}} name="AudiencePage" component={AudiencePage} />
            <Tab.Screen options={{headerShown: false}} name="Search" component={Search} />

            {/* Static Screens */}
            <Tab.Screen options={{headerShown: false}} name="AboutUs" component={AboutUs} />
        </Tab.Navigator>
    );
}