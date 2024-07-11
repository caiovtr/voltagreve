import { BottomTabNavigationProp, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Slide1, Slide2 } from '../../screens';
import { Entypo, Feather } from '@expo/vector-icons';

type MenuTabParam = {
    Slide1: undefined
    Slide2: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Slide1">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return(
        <Tab.Navigator>
            <Tab.Screen name="Atividades Pendentes" component={Slide1}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="slideshare" size={24} colors="black"/>
                    )
                }}
            />
            <Tab.Screen name="Atividades Feitas" component={Slide2}
                options={{
                    tabBarIcon: () => (
                        <Feather name="sliders" size={24} colors="black"/>
                    )
                }}
            />
       </Tab.Navigator>
    )
}