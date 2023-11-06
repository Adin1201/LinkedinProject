/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// @ts-ignore
import LinkedInLogo from './assets/images/linkedIn_logo.png';
// @ts-ignore
import CloseButton from './assets/images/close_btn.png';
import CustomTextInput from './components/CustomTextInput';
import Button from './components/Button';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function onCloseClicked() {
  Alert.alert('Close clicked');
}

function openSignInPage() {
  // Linking.openURL('https://www.linkedin.com/signup');
  Alert.alert('Open Ln signup page');
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

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [state, setState] = useState({
    emailOrPhone: '',
    password: '',
    skill: '',
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.safeAreaView]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}> */}
      <View style={styles.root}>
        <View style={styles.linkedCloseWrapper}>
          <Image
            source={LinkedInLogo}
            resizeMode="contain"
            style={styles.logoImg}
          />
          <TouchableOpacity onPress={onCloseClicked}>
            <Image source={CloseButton} style={styles.closeBtn} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.singInText}>Sign in</Text>
          <Text>
            or{' '}
            <Text style={styles.joinLnText} onPress={openSignInPage}>
              Join Linkedin
            </Text>
          </Text>
        </View>

        <View
          style={{
            marginTop: 100,
          }}>
          <CustomTextInput
            value={state.emailOrPhone}
            onChangeText={slovoSTastature =>
              setState({...state, emailOrPhone: slovoSTastature})
            }
            placeholder="Email or Phone"
          />

          <CustomTextInput
            value={state.password}
            onChangeText={slovoSTastature =>
              setState({...state, password: slovoSTastature})
            }
            placeholder="Password"
            secureTextEntry={true}
            rootStyle={{marginTop: 30, marginBottom: 30}}
          />
        </View>

        <View>
          <Text style={styles.forgotPasswordText} onPress={forgotPasswordText}>
            Forgot password?
          </Text>
        </View>

        <View style={{marginTop: 20, marginBottom: 19}}>
          <Button onPress={onClickSignIn} title="Sign in" />
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <View
            style={{
              flex: 1,
              borderWidth: 0.2,
              marginRight: 20,
              borderColor: 'gray',
            }}></View>
          <Text>or</Text>
          <View
            style={{
              flex: 1,
              borderWidth: 0.2,
              marginLeft: 20,
              borderColor: 'gray',
            }}></View>
        </View>

        <View style={{marginTop: 20, marginBottom: 19}}>
          <Button onPress={signInWithApple} title="Sign in with Apple" />
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  root: {
    margin: 20,
  },
  forgotPasswordText: {
    color: '#0A66C2',
    fontWeight: 'bold',
  },
  closeBtn: {
    width: 24,
    height: 24,
  },
  buttonRoot: {
    backgroundColor: '#0A66C2',
    padding: 13,
    alignItems: 'center',
    borderRadius: 40,
  },
  buttonTitle: {
    fontSize: 20,
    color: 'white',
  },
  linkedCloseWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  singInText: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
  },
  joinLnText: {
    color: '#0A66C2',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  logoImg: {
    width: 100,
    height: 40,
  },
});

export default App;
