import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { UserProvider } from './src/contexts/UserContext';

export default function App() {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          {/* pantallas con Tab */}

          {/* pantallas sin Tab */}

        </NavigationContainer>

        <Text >App.js!</Text>
      </UserProvider>

      <StatusBar style='auto'/>
    </>
  );
}

