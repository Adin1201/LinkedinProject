import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  safeAreaView: ViewStyle;
  root: ViewStyle;
  linkedWrapper: ViewStyle;
  logoImg: ImageStyle;
  singInText: TextStyle;
  boldBlueText: TextStyle;
  image: ImageStyle;
  carousel: ViewStyle;
  dotView: ViewStyle;
  circle: ViewStyle;
  carouselContainer: ViewStyle;
  imageFooter: ImageStyle;
  imageText: TextStyle;
  boldText: TextStyle;
  signInWrapper: ViewStyle;
  agreeAndJoinWrapper: ViewStyle;
  signInWithAppleWrapper: ViewStyle;
  contentContainer: ViewStyle;
}

export default StyleSheet.create<Style>({
  safeAreaView: {
    flex: 1,
  },
  root: {
    flex: 1,
    margin: 20,
  },
  linkedWrapper: {
    flexDirection: 'row',
  },
  logoImg: {
    width: 90,
    height: 30,
  },
  singInText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    color: '#0A66C2',
    fontWeight: '500',
  },
  boldBlueText: {
    fontWeight: 'bold',
    color: '#0A66C2',
  },
  carouselContainer: {
    alignItems: 'center',
    height: 350,
  },
  image: {
    width: 355,
    height: 280,
    resizeMode: 'cover',
  },
  carousel: {
    maxHeight: 300,
    maxWidth: 300,
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    width: 10,
    height: 10,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 25,
    margin: 10,
  },
  imageFooter: {
    alignItems: 'center',
    marginTop: 10,
  },
  imageText: {
    fontSize: 16,
    color: 'black',
  },
  boldText: {
    fontWeight: 'bold',
  },
  signInWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  agreeAndJoinWrapper: {
    marginTop: 15,
    marginBottom: 10,
  },
  signInWithAppleWrapper: {
    marginTop: 10,
    marginBottom: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
