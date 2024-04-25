import React, {useRef, useState, useEffect} from 'react';
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
  Dimensions,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import LinkedInLogo from '../../assets/images/linkedIn_logo.png';
import CustomTextInput from '../../components/CustomTextInput';
import Button from '../../components/Button';
import GoogleLogo from '../../assets/images/google_logo.png';
import styles from './WelcomeScreen.styles';
import CarouselPhoto1 from '../../assets/images/CarouselPhoto1.png';
import CarouselPhoto2 from '../../assets/images/CarouselPhoto2.jpg';
import CarouselPhoto3 from '../../assets/images/CarouselPhoto3.jpg';
import {FlatList} from 'react-native';
import {Pagination} from 'react-native-snap-carousel';
import AppleLogo from '../../assets/images/apple_logo.png';

function WelcomeScreen() {
  const navigation = useNavigation<any>();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const flatListRef = useRef<FlatList<CarouselItems> | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({changed}: {changed: any}) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  const carouselData = [CarouselPhoto1, CarouselPhoto2, CarouselPhoto3];

  const viewConfigRef = {viewAreaCoveragePercentThreshold: 95};

  interface CarouselItems {
    title: string;
  }

  const renderItems = ({item, index}: {item: CarouselItems; index: number}) => {
    return (
      <TouchableOpacity
        onPress={() => console.log('clicked')}
        activeOpacity={1}>
        <Image source={carouselData[index]} style={styles.image} />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % carouselData.length;
      scrollToIndex(nextIndex);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({animated: true, index: index});
  };

  function onClickLegalAgreement() {
    Alert.alert('Legal agreement');
  }

  function openWelcomeScreen() {
    return navigation.navigate('WelcomeScreen');
  }

  function onClickAgreeAndJoin() {
    Alert.alert('Agree & Join');
  }

  function onClickContWithGoogle() {
    Alert.alert('Continue With Google');
  }

  function signInWithApple() {
    Alert.alert('Sign in with Apple');
  }

  function openSignInPage() {
    return navigation.navigate('SignIn');
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
          <View style={styles.linkedWrapper}>
            <Image
              source={LinkedInLogo}
              resizeMode="contain"
              style={styles.logoImg}
            />
          </View>
          <View style={{marginBottom: 30}}></View>
          <View style={styles.carouselContainer}>
            <FlatList
              data={carouselData}
              renderItem={renderItems}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              ref={flatListRef}
              style={styles.carousel}
              viewabilityConfig={viewConfigRef}
              onViewableItemsChanged={onViewRef.current}
            />
            <Pagination
              dotsLength={carouselData.length}
              activeDotIndex={currentIndex}
              containerStyle={styles.dotView}
              dotStyle={styles.circle}
            />
          </View>
          <View style={{marginBottom: 5}}></View>
          <Text>
            By clicking Agree & Join or Continue, you agree to LinkedIn's{' '}
            <Text style={styles.boldBlueText} onPress={onClickLegalAgreement}>
              User Agreement
            </Text>
            ,
            <Text style={styles.boldBlueText} onPress={onClickLegalAgreement}>
              {' '}
              Privacy Policy
            </Text>{' '}
            and
            <Text style={styles.boldBlueText} onPress={onClickLegalAgreement}>
              {' '}
              Cookie Policy
            </Text>
            .
          </Text>
          <View style={styles.agreeAndJoinWrapper}>
            <Button onPress={onClickAgreeAndJoin} title="Agree & Join" />
          </View>
          <View>
            <Button
              icon={GoogleLogo}
              onPress={onClickContWithGoogle}
              title="Continue with Google"
              transparent={true}
            />
          </View>
          <View style={styles.signInWithAppleWrapper}>
            <Button
              icon={AppleLogo}
              onPress={signInWithApple}
              title="Continue with Apple"
              transparent={true}
            />
          </View>
          <View style={styles.signInWrapper}>
            <Text style={styles.singInText} onPress={openSignInPage}>
              {' '}
              Sign in
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default WelcomeScreen;
