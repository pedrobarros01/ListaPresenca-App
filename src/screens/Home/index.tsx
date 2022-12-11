import { Text, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
        <Text style={styles.eventName}>Nome do Evento</Text>
        <Text style={styles.eventDate}>sabado, 10 de dezembro de 2022</Text>
    </View>
  );
}