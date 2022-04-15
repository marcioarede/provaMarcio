import  React,{useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import Estilo from './style.css/estilo'

export default function App() {
  const [img, setImg] = useState(require('./assets/balloon_green.jpg'));
  const [textoFrase, setTextoFrase] = useState('');
  let frases = [
    'Fluminense.',
    'Campeão.',
    'Carioca 2022.'
    
  ];

  function estourar() {
    let qualquerFrase = Math.floor(Math.random() * frases.length);
    setTextoFrase(frases[qualquerFrase]);
    setImg(require('./assets/popped_balloon_green.jpg'));
  }

  function resetar() {
    setImg(require('./assets/balloon_green.jpg'));
    setTextoFrase('');
  }

  return (
    <View style={Estilo.container}>
      <Image style={{ width: 250, height: 500 }} source={img} />
      <Text style={Estilo.text}>{textoFrase ? `"${textoFrase}"` : ''}</Text>
      <TouchableOpacity onPress={estourar}>
        <View style={Estilo.btnArea}>
          <Text style={Estilo.btnTexto}>Estourar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={resetar}>
        <View style={[Estilo.btnArea, { marginTop: 25, borderColor: 'black' }]}>
          <Text style={[Estilo.btnTexto, { color: 'black' }]}>Resetar</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}