import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  safeAreaView: ViewStyle;
  root: ViewStyle;
  forgotPasswordText: TextStyle;
  orSeparatorContainer: ViewStyle;
  separatorBorder: ViewStyle;
  orText: TextStyle;
  closeBtn: ImageStyle;
  linkedCloseWrapper: ViewStyle;
  singInText: TextStyle;
  joinLnText: TextStyle;
  logoImg: ImageStyle;
  contentContainer: ViewStyle;
  signInContainer: ViewStyle;
  signInWrapper: ViewStyle;
  passwordInput: ViewStyle;
  separatorAppleGoogle: ViewStyle;
}

export default StyleSheet.create<Style>({
  safeAreaView: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  root: {
    flex: 1,
    margin: 20,
  },
  signInContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  signInWrapper: {
    marginBottom: 30,
  },
  passwordInput: {
    marginTop: 10,
  },
  forgotPasswordText: {
    marginVertical: 20,
    color: '#0A66C2',
    fontWeight: 'bold',
  },
  orSeparatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 28,
  },
  separatorBorder: {
    flex: 1,
    borderWidth: 0.2,
    borderColor: '#e0e0e0',
  },
  orText: {
    fontWeight: '700',
    color: '#000',
    marginHorizontal: 12,
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
  separatorAppleGoogle: {
    marginTop: 19,
  },
  singInText: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
  },
  joinLnText: {
    color: '#0A66C2',
  },
  logoImg: {
    width: 100,
    height: 40,
  },
});
