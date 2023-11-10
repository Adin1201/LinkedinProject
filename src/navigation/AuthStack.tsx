import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SingInScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import TextInfoInputScreen from '../screens/TextInfoInputScreen';

const Stack = createNativeStackNavigator<any>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
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
        name="TextInfoInputScreen"
        component={TextInfoInputScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
