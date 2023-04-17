import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UserProvider } from './src/contexts/UserContext';
import { MainStackScreen } from './src/screens/location-list/MainStackScreen';

const LocationListStack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <LocationListStack.Navigator screenOptions={{ headerShown: false }}>
            
            {/* //pantallas con Tab */}
            <LocationListStack.Screen name='Main' component={MainStackScreen} />
            
            {/* //pantallas sin Tab */}


          </LocationListStack.Navigator>
        </NavigationContainer>
      </UserProvider>
        
      <StatusBar style='auto'/>
    </>
  );
}

