import 'react-native-gesture-handler';

import Home from './src/pages/Home';
import Icon from 'react-native-vector-icons/Feather';
import MyDonations from './src/pages/MyDonations';
import MySelections from './src/pages/MySelections';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './src/pages/Profile';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="MySelections"
            component={MySelections}
            options={{
              tabBarLabel: 'My Selections',
              tabBarIcon: ({ color, size }) => (
                <Icon name="grid" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="MyDonations"
            component={MyDonations}
            options={{
              tabBarLabel: 'My Donations',
              tabBarIcon: ({ color, size }) => (
                <Icon name="gift" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <Icon name="user" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
