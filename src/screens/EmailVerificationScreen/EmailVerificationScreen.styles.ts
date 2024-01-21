import {ImageStyle, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';

interface Style {
  safeAreaView: ViewStyle;
  root: ViewStyle;
  headerContainer: ViewStyle;
  closeBtn: ImageStyle;
  backArrow: ViewStyle;
  logoImg: ImageStyle;
  enterCode: TextStyle;
  inputVerificationCode: ViewStyle;
  contentContainer: ViewStyle;
  inputCodeContainer: ViewStyle;
  buttonContainer: ViewStyle;
  inputHeightSize: TextStyle;
  invalidInput: ViewStyle;
  invalidBorder: ViewStyle;
  joinNowButton: ViewStyle;
  signInText: TextStyle;
  signInWrapper: ViewStyle;
  changeText: TextStyle;
  resendCode: TextStyle;
  emailAccess: TextStyle;
}

export default StyleSheet.create<Style>({
  safeAreaView: {
    flex: 1,
  },
  root: {
    flex: 1,
    margin: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signInWrapper: {
    marginLeft: 40,
  },
  logoImg: {
    width: 100,
    height: 40,
  },
  contentContainer: {
    flex: 1,
  },
  closeBtn: {
    width: 24,
    height: 24,
  },
  backArrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  enterCode: {
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
  inputVerificationCode: {
    marginTop: 22,
    marginBottom: 12,
  },
  inputCodeContainer: {
    flex: 0.75,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 8,
    marginBottom: 15,
  },
  inputHeightSize: {
    height: 50,
  },
  invalidInput: {
    color: 'red',
  },
  invalidBorder: {
    borderColor: 'red',
  },
  joinNowButton: {
    borderColor: 'green',
  },
  signInText: {
    fontWeight: '600',
    fontSize: 17,
  },
  changeText: {
    fontWeight: '500',
    color: '#0A66C2',
  },
  resendCode: {
    marginTop: 8,
    fontWeight: '500',
    color: '#0A66C2',
  },
  emailAccess: {
    marginTop: 10,
    fontWeight: '500',
    color: '#0A66C2',
  },
});
