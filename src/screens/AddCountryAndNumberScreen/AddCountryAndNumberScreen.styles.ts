import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  safeAreaView: ViewStyle;
  root: ViewStyle;
  closeBtn: ImageStyle;
  linkedCloseWrapper: ViewStyle;
  singInText: TextStyle;
  logoImg: ImageStyle;
  addNameText: TextStyle;
  inputInfoWrapper: ViewStyle;
  contentContainer: ViewStyle;
  inputInfoContainer: ViewStyle;
  buttonContainer: ViewStyle;
  inputHeightSize: TextStyle;
  securityCheckText: TextStyle;
  verificationText: TextStyle;
  learnMoreText: TextStyle;
  selectCountryField: ViewStyle;
}

export default StyleSheet.create<Style>({
  safeAreaView: {
    flex: 1,
  },
  root: {
    flex: 1,
    margin: 20,
  },
  contentContainer: {
    flex: 1,
  },
  closeBtn: {
    width: 24,
    height: 24,
  },
  linkedCloseWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  singInText: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
  },
  logoImg: {
    width: 100,
    height: 40,
  },
  addNameText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
  inputInfoWrapper: {
    marginTop: 22,
    marginBottom: 12,
  },
  inputInfoContainer: {
    flex: 0.55,
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  inputHeightSize: {
    paddingVertical: 5,
    marginTop: 1,
    height: 30,
  },
  securityCheckText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  },
  verificationText: {
    fontSize: 13,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 17,
  },
  learnMoreText: {
    color: '#0A66C2',
    fontWeight: 'bold',
  },
  selectCountryField: {
    borderWidth: 1,
    borderColor: '#6e6e6e',
    borderRadius: 4,
  },
});
