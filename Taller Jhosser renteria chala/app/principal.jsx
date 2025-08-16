import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Principal() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BIENVENIDO AL VIEJO OESTE!</Text>

      <Image
        source={require('./img/welcome.png')}
        style={styles.image}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/conocimientos')}
      >
        <Text style={styles.buttonText}>Empezar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8b0815ff', padding: 20 },
  title: { fontSize: 30, fontWeight: 'bold', color: 'white', marginBottom: 20 },
  image: { width: 400, height: 400, marginBottom: 30 },
  button: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 30,
    width: 160,
    alignItems: 'center',
  },
  buttonText: { color: 'black', fontWeight: 'bold', fontSize: 20 },
});
