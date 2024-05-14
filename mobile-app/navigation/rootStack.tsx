import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup } from '../screens';
import { MainScreen } from '../components/scrollTopTab/mainScreen';
import { Profile } from '../screens/profile';




const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false }}>
      {/* <Stack.Screen name="Signup" component={Signup} /> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="Profile" component={Profile} />

      

      
    </Stack.Navigator>
  );
}
export default RootStack;