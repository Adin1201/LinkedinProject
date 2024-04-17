import React, {useState} from 'react';
import {
  SafeAreaView,
  Image,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import LinkedInLogo from '../../assets/images/linkedIn_logo.png';
import styles from './AddLocationScreen.styles';
import Button from '../../components/Button';

const citiesInBiH = ['Sarajevo', 'Banja Luka', 'Tuzla', 'Zenica', 'Mostar'];

function AddLocationScreen() {
  const navigation = useNavigation<any>();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [suggestedCities, setSuggestedCities] = useState<string[]>([]);

  const handleInputChange = (text: string) => {
    setSearchQuery(text);
    const filteredCities = citiesInBiH.filter(city =>
      city.toLowerCase().includes(text.toLowerCase()),
    );
    setSuggestedCities(filteredCities);
  };

  const handleCitySelect = (city: string) => {
    setSearchQuery(city);
    setSuggestedCities([]);
  };

  function nextButton() {
    Alert.alert('JobTitleScreen');
    return navigation.navigate('JobTitle');
  }

  return (
    <SafeAreaView style={[backgroundStyle, styles.safeAreaView]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={styles.root}>
            <View style={styles.linkedLogoImg}>
              <Image
                source={LinkedInLogo}
                resizeMode="contain"
                style={styles.logoImg}
              />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.confirmLocationText}>
                Confirm your location{' '}
              </Text>
              <Text style={styles.peopleJobsNewsText}>
                See people, jobs, and news in your area.
              </Text>
              <Text style={styles.locationText}> Location* </Text>
              <TextInput
                style={styles.input}
                value={searchQuery}
                onChangeText={handleInputChange}
                placeholder="Enter city..."
              />
              {/* Prikaz predloženih gradova */}
              {suggestedCities.length > 0 && (
                <FlatList
                  data={suggestedCities}
                  renderItem={({item}) => (
                    <TouchableOpacity onPress={() => handleCitySelect(item)}>
                      <Text style={styles.suggestedCity}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              )}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.nextButtonContainer}>
        <Button onPress={nextButton} title="Next" />
      </View>
    </SafeAreaView>
  );
}

export default AddLocationScreen;
