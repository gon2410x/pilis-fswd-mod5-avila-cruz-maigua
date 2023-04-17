import React from 'react';
import { Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ProfileScreen } from '../../profile/ProfileScreen';
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../utils/theme';



const Tab = createBottomTabNavigator()

const TAB_ICON = {
    Profile: 'person',
  }

  const screenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name]// TAB_ICON[Home]
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.inactive,
      headerShown: false,
    }
  }

export const MainStackScreen = () => {
    return (
 
      <Tab.Navigator screenOptions={screenOptions}> 


        <Tab.Screen name='Profile' options={{ title: 'Perfil' }} component={ProfileScreen} />

      </Tab.Navigator>
    )
  }