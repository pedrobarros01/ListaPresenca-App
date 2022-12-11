import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Home() {

  function handleParticipantAdd(){
    console.log('CLicou no adicionar');
  }
  return (
    <View style={styles.container}>
        <Text style={styles.eventName}>Nome do Evento</Text>
        
        <Text style={styles.eventDate}>
            sabado, 10 de dezembro de 2022
        </Text>

        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor={"#6B6B6B"}

            />
            <TouchableOpacity 
            style={styles.button} 
            onPress={handleParticipantAdd}
            >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    
    </View>
  );
}