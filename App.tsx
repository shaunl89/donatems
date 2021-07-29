import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import { Provider } from 'react-redux';
import ModalScreen from './src/components/ModalScreen';
import Home from './src/pages/Home';
import MyDonations from './src/pages/MyDonations';
import MySelections from './src/pages/MySelections';
import Profile from './src/pages/Profile';
import store from './src/store/store';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const BottomNavTabs = () => {
  return (
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
  )
}


const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator mode="modal">
            <RootStack.Screen
              name="Main"
              component={BottomNavTabs}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="MyModal"
              component={ModalScreen}
              options={({ route }: { route: any }) => ({
                title: route.params.name,
                headerBackTitleVisible: false,
                component: route.params.component
              })}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};
export default App;
