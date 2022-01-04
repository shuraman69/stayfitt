import {FC} from "react";
import {Pressable, StyleSheet, Text, TouchableOpacity} from "react-native";
import {APP_GRAY, TOXIC_GREEN} from "../../../helpers/colors";

interface ButtonI {
 title: string
 transparent?: boolean
 onPress: () => void
}

export const Button: FC<ButtonI> = ({title, transparent = false, children, onPress}) => {
 const containerStyle = transparent ? [styles.container, {backgroundColor: 'transparent'}] : styles.container
 const textStyle = transparent ? [styles.text, {color:'rgba(255, 255, 255, 0.43)'}] : styles.text
 return (
  <TouchableOpacity style={containerStyle} onPress={onPress}>
   <Text style={textStyle}>
    {title}
   </Text>
   {children}
  </TouchableOpacity>
 )
}
const styles = StyleSheet.create({
 container: {
  backgroundColor: TOXIC_GREEN,
  maxHeight: 60,
  paddingVertical: 20,
  flexDirection: "row",
  justifyContent: "center",
  borderRadius: 8
 },
 text:{
  fontWeight:'600',
  fontSize:17,
  color:APP_GRAY
 }
})