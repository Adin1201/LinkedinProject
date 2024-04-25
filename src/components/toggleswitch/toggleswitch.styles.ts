import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  toggle: ViewStyle;
  toggleActive: ViewStyle;
  indicator: ViewStyle;
  indicatorActive: ViewStyle;
  label: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggle: {
    width: 40,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    marginRight: 10,
  },
  toggleActive: {
    backgroundColor: '#ddd',
  },
  indicator: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#000',
    position: 'absolute',
  },
  indicatorActive: {
    backgroundColor: '#0073b1',
    transform: [{translateX: 20}],
  },
  label: {
    marginRight: 10,
    fontSize: 16,
    color: '#333',
  },
});
