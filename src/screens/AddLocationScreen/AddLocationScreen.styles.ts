import {
  Button,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface Style {
  safeAreaView: ViewStyle;
  root: ViewStyle;
  logoImg: ImageStyle;
  contentContainer: ViewStyle;
  linkedLogoImg: ViewStyle;
  confirmLocationText: TextStyle;
  peopleJobsNewsText: TextStyle;
  textWrapper: ViewStyle;
  locationText: TextStyle;
  errorText: TextStyle;
  input: TextStyle;
  suggestedCity: TextStyle;
  nextButtonContainer: ViewStyle;
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
  logoImg: {
    width: 100,
    height: 40,
  },
  linkedLogoImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  confirmLocationText: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
    color: 'black',
  },
  peopleJobsNewsText: {
    color: 'grey',
    marginBottom: 20,
  },
  textWrapper: {
    marginTop: 40,
  },
  locationText: {
    fontSize: 15,
    color: 'black',
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  suggestedCity: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  nextButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
