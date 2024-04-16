import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  placeholder: TextStyle;
  inputWrapper: ViewStyle;
  defaultBorder: ViewStyle;
}

export default StyleSheet.create<Style>({
  placeholder: {},
  inputWrapper: {
    borderRadius: 4,
  },
  defaultBorder: {
    borderWidth: 1,
    borderColor: '#6e6e6e',
  },
});
