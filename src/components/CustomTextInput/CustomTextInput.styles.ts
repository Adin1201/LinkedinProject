import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  placeholder: TextStyle;
  inputWrapper: ViewStyle;
}

export default StyleSheet.create<Style>({
  placeholder: {},
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#6e6e6e',
    borderRadius: 4,
  },
});
