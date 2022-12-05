import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import UsuarioCadastro from './src/pages/UsuarioCadastro';
import VacinaCadastro from './src/pages/VacinaCadastro';
import { useFonts } from 'expo-font';
import Logo from './assets/icon.svg'
import AlterarSenha from './src/pages/AlterarSenha';
import VacinasProximas from './src/pages/VacinasProximas';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import Logout from './src/component/Logout';
import loginSlice from './src/redux/loginSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Drawer = createDrawerNavigator()

import NavigatorC from './src/routes/routes';
export default function App() {

  const [token, setToken] = useState('')
  useEffect(() => {
    const toke2n = async () => {
      
        setToken(store.getState().login.token);
    }
   
    toke2n()
    console.log('ACHO QUE FOI', store.getState().login.token)
    

  }, [token]);


  const [fontsLoaded] = useFonts({
    'Averia-Libre': require('./assets/fonts/AveriaLibre-Regular.ttf'),
  });



  return fontsLoaded ? (
    <Provider store={store}>

      <NavigationContainer>

        <NavigatorC/>
      </NavigationContainer>
    </Provider >


  ) : null;
}