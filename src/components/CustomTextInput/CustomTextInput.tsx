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
  noBorder?: boolean;
}

const CustomTextInput = (props: Props) => {
  const {noBorder} = props;
  return (
    <View>
      <View
        style={[
          styles.inputWrapper,
          !noBorder && styles.defaultBorder,
          props.rootStyle,
        ]}>
        <TextInput {...props} />
      </View>
    </View>
  );
};

export default CustomTextInput;
