import { Text, TextStyle, TouchableOpacity, View } from "react-native";
import styles from './Button.styles';

interface Props {
    onPress: () => void;
    title: string;
    style?: TextStyle;
    type: "standard" | "transparent" ;
}

const Button = (props: Props) => {
    return (
        <View style={styles.rootStyle}>
            <TouchableOpacity onPress={props.onPress}>
                <Text>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;