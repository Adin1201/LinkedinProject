import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Style {
    rootStyle: ViewStyle
    titleText: TextStyle,
}

export default StyleSheet.create<Style>({
    rootStyle: {},
  titleText: {}
})