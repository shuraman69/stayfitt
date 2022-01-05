import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {EmptyScreen} from "./components/EmptyScreen";
import {APP_BLACK, ICON_GRAY, TOXIC_GREEN, WHITE} from "../../helpers/colors";
import {Lightning} from "./components/svg/Lightning";
import React, {cloneElement} from "react";
import {CHALLENGES, TAB_1, TAB_2, TAB_3, TAB_4} from "../../helpers/screens";
import {Challenges} from "./components/svg/Challenges";
import {Ratings} from "./components/svg/Ratings";
import {Magazine} from "./components/svg/Magazine";
import {Settings} from "./components/svg/Settings";
import {ChallengesScreen} from "../ChallengesScreen/ChallengesScreen";


const TabStack = createBottomTabNavigator();
export const ContentScreen = () => {
 const getColor = (props: { focused: boolean }) => props.focused ? TOXIC_GREEN : ICON_GRAY
 const getOptions = (component: React.ReactElement) => {
  return {
   tabBarIcon: (props: { focused: boolean }) => cloneElement(component, {color: getColor(props)})
  }
 }
 return (
  <TabStack.Navigator screenOptions={{
   tabBarActiveTintColor: TOXIC_GREEN,
   tabBarStyle: {backgroundColor: APP_BLACK},
   headerStyle: {backgroundColor: APP_BLACK},
   headerTitleStyle: {
    color: WHITE,
    fontWeight: '600'
   }
  }}
  >
   <TabStack.Screen
    options={{...getOptions(<Lightning/>), title: 'Активность'}}
    name={TAB_1}
    component={EmptyScreen}
   />
   <TabStack.Screen
    options={{...getOptions(<Challenges/>), title: 'Челленджи'}}
    name={CHALLENGES}
    component={ChallengesScreen}
   />
   <TabStack.Screen
    options={{...getOptions(<Ratings/>), title: 'Рейтинги'}}
    name={TAB_2}
    component={EmptyScreen}
   />
   <TabStack.Screen
    options={{...getOptions(<Magazine/>), title: 'Журнал'}}
    name={TAB_3} component={EmptyScreen}/>
   <TabStack.Screen
    options={{...getOptions(<Settings/>), title: 'Настройки'}}
    name={TAB_4} component={EmptyScreen}/>
  </TabStack.Navigator>
 )
}


