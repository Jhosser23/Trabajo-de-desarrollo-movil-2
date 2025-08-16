import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Servicios() {
  const servicios = [
    { nombre: 'Mensajería a caballo', icono: 'horse-variant', descripcion: 'Entrega rápida de cartas y mensajes por todo el condado.' },
    { nombre: 'Reparación de armas', icono: 'pistol', descripcion: 'Pule y mejora tus armas para el próximo duelo.' },
    { nombre: 'Caza de recompensas', icono: 'target', descripcion: 'Atrapa forajidos y gana dinero por sus cabezas.' },
    { nombre: 'Guía del cazador', icono: 'map', descripcion: 'Explora los mejores lugares para cazar y recolectar.' },
  ];

  return (
    <View style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Servicios disponibles</Text>
        {servicios.map((servicio, index) => (
          <View key={index} style={styles.card}>
            <Icon name={servicio.icono} size={32} color="#F5E2C8" style={styles.icon} />
            <Text style={styles.name}>{servicio.nombre}</Text>
            <Text style={styles.descripcion}>{servicio.descripcion}</Text>
            <TouchableOpacity>
              <Text style={styles.link}>Solicitar servicio</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#3a0f0aff',
  },
  container: {
    padding: 20,
    alignItems: 'center',
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    width: '100%',
  },
  icon: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    color: '#F5E2C8',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descripcion: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 8,
    marginBottom: 10,
    textAlign: 'center',
  },
  link: {
    color: 'cyan',
    fontWeight: '500',
    textAlign: 'center',
  },
});
