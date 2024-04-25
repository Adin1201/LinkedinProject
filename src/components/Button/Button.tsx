import {
  Image,
  ImageSourcePropType,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './Button.styles';

interface Props {
  onPress: () => void;
  title: string;
  transparent?: boolean;
  icon?: ImageSourcePropType;
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
  styleTitle?: TextStyle;
  disabled?: boolean;
}

const Button = (props: Props) => {
  const isSmallSize = props.size === 'small';

  const buttonStyle = props.disabled
    ? [styles.root, styles.disabled, props.style]
    : [styles.root, isSmallSize ? styles.rootSmall : null, props.style];

  const titleStyle = props.disabled
    ? [styles.titleText, styles.disabledText]
    : [
        styles.titleText,
        isSmallSize ? styles.titleTextSmall : null,
        props.styleTitle,
      ];

  return (
    <TouchableOpacity
      onPress={props.disabled ? undefined : props.onPress}
      style={buttonStyle}
      activeOpacity={props.disabled ? 1 : 0.7}>
      <Text style={titleStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
