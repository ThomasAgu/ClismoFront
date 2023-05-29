import { StatusBar } from 'expo-status-bar';
//redux code
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import rootReducer from './store/reducers';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//tipos de ruta para navegacion
import { RootStackParamList } from './src/Routes/navegacion'


import Main from './src/components/Main';
import Login from './src/components/screens/Login';
import Register from './src/components/screens/Register';


const store = createStore(rootReducer);
//for routing
const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

