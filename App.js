import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Home";
import LoginForm from "./LoginForm";
import Gallery from './Imagenes';

const Drawer = createDrawerNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Inicio'>
          <Drawer.Screen name='Inicio' component={Home}/>
          <Drawer.Screen name='Formulario' component={LoginForm}/>
          <Drawer.Screen name='Galería' component={Gallery}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}