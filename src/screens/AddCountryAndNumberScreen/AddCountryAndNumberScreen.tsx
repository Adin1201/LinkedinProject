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
import Button from '../../components/Button';
import styles from './AddCountryAndNumberScreen.styles';
import CustomTextInput from '../../components/CustomTextInput';
import {CountryPicker, CountryItem} from 'react-native-country-codes-picker';

function LoginScreen() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
  });

  const [selectedCountry, setSelectedCountry] = useState<CountryItem | null>(
    null,
  );
  const [showCountryPicker, setShowCountryPicker] = useState(false);
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
          <Text style={styles.securityCheckText}>
            {' '}
            Just a quick security check{' '}
          </Text>
          <Text style={styles.verificationText}>
            As an extra security step, we'll need to give you a verification
            code <Text style={styles.learnMoreText}>Learn more</Text>
          </Text>
          <View style={styles.inputInfoContainer}>
            <Text>Select country</Text>
            <TouchableOpacity
              onPress={() => setShowCountryPicker(true)}
              style={{
                borderWidth: 1,
                borderColor: '#6e6e6e',
                borderRadius: 4,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text>
                {selectedCountry
                  ? `${selectedCountry.name.en} (${selectedCountry.dial_code})`
                  : ''}
              </Text>
            </TouchableOpacity>

            {showCountryPicker && (
              <CountryPicker
                show={showCountryPicker}
                pickerButtonOnPress={item => {
                  console.log('Selected Country:', item);
                  setSelectedCountry(item);
                  setShowCountryPicker(false);
                }}
                lang={''}
              />
            )}
            <View style={styles.inputInfoWrapper}>
              <Text>Phone Number</Text>
              <CustomTextInput
                value={state.lastName}
                onChangeText={slovoSTastature =>
                  setState({...state, lastName: slovoSTastature})
                }
                style={styles.inputHeightSize}
              />
            </View>

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
