/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import Home from './pages/Home'
import Video from './pages/Video'
import Play from './pages/Play'
import Mine from './pages/Mine'
import { themeContext } from './context/index'
const Tab=createBottomTabNavigator()
const mapStateToProps=state=>{
  return{
    theme:state.theme.theme
  }
}

const App=(props) => {
  const Theme={
    dark:props.theme==="dark",
    ...DefaultTheme,
    colors:{
      card:props.theme==="dark"?"rgb(20,30,31)":"rgb(255,255,255)"
    }
  }
  
  
  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <themeContext.Provider value={{
        theme:props.theme,
        mainBackgroundColor:props.theme==="light"?"rgb(243,243,243)":"rgb(19,20,21)",
        itemBackgroundColor:props.theme==="light"?"#fff":"rgb(29,30,31)",
        elFontColor:props.theme==="light"?"#333333":"rgb(213,213,213)"
      }}>
          <NavigationContainer theme={Theme}>
            <Tab.Navigator screenOptions={({route})=>({
              tabBarIcon: ({ color }) => {
                let iconName;

                if (route.name === '首页') {
                  iconName ='home-outline'
                  
                } else if (route.name === '视频') {
                  iconName = 'videocam-outline'
                }else if(route.name==="放映厅"){
                  iconName = 'play-outline'
                }else if(route.name==="我的"){
                  iconName = 'person-outline'
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={25} color={color} />;
              },
              
              
            })} tabBarOptions={{ activeTintColor: 'red',
            inactiveTintColor: props.theme==="light"?'gray':"rgb(243,243,243)",}}>
              <Tab.Screen name="首页" component={Home} listeners={{tabPress:()=>StatusBar.setBarStyle("light-content",false)}}/>
              <Tab.Screen name="视频" component={Video} listeners={{tabPress:()=>StatusBar.setBarStyle("light-content",false)}}/>
              <Tab.Screen name="放映厅" component={Play} listeners={{tabPress:()=>StatusBar.setBarStyle("light-content",false)}}/>
              <Tab.Screen name="我的" component={Mine} listeners={{tabPress:()=>props.theme==="dark"?StatusBar.setBarStyle("light-content",false):StatusBar.setBarStyle("dark-content",false)}}/>
            </Tab.Navigator>
          </NavigationContainer>
        </themeContext.Provider>
    </>
  );
};

export default connect(mapStateToProps)(App);
