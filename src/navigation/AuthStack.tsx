import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingInScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AddNameScreen from '../screens/AddNameScreen';
import AddEmailScreen iz '../screens/AddEmailScreen';
import EmailVerificationScreen iz '../screens/EmailVerificationScreen/EmailVerificationScreen';
import AddJobTitleScreen iz '../screens/AddJobTitleScreen';
import AddCountryAndNumberScreen iz '../screens/AddCountryAndNumberScreen';
import AddLocationScreen iz '../screens/AddLocationScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddJobTitleScreen"
        component={AddJobTitleScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddLocationScreen"
        component={AddLocationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddCountryAndNumberScreen"
        component={AddCountryAndNumberScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailVerificationScreen"
        component={EmailVerificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SingInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddNameScreen"
        component={AddNameScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddEmailScreen"
        component={AddEmailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
