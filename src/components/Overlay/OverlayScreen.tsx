import React, {useState, useEffect} from 'react';
import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import styles from '../Overlay/OverlayScreen.styles';
import backArrow from '../../assets/images/backArrow.png';
import CloseButton from '../../assets/images/close_btn.png';
import CustomTextInput from '../../components/CustomTextInput';

interface Props {
  visible: boolean;
  onClose: () => void;
  onJobSelect: (jobTitle: string, field: string) => void;
  onClearInput: () => void;
  title?: string;
  field: string;
}

interface State {
  jobTitle: string;
  suggestedJobs: string[];
  activeField: string | null;
  recentJobTitle: string;
  recentEmploymentType: string;
  recentCompanies: string;
  universityOrSchool: string;
  degree: string;
  specialization: string;
}

const mostRecentJobTitle = [
  'Software Engineer',
  'Web Developer',
  'Mobile Developer',
  'QA Engineer',
  'Project Manager',
];

const employmentTypes = [
  'Full-time',
  'Part-time',
  'Contract',
  'Freelance',
  'Internship',
];

const recentCompanies = ['Google', 'Facebook', 'Amazon', 'Microsoft', 'Apple'];

const universityOrSchool = [
  'Burch',
  'FIT',
  'Faculty of Politehnic',
  'CEPS',
  'ETF',
];

const degree = [
  'Bachelor of Science (B.S.)',
  'Bachelor of Arts (B.A.):',
  'Doctor of Philosophy (Ph.D.)',
  'Master of Business Administration (MBA):',
  'Juris Doctor (J.D.)',
];

const specialization = [
  'Data Science',
  'Cybersecurity',
  'Pediatrics',
  'Environmental Engineering',
  'Digital Marketing',
];

const OverlayScreen: React.FC<Props> = ({
  visible,
  onClose,
  onJobSelect,
  onClearInput,
  field,
}) => {
  const fieldTitles: {[key: string]: string} = {
    'Most recent job title': 'Most Recent Job Title',
    'Employment type': 'Employment Type',
    'Most recent company': 'Most Recent Companies',
    'University or School': 'University or School',
    Degree: 'Degree',
    Specialization: 'Specialization',
  };

  const [state, setState] = useState<State>({
    jobTitle: '',
    suggestedJobs: [],
    activeField: null,
    recentJobTitle: '',
    recentEmploymentType: '',
    recentCompanies: '',
    universityOrSchool: '',
    degree: '',
    specialization: '',
  });

  useEffect(() => {
    console.log('Aktivno polje:', field);

    if (field) {
      setState(prevState => ({
        ...prevState,
        activeField: field,
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        activeField: null,
      }));
    }
  }, [field]);

  const fieldSuggestions: {[key: string]: string[]} = {
    'Most recent job title': mostRecentJobTitle,
    'Employment type': employmentTypes,
    'Most recent company': recentCompanies,
    'University or School': universityOrSchool,
    Degree: degree,
    Specialization: specialization,
  };

  const filterSuggestions = (text: string) => {
    const suggestions = fieldSuggestions[state.activeField || ''] || [];
    const filtered = suggestions.filter(item =>
      item.toLowerCase().includes(text.toLowerCase()),
    );

    setState(prevState => ({
      ...prevState,
      jobTitle: text,
      suggestedJobs: text.trim() !== '' ? filtered : [],
    }));
  };

  const handleSearchChange = (text: string) => {
    filterSuggestions(text);
  };

  useEffect(() => {
    if (state.activeField !== 'Most recent job title') {
      setState(prevState => ({
        ...prevState,
        jobTitle: '',
        suggestedJobs: [],
      }));
    }
  }, [state.activeField]);

  console.log('Aktivno polje prilikom renderovanja:', state.activeField);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.arrowTitleWrapper}>
            <TouchableOpacity onPress={onClose}>
              <Image
                source={backArrow}
                resizeMode="contain"
                style={styles.backArrow}
              />
            </TouchableOpacity>
            <Text style={styles.title}>{field ? fieldTitles[field] : ''}</Text>
          </View>
          <View style={styles.suggestionsContainer}>
            <CustomTextInput
              noBorder
              value={state.jobTitle}
              placeholder="Search..."
              onChangeText={handleSearchChange}
              style={styles.input}
            />
            <TouchableOpacity onPress={onClearInput}>
              <Image source={CloseButton} style={styles.closeBtn} />
            </TouchableOpacity>
          </View>
          <View style={styles.jobTitles}>
            {state.suggestedJobs.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setState(prevState => ({
                    ...prevState,
                    [state.activeField || '']: item,
                  }));
                  onJobSelect(item, state.activeField!);
                  onClose();
                }}>
                <Text style={styles.jobTitle}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default OverlayScreen;
