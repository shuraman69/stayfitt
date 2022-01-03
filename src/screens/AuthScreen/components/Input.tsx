import {StyleSheet, TextInput, TextInputIOSProps, View, ViewStyle} from "react-native";
import {windowWidth} from "../../../helpers/constants";
import {FC} from "react";
import {APP_GRAY, PLACEHOLDER_WHITE} from "../../../helpers/colors";

interface InputI {
 placeholder?: string
 onChange: (value: string, name: string) => void
 value: string
 name: string
 containerStyles?: ViewStyle
 secureText?: boolean
 type?: TextInputIOSProps['textContentType']
}

export const Input: FC<InputI> = (
 {
  placeholder = '',
  containerStyles,
  children,
  type = 'none',
  onChange,
  secureText = false,
  value,
  name
 }) => {
 return (
  <View style={[styles.container, containerStyles]}>
   <TextInput
    value={value}
    textContentType={type}
    onChangeText={(nextValue) => onChange(nextValue, name)}
    placeholder={placeholder}
    secureTextEntry={secureText}
    placeholderTextColor={PLACEHOLDER_WHITE}
    style={styles.input}
   />
   {children}
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  position: 'relative'
 },
 input: {
  height: 46,
  width: windowWidth,
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  borderRadius: 8,
  padding: 12
 }
})