import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import styles from '../toggleswitch/toggleswitch.styles';

interface ToggleSwitchProps {
  onToggle: (value: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({onToggle}) => {
  const [isYes, setIsYes] = useState(false);

  const toggleSwitch = () => {
    setIsYes(!isYes);
    onToggle(isYes);
  };

  return (
    <TouchableOpacity onPress={toggleSwitch} style={styles.container}>
      <Text style={styles.label}>{isYes ? 'Yes' : 'No'}</Text>
      <View style={[styles.toggle, isYes && styles.toggleActive]}>
        <View style={[styles.indicator, isYes && styles.indicatorActive]} />
      </View>
    </TouchableOpacity>
  );
};

export default ToggleSwitch;
