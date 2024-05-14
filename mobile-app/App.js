import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './screens';
import { Signup } from './screens';
import BottomTabs from './navigation/bottomNavigation'
import { NavigationContainer } from '@react-navigation/native';
import DraweNavigation from './navigation/drawerNavigation';
export default function App() {
  return (
    
    <NavigationContainer>
     
       <DraweNavigation/>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
