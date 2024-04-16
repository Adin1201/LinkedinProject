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
import styles from './AddJobTitleScreen.styles';
import ToggleSwitch from '../../components/toggleswitch';
import OverlayScreen from '../../components/Overlay';

function AddJobTitleScreen() {
  const navigation = useNavigation<any>();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [recentJobTitle, setRecentJobTitle] = useState<string>('');
  const [recentEmploymentType, setRecentEmploymentType] = useState<string>('');
  const [recentCompanies, setRecentCompanies] = useState<string>('');

  const [activeField, setActiveField] = useState<string | null>(null);

  function toggleOverlay(field: string) {
    setIsOverlayVisible(!isOverlayVisible);
    setActiveField(field);
    console.log('active field', field);
  }

  function openWelcomeScreen() {
    return navigation.navigate('WelcomeScreen');
  }

  function handleOverlayClose(selectedItem: string, field: string) {
    console.log(
      'Closing overlay for field:',
      field,
      'with selected item:',
      selectedItem,
    );

    if (field === 'Most recent job title') {
      setRecentJobTitle(selectedItem);
    } else if (field === 'Employment type') {
      setRecentEmploymentType(selectedItem);
    } else if (field === 'Most recent company') {
      setRecentCompanies(selectedItem);
    }
    toggleOverlay('');
  }

  function handleClearInput() {
    console.log('Clearing input fields');
    setRecentJobTitle('');
    setRecentEmploymentType('');
    setRecentCompanies('');
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
          <View style={styles.linkedInLogo}>
            <Image
              source={LinkedInLogo}
              resizeMode="contain"
              style={styles.logoImg}
            />
          </View>

          <View style={styles.jobDescriptionContainer}>
            <Text style={styles.descriptionText}>
              Your profile helps you discover people and opportunities
            </Text>
            <View style={styles.imStudentTextWrapper}>
              <Text style={styles.imStudentText}>I'm a student</Text>
              <ToggleSwitch />
            </View>
            <View>
              <Text style={styles.mostRecentJobTitle}>
                Most recent job title
              </Text>
              <TouchableOpacity
                onPress={() => toggleOverlay('Most recent job title')}>
                <Text
                  style={[
                    styles.jobTitleText,
                    styles.underline,
                    !recentJobTitle && {color: 'gray'},
                  ]}>
                  {recentJobTitle ? recentJobTitle : 'Most recent job title*'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.employmentType}>
              <Text style={styles.employmentTypeTitle}>Employment type</Text>
              <TouchableOpacity
                onPress={() => toggleOverlay('Employment type')}>
                <Text
                  style={[
                    styles.jobTitleText,
                    styles.underline,
                    !recentEmploymentType && {color: 'gray'},
                  ]}>
                  {recentEmploymentType
                    ? recentEmploymentType
                    : 'Employment type*'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mostRecentCompany}>
              <Text style={styles.mostRecentCompanyTitle}>
                Most recent companies
              </Text>
              <TouchableOpacity
                onPress={() => toggleOverlay('Most recent company')}>
                <Text
                  style={[
                    styles.jobTitleText,
                    styles.underline,
                    !recentCompanies && {color: 'gray'},
                  ]}>
                  {recentCompanies ? recentCompanies : 'Most recent company*'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <OverlayScreen
        visible={isOverlayVisible}
        onClose={() => toggleOverlay('')}
        onJobSelect={handleOverlayClose}
        onClearInput={handleClearInput}
        field={activeField ?? ''}
      />
    </SafeAreaView>
  );
}

export default AddJobTitleScreen;
