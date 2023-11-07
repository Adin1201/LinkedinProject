import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SingInScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator<any>();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SingInScreen} />
      <Stack.Screen name="SignUp" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default LoginStack;
