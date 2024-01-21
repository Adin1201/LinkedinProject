import React, {useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import LinkedInLogo from '../../assets/images/linkedIn_logo.png';
import CloseButton from '../../assets/images/close_btn.png';
import AppleLogo from '../../assets/images/apple_logo.png';
import GoogleLogo from '../../assets/images/google_logo.png';
import CustomTextInput from '../../components/CustomTextInput';
import Button from '../../components/Button';
import styles from './LoginScreen.styles';

function LoginScreen() {
  const [state, setState] = useState({
    emailOrPhone: '',
    password: '',
  });

  const navigation = useNavigation<any>();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function onCloseClicked() {
    Alert.alert('Close clicked');
  }

  function openSignUpPage() {
    return navigation.navigate('SignUp');
  }

  function onClickSignIn() {
    Alert.alert('Ovdje cemo nekad implementirat poziv API-ja za login');
  }

  function forgotPasswordText() {
    Alert.alert('Forgot password?');
  }

  function signInWithApple() {
    Alert.alert('Sign in with Apple');
  }

  function openWelcomeScreen() {
    return navigation.navigate('WelcomeScreen');
  }

  return (
    <SafeAreaView style={[backgroundStyle, styles.safeAreaView]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.root}>
          <View style={styles.linkedCloseWrapper}>
            <Image
              source={LinkedInLogo}
              resizeMode="contain"
              style={styles.logoImg}
            />
            <TouchableOpacity onPress={openWelcomeScreen}>
              <Image source={CloseButton} style={styles.closeBtn} />
            </TouchableOpacity>
          </View>

          <View style={styles.signInContainer}>
            <View style={styles.signInWrapper}>
              <Text style={styles.singInText}>Sign in</Text>
              <Text>
                or{' '}
                <Text style={styles.joinLnText} onPress={openSignUpPage}>
                  Join Linkedin
                </Text>
              </Text>
            </View>

            <CustomTextInput
              value={state.emailOrPhone}
              onChangeText={slovoSTastature =>
                setState({...state, emailOrPhone: slovoSTastature})
              }
              placeholder="Email or Phone"
            />

            <View style={styles.passwordInput}>
              <CustomTextInput
                value={state.password}
                onChangeText={slovoSTastature =>
                  setState({...state, password: slovoSTastature})
                }
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>
            <Text
              style={styles.forgotPasswordText}
              onPress={forgotPasswordText}>
              Forgot password?
            </Text>

            <View style={{}}>
              <Button onPress={onClickSignIn} title="Sign in" />
            </View>

            <View style={styles.orSeparatorContainer}>
              <View style={styles.separatorBorder} />
              <Text style={styles.orText}>or</Text>
              <View style={styles.separatorBorder} />
            </View>

            <Button
              icon={AppleLogo}
              onPress={signInWithApple}
              title="Sign in with Apple"
              transparent={true}
            />
            <View style={styles.separatorAppleGoogle} />

            <Button
              icon={GoogleLogo}
              onPress={signInWithApple}
              title="Sign in with Google"
              transparent={true}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;
