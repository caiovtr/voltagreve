import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { LoginNavigation } from "./stack.navigation";
import { MenuTabs } from "./tab.navigation"

export function Navigation() {
    return (
        <NavigationContainer>
            <LoginNavigation />
        </NavigationContainer>
    )
}