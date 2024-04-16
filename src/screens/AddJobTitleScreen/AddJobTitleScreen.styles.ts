import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  safeAreaView: ViewStyle;
  root: ViewStyle;
  linkedInLogo: ViewStyle;
  descriptionText: TextStyle;
  logoImg: ImageStyle;
  contentContainer: ViewStyle;
  jobDescriptionContainer: ViewStyle;
  imStudentTextWrapper: ViewStyle;
  imStudentText: TextStyle;
  jobTitleText: TextStyle;
  underline: TextStyle;
  recentJobTitle: TextStyle;
  employmentType: ViewStyle;
  mostRecentCompany: ViewStyle;
  mostRecentJobTitle: TextStyle;
  employmentTypeTitle: TextStyle;
  mostRecentCompanyTitle: TextStyle;
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
    width: 85,
    height: 35,
  },
  jobDescriptionContainer: {
    marginBottom: 30,
  },
  linkedInLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 24,
    color: 'black',
    fontWeight: '700',
  },
  imStudentTextWrapper: {
    marginTop: 30,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imStudentText: {
    color: 'black',
    fontSize: 16,
  },
  jobTitleText: {
    color: 'black',
    fontSize: 16,
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  mostRecentJobTitle: {
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
  },
  recentJobTitle: {
    color: 'black',
  },
  employmentType: {
    marginTop: 30,
  },
  employmentTypeTitle: {
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
  },
  mostRecentCompany: {
    marginTop: 30,
  },

  mostRecentCompanyTitle: {
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
  },
});
