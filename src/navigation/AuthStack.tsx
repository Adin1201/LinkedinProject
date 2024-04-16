import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SingInScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AddNameScreen from '../screens/AddNameScreen';
import AddEmailScreen from '../screens/AddEmailScreen';
import EmailVerificationScreen from '../screens/EmailVerificationScreen/EmailVerificationScreen';
import AddJobTitleScreen from '../screens/AddJobTitleScreen';
const Stack = createNativeStackNavigator<any>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddJobTitleScreen"
        component={AddJobTitleScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EmailVerificationScreen"
        component={EmailVerificationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SingInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddNameScreen"
        component={AddNameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddEmailScreen"
        component={AddEmailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
