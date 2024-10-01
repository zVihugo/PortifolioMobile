import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainScreen } from "../screens/mainScreen/MainScreen";
import { SkillScreen } from "../screens/skillScreen/SkillScreen";

import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={"white"} size={size} />
          )
          ,
            tabBarStyle: {
                backgroundColor: "#000000",
            }
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SkillScreen} 
        options = {{
            title: "",
            headerShown: false,
            tabBarIcon: ({color, size}) => (
                <Ionicons name="book" color={"white"} size={size} />
            ),
            tabBarStyle: {
                backgroundColor: "#000000",
            }
        }}
       />
       
    </Tab.Navigator>
  );
};
