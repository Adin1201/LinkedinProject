import React, {useState} from 'react';
import {
  Alert,
  Image,
  KeyboardTypeOptions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import LinkedInLogo from '../../assets/images/linkedIn_logo.png';
import CustomTextInput from '../../components/CustomTextInput';
import Button from '../../components/Button';
import styles from './EmailVerificationScreen.styles';

interface CustomTextInputProps {
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
}

const EmailVerificationScreen: React.FC = () => {
  const [code, setCode] = useState('');

  const navigation = useNavigation<any>();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const openWelcomeScreen = () => {
    return navigation.navigate('WelcomeScreen');
  };

  const handleCodeChange = (input: string) => {
    // Remove non-numeric characters from input
    const formattedText = input.replace(/[^0-9]/g, '').slice(0, 6);
    // Update the state
    setCode(formattedText);
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
          <View style={styles.headerContainer}>
            <Image
              source={LinkedInLogo}
              resizeMode="contain"
              style={styles.logoImg}
            />
            <View style={styles.signInWrapper}>
              <TouchableOpacity onPress={openWelcomeScreen}>
                <Text style={styles.signInText}>Sign in</Text>
              </TouchableOpacity>
            </View>
            <Button
              size="small"
              onPress={() => {}}
              title="Join now"
              transparent
              style={{borderColor: '#0A66C2'}}
              styleTitle={{color: '#0A66C2'}}
            />
          </View>

          <View style={styles.inputCodeContainer}>
            <Text style={styles.enterCode}>Enter the 6-digit code</Text>
            <Text>Check email for a verification code</Text>
            <Text style={styles.changeText}>Change</Text>
            <View style={styles.inputVerificationCode}>
              <CustomTextInput
                value={code}
                onChangeText={handleCodeChange}
                placeholder="Unesite 6-ocifreni broj"
                keyboardType="numeric"
                maxLength={6}
              />

              <Text style={styles.resendCode}>Resend code</Text>
            </View>
            <View style={styles.buttonContainer}></View>
            <Text>
              If you don't see a code in your inbox, check your spam folder. If
              it's not there, the email address may not be confirmed, or it may
              not match an existing Linkedln account.
            </Text>
            <Text style={styles.emailAccess}>Can't access this email?</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmailVerificationScreen;
