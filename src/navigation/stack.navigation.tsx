import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { TabNavigation } from './tab.navigation';

type StackParamList = {
    Tab: undefined
}
type ScreenNavigationProp = StackNavigationProp<StackParamList, 'Login'>
export type StackTypes = {
    navigation: StackScreenNavigationProp
}
export function StackNavigation() {
    const Stack = createStackNavigator<StackParamList>()
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.secondary},
            headerTintColor: colors.white,
            drawerStyle: {
                backgroundColor: colors.secondary,
            },
            drawerActiveTintColor: colors.white,
            drawerInactineTintColor: colors.white
        }}>
            <Stack.Screen name='Tab' component={TabNavigation}
                options={{
                    drawerLabel: 'Perfil',
                    headerTitle: 'Perfil',
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.white} />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}