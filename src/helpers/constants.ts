import {Dimensions, Platform} from "react-native";

export const windowHeight = Dimensions.get('window').height
export const windowWidth = Dimensions.get('window').width
export const isIos = Platform.OS === "ios"