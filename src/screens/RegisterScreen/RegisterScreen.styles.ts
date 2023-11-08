import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  safeAreaView: ViewStyle;
  root: ViewStyle;
  linkedCloseWrapper: ViewStyle;
  closeBtn: ImageStyle;
  logoImg: ImageStyle;
  singInText: TextStyle;
  joinLnText: TextStyle;
  boldBlueText: TextStyle;
  separatorContainer: ViewStyle;
  separatorBorder: ViewStyle;
  orText: TextStyle;
  orSeparatorContainer: ViewStyle;
  content: ViewStyle;
}

export default StyleSheet.create<Style>({
  safeAreaView: {
    flex: 1,
  },
  root: {
    flex: 1,
    margin: 20,
  },
  linkedCloseWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeBtn: {
    width: 24,
    height: 24,
  },
  logoImg: {
    width: 100,
    height: 40,
  },
  singInText: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
  },
  joinLnText: {
    color: '#0A66C2',
  },
  boldBlueText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  separatorContainer: {
    marginVertical: 10,
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
  orSeparatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 28,
  },
  content: {
    marginTop: 30,
  },
});
