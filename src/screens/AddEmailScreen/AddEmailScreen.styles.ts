import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  safeAreaView: ViewStyle;
  root: ViewStyle;
  closeBtn: ImageStyle;
  backArrow: ViewStyle;
  singInText: TextStyle;
  logoImg: ImageStyle;
  addEmail: TextStyle;
  inputEmailWrapper: ViewStyle;
  contentContainer: ViewStyle;
  inputEmailContainer: ViewStyle;
  buttonContainer: ViewStyle;
  inputHeightSize: TextStyle;
  invalidInput: ViewStyle;
  invalidBorder: ViewStyle;
  closeBtnContainer: ViewStyle;
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
  backArrow: {
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
    width: 30,
    height: 30,
  },
  addEmail: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
  inputEmailWrapper: {
    marginTop: 22,
    marginBottom: 12,
  },
  inputEmailContainer: {
    flex: 0.45,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 8,
  },
  inputHeightSize: {
    height: 40,
  },
  invalidInput: {
    color: 'red',
  },
  invalidBorder: {
    borderColor: 'red',
  },
  closeBtnContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
