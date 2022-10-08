import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../Screens/Login';
import SignUpScreen from '../Screens/Signup';
import SplashScreen from '../Screens/Splash';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tru-Verify" 
        options={{
          headerShown: false,
        }}  
        component={ SplashScreen } />
      <Stack.Screen name="signin" component={ SignInScreen } />
      <Stack.Screen name="signup" 
      options={{
        title: "Home",
        color: "white",
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#3e92d1',
        }
      }}
      component={ SignUpScreen } />
    </Stack.Navigator>
  );
}

export default MyStack;