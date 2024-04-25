import React, {useEffect, useState} from 'react';
import {
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
import Button from '../../components/Button';

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
  const [universityOrSchool, setUniversityOrSchool] = useState<string>('');
  const [degree, setDegree] = useState<string>('');
  const [specialization, setSpecialization] = useState<string>('');

  const [activeField, setActiveField] = useState<string | null>(null);
  const [isYes, setIsYes] = useState(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (isYes) {
      const allFieldsFilled =
        universityOrSchool !== '' && degree !== '' && specialization !== '';
      setIsFormValid(allFieldsFilled); // Boolean rezultat
    } else {
      const allFieldsFilled =
        recentJobTitle !== '' &&
        recentEmploymentType !== '' &&
        recentCompanies !== '';
      setIsFormValid(allFieldsFilled);
    }
  }, [
    isYes,
    universityOrSchool,
    degree,
    specialization,
    recentJobTitle,
    recentEmploymentType,
    recentCompanies,
  ]);

  function toggleOverlay(field: string) {
    setIsOverlayVisible(!isOverlayVisible);
    setActiveField(field);

    if (field === 'Most recent job title') {
      setRecentEmploymentType('');
      setRecentCompanies('');
    }
  }

  function handleOverlayClose(selectedItem: string, field: string) {
    if (field === 'Most recent job title') {
      setRecentJobTitle(selectedItem);
    } else if (field === 'Employment type') {
      setRecentEmploymentType(selectedItem);
    } else if (field === 'Most recent company') {
      setRecentCompanies(selectedItem);
    } else if (field === 'University or School') {
      setUniversityOrSchool(selectedItem);
    } else if (field === 'Degree') {
      setDegree(selectedItem);
    } else if (field === 'Specialization') {
      setSpecialization(selectedItem);
    }
    toggleOverlay('');
  }

  function handleClearInput() {
    setRecentJobTitle('');
    setRecentEmploymentType('');
    setRecentCompanies('');
    setUniversityOrSchool('');
    setDegree('');
    setSpecialization('');
  }

  const handleToggle = () => {
    setIsYes(!isYes);
    if (!isYes) {
      setRecentJobTitle('');
      setRecentEmploymentType('');
      setRecentCompanies('');
    }
  };

  useEffect(() => {
    if (!isYes) {
      setRecentJobTitle('');
      setRecentEmploymentType('');
      setRecentCompanies('');
    }
  }, [isYes]);

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
              <ToggleSwitch onToggle={handleToggle} />
            </View>
            {isYes ? (
              <View>
                <Text style={styles.universityText}>University or School*</Text>
                <TouchableOpacity
                  onPress={() => toggleOverlay('University or School')}>
                  <Text
                    style={[
                      styles.jobTitleText,
                      styles.underline,
                      !universityOrSchool && {color: 'gray'},
                    ]}>
                    {universityOrSchool
                      ? universityOrSchool
                      : 'University or School*'}
                  </Text>
                </TouchableOpacity>

                <View style={styles.degreeField}>
                  <Text style={styles.degreeText}>Degree*</Text>
                  <TouchableOpacity onPress={() => toggleOverlay('Degree')}>
                    <Text
                      style={[
                        styles.jobTitleText,
                        styles.underline,
                        !degree && {color: 'gray'},
                      ]}>
                      {degree ? degree : 'Degree*'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.specializationText}>Specialization*</Text>
                  <TouchableOpacity
                    onPress={() => toggleOverlay('Specialization')}>
                    <Text
                      style={[
                        styles.jobTitleText,
                        styles.underline,
                        !specialization && {color: 'gray'},
                      ]}>
                      {specialization ? specialization : 'Specialization*'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <>
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
                      {recentJobTitle
                        ? recentJobTitle
                        : 'Most recent job title*'}
                    </Text>
                  </TouchableOpacity>
                </View>
                {recentJobTitle && (
                  <>
                    <View style={styles.employmentType}>
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
                      <TouchableOpacity
                        onPress={() => toggleOverlay('Most recent company')}>
                        <Text
                          style={[
                            styles.jobTitleText,
                            styles.underline,
                            !recentCompanies && {color: 'gray'},
                          ]}>
                          {recentCompanies
                            ? recentCompanies
                            : 'Most recent company*'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </>
            )}
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="Next"
          onPress={() => navigation.navigate('NextScreen')}
          disabled={!isFormValid}
        />
      </View>
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
