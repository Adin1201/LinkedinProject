import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import styles from '../toggleswitch/toggleswitch.styles';

const toggleswitch = () => {
  const [isYes, setIsYes] = useState(false);

  const toggleSwitch = () => {
    setIsYes(!isYes);
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

export default toggleswitch;
