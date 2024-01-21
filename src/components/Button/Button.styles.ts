import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  root: ViewStyle;
  rootSmall: ViewStyle;
  rootTransparent: ViewStyle;
  iconTitleWrapper: ViewStyle;
  titleText: TextStyle;
  titleTextSmall: TextStyle;
  titleTextTransparent: TextStyle;
  iconImage: ImageStyle;
}

export default StyleSheet.create<Style>({
  root: {
    backgroundColor: '#0A66C2',
    padding: 10,
    alignItems: 'center',
    borderRadius: 40,
  },
  rootSmall: {
    padding: 4.5,
    borderRadius: 40,
    width: 100,
    borderWidth: 1.5,
  },
  rootTransparent: {
    backgroundColor: '',
    borderWidth: 1,
    borderColor: '#6e6e6e',
  },
  iconTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: '600',
    fontSize: 19,
    color: 'white',
  },
  titleTextSmall: {
    fontSize: 16,
  },
  titleTextTransparent: {
    color: '#6e6e6e',
  },
  iconImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
