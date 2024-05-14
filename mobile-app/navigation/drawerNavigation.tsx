import { useContext } from "react";
// import { GlobalInfo } from "../context/provider";
import "react-native-gesture-handler";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomSidebarMenu from "../components/customSideBarMenu";
import { Dashboard, Login, Signup } from "../screens";
import BottomTabs from "./bottomNavigation";


const Drawer = createDrawerNavigator();

function DraweNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 },
        headerShown: false,
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      {!true ? (
        <Drawer.Screen name="BottomTabs" component={BottomTabs} />
      ) : (
        <Drawer.Screen name="Dashboard" component={Dashboard} />
      )}
  
  
    </Drawer.Navigator>
  );
}

export default DraweNavigation;
