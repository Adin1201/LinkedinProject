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
}

const Button = (props: Props) => {
  const isSmallSize = props.size === 'small';
  return (
    <View
      style={
        props.transparent
          ? [
              styles.root,
              styles.rootTransparent,
              isSmallSize ? styles.rootSmall : null,
              props.style,
            ]
          : [styles.root, isSmallSize ? styles.rootSmall : null, props.style]
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
              ? [
                  styles.titleText,
                  styles.titleTextTransparent,
                  isSmallSize ? styles.titleTextSmall : null,
                  props.styleTitle,
                ]
              : [
                  styles.titleText,
                  isSmallSize ? styles.titleTextSmall : null,
                  props.styleTitle,
                ]
          }>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
