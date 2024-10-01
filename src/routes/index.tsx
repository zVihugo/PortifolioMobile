import { NavigationContainer } from "@react-navigation/native";
import {MyTabs} from './bottomTabs.routes';

export function Routes(){
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}