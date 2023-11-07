import {
  Image,
  ImageSourcePropType,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Button.styles';

interface Props {
  onPress: () => void;
  title: string;
  transparent?: boolean;
  icon?: ImageSourcePropType;
  style?: TextStyle;
}

const Button = (props: Props) => {
  return (
    <View
      style={
        props.transparent ? [styles.root, styles.rootTransparent] : styles.root
      }>
      <TouchableOpacity onPress={props.onPress} style={styles.iconTitleWrapper}>
        {props.icon ? (
          <Image
            style={styles.iconImage}
            source={props.icon}
            resizeMode="contain"></Image>
        ) : (
          <></>
        )}
        <Text
          style={
            props.transparent
              ? [styles.titleText, styles.titleTextTransparent]
              : styles.titleText
          }>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
