import React, {useEffect} from 'react';
import type {Node} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

import LoginScreen from './assets/screens/LoginScreen';
import RegisterScreen from './assets/screens/RegisterScreen';
import WelcomeScreen from './assets/screens/WelcomeScreen';
import HomeScreen from './assets/screens/CommentsScreen';
import CommentDetails from './assets/screens/CommentDetails';
import NewComment from './assets/screens/NewComment';
import UpdateComment from './assets/screens/UpdateComment';

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Comments"
            component={HomeScreen}
            options={{
              headerTitleStyle: styles.title,
              headerTintColor: '#113F67',
            }}
          />
          <Stack.Screen
            name="Comment Details"
            component={CommentDetails}
            options={{
              headerTitleStyle: styles.title,
              headerTintColor: '#113F67',
            }}
          />
          <Stack.Screen
            name="New Comment"
            component={NewComment}
            options={{
              headerTitleStyle: styles.title,
              headerTintColor: '#113F67',
            }}
          />
          <Stack.Screen
            name="Update Comment"
            component={UpdateComment}
            options={{
              headerTitleStyle: styles.title,
              headerTintColor: '#113F67',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#113F67',
    fontFamily: 'Nunito-SemiBold',
  },
});

export default App;
