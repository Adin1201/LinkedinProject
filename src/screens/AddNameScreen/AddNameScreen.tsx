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
import styles from './AddNameScreen.styles';

function LoginScreen() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
  });

  const navigation = useNavigation<any>();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function continueButton() {
    Alert.alert('continueButton');
  }

  function openWelcomeScreen() {
    return navigation.navigate('WelcomeScreen');
  }

  function openAddEmailScreen() {
    return navigation.navigate('AddEmailScreen');
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

          <View style={styles.inputInfoContainer}>
            <Text style={styles.addNameText}>Add your name</Text>
            <View style={styles.inputInfoWrapper}>
              <Text>First Name</Text>
              <CustomTextInput
                value={state.firstName}
                onChangeText={slovoSTastature =>
                  setState({...state, firstName: slovoSTastature})
                }
                style={styles.inputHeightSize}
              />
            </View>
            <Text>Last Name</Text>
            <CustomTextInput
              value={state.lastName}
              onChangeText={slovoSTastature =>
                setState({...state, lastName: slovoSTastature})
              }
              style={styles.inputHeightSize}
            />
            <View style={styles.buttonContainer}>
              <Button onPress={openAddEmailScreen} title="Continue" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;
