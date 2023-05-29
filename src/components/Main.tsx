import { StyleSheet, Text, View, TextInput, SafeAreaView, Button} from 'react-native'
import React, {useState} from 'react'
import { RouteProp,useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../Routes/navegacion';



const Main = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    //
    const navigation = useNavigation<MainScreenNavigationProp>();


    type MainScreenRouteProp = RouteProp<RootStackParamList, 'Main'>;
    type MainScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

    type Props = {
      route: MainScreenRouteProp;
      navigation: MainScreenNavigationProp;
    };

  return (
    <SafeAreaView style={styles.container}>
        
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUserName}
        value={userName}
        placeholder="username"
        keyboardType="default"
      />

    <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
        keyboardType="visible-password"
        secureTextEntry={true}
      />

    <Button title="Login" onPress={()=> navigation.navigate("Login")} />
    <Button title="Registrarse" onPress={()=> {navigation.navigate("Register")}} />

    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCF7F8',
     
      justifyContent: 'center',
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });
  