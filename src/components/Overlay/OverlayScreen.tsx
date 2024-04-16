import React, {useState} from 'react';
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

const OverlayScreen: React.FC<Props> = ({
  visible,
  onClose,
  onJobSelect,
  onClearInput,
  field,
}) => {
  const fieldTitles: {[key: string]: string} = {
    'Most recent job title': 'Most recent job title',
    'Employment type': 'Employment Type',
    'Most recent company': 'Most Recent Companies',
  };

  const initialActiveField = field || Object.keys(fieldTitles)[0];

  const [state, setState] = useState<State>({
    jobTitle: '',
    suggestedJobs: [],
    activeField: initialActiveField,
  });

  const fieldSuggestions: {[key: string]: string[]} = {
    'Most recent job title': mostRecentJobTitle,
    'Employment type': employmentTypes,
    'Most recent company': recentCompanies,
  };

  const filterSuggestions = (text: string) => {
    console.log('Active field:', state.activeField);
    console.log(
      'Field suggestions:',
      fieldSuggestions[state.activeField || ''],
    );
    const suggestions = fieldSuggestions[state.activeField || ''] || [];
    console.log('Suggestions:', suggestions);
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
          <View style={styles.jobTitlesContainer}>
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
                onPress={() => onJobSelect(item, state.activeField!)}>
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
