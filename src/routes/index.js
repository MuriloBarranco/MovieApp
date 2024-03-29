import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import StackRoutes from './stacksRoutes';
import Movies from '../pages/Movies';

const Drawer = createDrawerNavigator();

function Routes(){
    return(
        <Drawer.Navigator
            screenOptions={{ 
                headerShown: false,
                drawerStyle:{
                    backgroundColor:'#090A0E',
                    padding:20,
                },

                drawerActiveBackgroundColor: '#E72F49',
                drawerActiveTintColor:'#FFF',
                drawerInactiveTintColor:'#FFF'
            }}
        
        
        >
            <Drawer.Screen 
            name="HomeDrawer" 
            component={StackRoutes} 
            options={{
                title:'Home',
                drawerIcon: ({ focused, size, color }) => (
                    <Icons  
                    name={focused ? 'movie-open' : 'movie-outline'}
                    size={size}
                    color={color}
                    />
                )
            }}
            />
            <Drawer.Screen 
            name="Movies" 
            component={Movies} 
            options={{
                title: "Meus filmes",

                drawerIcon: ({ focused, size, color }) => (
                    <Icons  
                    name={focused ? 'archive' : 'archive-outline'}
                    size={size}
                    color={color}
                    />
                )
            }}
            />
        </Drawer.Navigator>
    )
}

export default Routes;