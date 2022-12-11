import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export default function Home() {
  const participants = ['Nandin', 'Knek', 'Samuca', 'Danik', 'Cintia', 'Joao', 'Leao', 'Miguez', 'Teusma', 'Alice']
  function handleParticipantAdd(){
    console.log('CLicou no adicionar');
  }

  function handleParticipantRemove(name: string){
    console.log('Removeu participante ' + name);
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
        {/* ScrollView e FlatList ativa a rolagem  */}
        <FlatList 
          data={[]}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Participant 
              key={item}
              name={item} 
              onRemove={()=> handleParticipantRemove(item)} 
              
              />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguem chegou no evento ainda? Adicione participantes na sua lista de presença.
            </Text>
          )}
        />
          {/* {
            participants.map(participant => (
              
            ))
          } */}
    </View>
  );
}