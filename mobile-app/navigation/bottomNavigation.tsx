import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Forms } from "../screens";
import Ionicons from "@expo/vector-icons/Ionicons";
import DrawerNavigatiom from "./drawerNavigation";
import { Dashboard, Login, Signup } from "../screens";
import { useNavigation } from "@react-navigation/native";
import RootStack from "./rootStack";

// import RootStack from "./rootStack";
const Tab = createBottomTabNavigator();
function BottomTabs() {
  const navigation =useNavigation()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        initialRouteName: "Home",
        tabBarStyle: { backgroundColor: "#fff" },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Signup") {
            iconName = focused ? "call" : "call-outline";
          } else if (route.name === "Connect") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          } else if (route.name === "Login") {
            iconName = focused ? "menu" : "menu-outline";
          } else if (route.name === "Back") {
            iconName = focused ? "arrow-back" : "arrow-back";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#272735",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen
        name="Login"
        component={Login}
      listeners={() => ({
          tabPress: (e) => {
       e.preventDefault();
            navigation.openDrawer();
        },
       })
   }
      />
      <Tab.Screen
        name="Signup"
        component={RootStack}
       
      />
        <Tab.Screen
        name="Back"
        component={RootStack}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.goBack();
          },
        })}
      />
    
    </Tab.Navigator>
  );
}
export default BottomTabs;