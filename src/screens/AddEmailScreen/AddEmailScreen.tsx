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
import CustomTextInput from '../../components/CustomTextInput';
import Button from '../../components/Button';
import styles from './AddEmailScreen.styles';
import backArrow from '../../assets/images/backArrow.png';

function LoginScreen() {
  const [state, setState] = useState({
    email: '',
  });

  const [isEmailValid, setIsEmailValid] = useState(true);

  const navigation = useNavigation<any>();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const checkEmailValidity = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const openWelcomeScreen = () => {
    return navigation.navigate('WelcomeScreen');
  };

  const checkTextInput = () => {
    const trimmedEmail = state.email.trim();

    if (!trimmedEmail) {
      setIsEmailValid(false);
      return;
    }

    if (!checkEmailValidity(trimmedEmail)) {
      setIsEmailValid(false);
      return;
    }
    setIsEmailValid(true);
  };

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
          <View style={styles.backArrow}>
            <TouchableOpacity onPress={openWelcomeScreen}>
              <Image
                source={backArrow}
                resizeMode="contain"
                style={styles.logoImg}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={openWelcomeScreen}>
              <Image source={CloseButton} style={styles.closeBtn} />
            </TouchableOpacity>
          </View>

          <View style={styles.inputEmailContainer}>
            <Text style={styles.addEmail}>Add your email</Text>
            <View style={styles.inputEmailWrapper}>
              <Text>Email</Text>
              <CustomTextInput
                value={state.email}
                onChangeText={input => {
                  setState({...state, email: input});
                  setIsEmailValid(true);
                }}
                style={styles.inputHeightSize}
              />
            </View>
            {!isEmailValid && (
              <Text style={styles.invalidInput}>
                Please enter a valid email
              </Text>
            )}
            <View style={styles.buttonContainer}>
              <Button onPress={checkTextInput} title="Continue" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;
