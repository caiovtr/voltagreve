import { BottomTabNavigationProp, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { Perfil, Mensagem } from '../screens'

type TabParamList = {
    Perfil: undefined
    Mensagem: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, "Perfil">
export type TabTypes = {
    navigation: TabScreenNavigationProp
}

export function TabNavigation() {
    const Tab = createBottomTabNavigator<TabParamList>()
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: colors.secondary,
                tabBarActiveTintColor: colors.white,
                headerShown: false,
                tabBarInactiveBackgroundColor: colors.secondary,
                tabBarInactiveTintColor: colors.white,
            }}
        >
        <Tab.Screen name='Perfil' component={Perfil}
            options={{
                tabBarIcon: () => (
                    <Ionicons name="person" size={24} color={colors.white} />
                ),
            }}
        />
        <Tab.Screen name='Mensagem' component={Mensagem}
            options={{
                tabBarIcon: () => (
                    <AntDesign name="message1" size={24} color={colors.white} />
                ),
            }}
        />
       </Tab.Navigator>
    )
}