import {
  TextInputProps,
  View,
  TextInput,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';
import styles from './CustomTextInput.styles';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  style?: TextStyle;
  rootStyle?: ViewStyle;
}

const CustomTextInput = (props: Props) => {
  const {} = props;
  return (
    <View>
      <View style={[styles.inputWrapper, props.rootStyle]}>
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry}
          style={props.style}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;
