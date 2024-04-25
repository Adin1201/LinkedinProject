import {ImageStyle, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';

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
  universityText: TextStyle;
  degreeText: TextStyle;
  specializationText: TextStyle;
  degreeField: ViewStyle;
  buttonContainer: ViewStyle;
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
    marginTop: 40,
  },
  employmentTypeTitle: {
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
  },
  mostRecentCompany: {
    marginTop: 40,
  },
  mostRecentCompanyTitle: {
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
  },
  universityText: {
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
  },
  degreeText: {
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
  },
  specializationText: {
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
  },
  degreeField: {
    marginTop: 40,
    marginBottom: 40,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20, // Dodatni prostor
  },
});
