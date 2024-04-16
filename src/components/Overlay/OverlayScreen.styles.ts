import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  overlay: ViewStyle;
  container: ViewStyle;
  title: TextStyle;
  jobTitles: ViewStyle;
  backArrow: ImageStyle;
  arrowTitleWrapper: ViewStyle;
  jobTitlesContainer: ViewStyle;
  input: ViewStyle;
  jobTitle: TextStyle;
  closeBtn: ImageStyle;
  employmentTypeContainer: ViewStyle;
  recentCompaniesContainer: ViewStyle;
  fieldsContainer: ViewStyle;
  fieldTitle: ViewStyle;
  suggestedJob: ViewStyle;
  suggestedJobsContainer: ViewStyle;
}

export default StyleSheet.create<Style>({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  arrowTitleWrapper: {
    flexDirection: 'row',
    padding: 15,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 6,
    width: '100%',
    backgroundColor: '#fff',
  },
  backArrow: {
    width: 24,
    height: 24,
    marginRight: 40,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
  jobTitlesContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  input: {
    fontSize: 20,
    padding: 3,
    marginLeft: 10,
  },
  jobTitles: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
  },
  jobTitle: {
    padding: 15,
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    width: '100%',
  },
  closeBtn: {
    marginRight: 10,
    width: 22,
    height: 22,
  },
  recentCompaniesContainer: {
    marginBottom: 20,
  },
  employmentTypeContainer: {
    marginBottom: 20,
  },
  fieldsContainer: {
    marginTop: 20,
  },
  fieldTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  suggestedJob: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  suggestedJobsContainer: {
    marginTop: 10,
    maxHeight: 150,
  },
});
