import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router'; // O el router que uses
import elementosData from './elementos.json';

export default function Lista() {
  const [textoBuscar, setTextoBuscar] = useState('');
  const [elementos, setElementos] = useState(elementosData);
  const router = useRouter();

  const iconos = [
    'star-circle',
    'account-circle',
    'cube',
    'leaf',
    'rocket',
    'book-open',
    'camera',
    'cart',
    'music',
    'paw'
  ];
  
  const filtrados = elementos.filter(e =>
    e.titulo.toLowerCase().includes(textoBuscar.toLowerCase())
  );


  const toggleMostrarTodo = (id) => {
    setElementos(prev =>
      prev.map(e =>
        e.id === id ? { ...e, mostrarTodo: !e.mostrarTodo } : e
      )
    );
  };


  const verDetalle = (elemento) => {
    router.push({ pathname: '/detalle', params: { id: elemento.id } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar"
        placeholderTextColor="#E6D3A3"
        value={textoBuscar}
        onChangeText={setTextoBuscar}
      />
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {filtrados.map((e, idx) => (
          <View key={e.id} style={styles.card}>
            <Icon
              name={iconos[idx % iconos.length]}
              size={40}
              color="#E6D3A3"
              style={{ marginRight: 15 }}
            />
            <Image source={{ uri: e.urlImagen }} style={{ width: 50, height: 50, marginRight: 15, borderRadius: 8 }} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{e.titulo}</Text>
              <Text style={styles.cardText}>
                {e.mostrarTodo
                  ? e.descripcion
                  : `${e.descripcion.slice(0, 30)}${e.descripcion.length > 30 ? '...' : ''}`}
              </Text>
              <TouchableOpacity onPress={() => toggleMostrarTodo(e.id)}>
                <Text style={{ color: '#A62C2B', marginTop: 5 }}>
                  {e.mostrarTodo ? 'Ver menos' : 'Ver más'}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.actionButton} onPress={() => verDetalle(e)}>
              <Text style={styles.actionButtonText}>Acción</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#8b0815ff' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#E6D3A3', marginBottom: 15 },
  searchBar: {
    backgroundColor: '#3E3E3E',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: '#E6D3A3',
  },
  cardContainer: { gap: 20 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A3B31',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10,
  },
  cardContent: { flex: 1 },
  cardTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 5, color: '#E6D3A3' },
  cardText: { fontSize: 14, color: '#B0A18E' },
  actionButton: {
    backgroundColor: '#A62C2B',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft: 10,
  },
  actionButtonText: { color: '#FFF', fontWeight: 'bold' },
});
