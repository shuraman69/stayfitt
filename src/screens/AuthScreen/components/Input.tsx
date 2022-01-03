import {StyleSheet, TextInput, TextInputIOSProps, View} from "react-native";
import {windowWidth} from "../../../helpers/constants";
import {FC} from "react";
import {APP_GRAY, PLACEHOLDER_WHITE} from "../../../helpers/colors";

interface InputI {
 placeholder?: string
 onChange: (value: string, name: string) => void
 value: string
 name: string
 type?: TextInputIOSProps['textContentType']
}

export const Input: FC<InputI> = (
 {
  placeholder = '',
  type = 'text',
  onChange,
  value,
  name
 }) => {
 return (
  <View style={styles.container}>
   <TextInput
    value={value}
    textContentType='password'
    onChangeText={(nextValue) => onChange(nextValue, name)}
    placeholder={placeholder}
    placeholderTextColor={PLACEHOLDER_WHITE}
    style={styles.input}
   />
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