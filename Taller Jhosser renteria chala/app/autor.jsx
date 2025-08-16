import { View, Text, StyleSheet, Image } from 'react-native';

export default function Autor() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desarrollado por</Text>

      <Image source={require('./img/jhosser.jpg')} style={styles.avatar} />

      <Text style={styles.name}>Jhosser Rentería Chala</Text>
      <Text style={styles.info}>Estudiante de Ingeniería de Telecomunicaciones e Informática</Text>
      <Text style={styles.info}>Universidad Tecnológica del Chocó</Text>
      <Text style={styles.info}>Materia: Desarrollo de Aplicaciones Móviles</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#3a0f0aff', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 },
  avatar: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  name: { fontSize: 20, fontWeight: 'bold', color: 'white' },
  info: { fontSize: 16, color: '#ccc', textAlign: 'center', marginTop: 5 },
});
