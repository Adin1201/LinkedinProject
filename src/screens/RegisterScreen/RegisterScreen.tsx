import React, {useState} from 'react';
import {
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import LinkedInLogo from '../../assets/images/linkedIn_logo.png';
import CloseButton from '../../assets/images/close_btn.png';
import styles from './RegisterScreen.styles';
import CustomTextInput from '../../components/CustomTextInput';
import Button from '../../components/Button';
import GoogleLogo from '../../assets/images/google_logo.png';

function RegisterScreen() {
  const [state, setState] = useState({
    emailOrPhone: '',
  });

  const navigation = useNavigation<any>();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function onCloseClicked() {
    Alert.alert('Close clicked');
  }

  function onClickLegalAgreement() {
    Alert.alert('Legal agreement');
  }

  function openSignInPage() {
    return navigation.navigate('SignIn');
  }

  function onClickAgreeAndJoin() {
    Alert.alert('Agree & Join');
  }

  function onClickContWithGoogle() {
    Alert.alert('Continue With Google');
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
        contentContainerStyle={{flex: 1}}>
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
          <View style={styles.content}>
            <View style={{marginBottom: 30}}>
              <Text style={styles.singInText}>Join Linkedin</Text>
              <Text>
                or{' '}
                <Text style={styles.joinLnText} onPress={openSignInPage}>
                  Sign in
                </Text>
              </Text>
            </View>
            <Text>Email</Text>
            <CustomTextInput
              value={state.emailOrPhone}
              onChangeText={slovoSTastature =>
                setState({...state, emailOrPhone: slovoSTastature})
              }
              style={{height: 30}}
            />
            <View style={styles.separatorContainer}>
              <Text>
                By clicking Agree & Join or Continue, you agree to LinkedIn's{' '}
                <Text
                  style={styles.boldBlueText}
                  onPress={onClickLegalAgreement}>
                  User Agreement
                </Text>
                ,
                <Text
                  style={styles.boldBlueText}
                  onPress={onClickLegalAgreement}>
                  {' '}
                  Privacy Policy
                </Text>{' '}
                and
                <Text
                  style={styles.boldBlueText}
                  onPress={onClickLegalAgreement}>
                  {' '}
                  Cookie Policy
                </Text>
                .
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Button onPress={onClickAgreeAndJoin} title="Agree & Join" />
            </View>
            <View style={styles.orSeparatorContainer}>
              <View style={styles.separatorBorder} />
              <Text style={styles.orText}>or</Text>
              <View style={styles.separatorBorder} />
            </View>
            <View style={{marginBottom: 19}}>
              <Button
                icon={GoogleLogo}
                onPress={onClickContWithGoogle}
                title="Continue with Google"
                transparent={true}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegisterScreen;
