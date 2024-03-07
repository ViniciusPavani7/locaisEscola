import * as React from 'react';
import { Button, View, Text, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg' }}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', resizeMode: 'cover' }}
    >
      <View style={{ backgroundColor:   '#fff', padding: 20, borderRadius: 10 }}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#333', color:'black' }}>
          5 Lugares favoritos do SENAI-Sumaré
        </Text>
        <Button
          title="Jardim com árvores onde vemos os macacos"
          onPress={() => navigation.navigate('Jardim')}
        />
        <Button
          title="Mesa externa"
          onPress={() => navigation.navigate('Mesa')}
        />

        <Button
          title="Bancos externos"
          onPress={() => navigation.navigate('Bancos')}
        />

        <Button
          title="Biblioteca"
          onPress={() => navigation.navigate('Biblioteca')}
        />

        <Button
          title="Saida de emergencia"
          onPress={() => navigation.navigate('Saida')}
        />

      </View>
    </ImageBackground>
  );
}

function JardimScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

<Text style={{ fontSize: 25, fontWeight: 'bold', color: '#333' }}>
                   Escolhemos essa parte porque é legal, bonita e os macacos são muitos legais!
                  </Text>
                  
      <Image
       source={require('./5.jpg')}
        style={{ width: 800, height:600  }}
      />


    </View>
  );
}

function MesaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#333' }}>
                  Escolhemos a mesa pq é um lugar confortavel e com muito ar livre para descansarmos!
                  </Text>
      <Image
          source={require('./4.jpg')}
          style={{ width: 800, height:600  }}
      />
    </View>
  );
}

function BancosScreen() {
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 2, fontWeight: 'bold', color: '#333' }}>
                   Os Bancos são um dos melhores lugares da escola para se descansar, problema é só o calor, as vezes.
                  </Text>
      <Image
        source={require('./2.jpg')}
        style={{ width: 800, height:600  }}
      />
    </View>
  );
}

function BibliotecaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#333' }}>
                  A biblioteca é fresca, tem jogos, livros e quando vamos la sempre tem uma atividade a parte para fazermos.
                  </Text>
      <Image
        source={require('./1.jpg')}
        style={{ width: 800, height:600  }}
      />
    </View>
  );
}

function SaidaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#333' }}>
                 Ultimamente não vamos muito la, mas no começo do ano passado era nosso lugar favorito!
                  </Text>
      <Image
        source={require('./3.jpg')}
        style={{ width: 800, height:600  }}
      />
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Jardim" component={JardimScreen} />
        <Stack.Screen name="Mesa" component={MesaScreen} />
        <Stack.Screen name="Bancos" component={BancosScreen} />
        <Stack.Screen name="Biblioteca" component={BibliotecaScreen} />
        <Stack.Screen name="Saida" component={SaidaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;