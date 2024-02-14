import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CountryPicker, CountryItem} from 'react-native-country-codes-picker';
import styles from '@components/Dropdown/Dropdown.styles';

export default function App() {
  const [show, setShow] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryItem | null>(
    null,
  );

  useEffect(() => {
    // Ova funkcija će se pozvati nakon svakog ažuriranja stanja selectedCountry
    console.log('Selected Country:', selectedCountry);
  }, [selectedCountry]);

  return (
    <View>
      <TouchableOpacity onPress={() => setShow(true)}>
        <Text>
          {selectedCountry
            ? `${selectedCountry.name.en} (${selectedCountry.dial_code})`
            : 'Select a country'}
        </Text>
        <TouchableOpacity onPress={() => setShow(false)}></TouchableOpacity>
      </TouchableOpacity>
      <CountryPicker
        show={show}
        pickerButtonOnPress={item => {
          setSelectedCountry(item);
          setShow(false);
        }}
        lang={''}
      />
    </View>
  );
}
