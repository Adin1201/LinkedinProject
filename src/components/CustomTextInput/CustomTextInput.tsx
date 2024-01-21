import {
  TextInputProps,
  View,
  TextInput,
  Text,
  ViewStyle,
  TextStyle,
  KeyboardTypeOptions,
} from 'react-native';
import styles from './CustomTextInput.styles';

interface Props extends TextInputProps {
  style?: TextStyle;
  rootStyle?: ViewStyle;
}

const CustomTextInput = (props: Props) => {
  const {} = props;
  return (
    <View>
      <View style={[styles.inputWrapper, props.rootStyle]}>
        <TextInput {...props} />
      </View>
    </View>
  );
};

export default CustomTextInput;
