import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import elementosData from './elementos.json';
import { useState } from 'react';

export default function DetalleElemento() {
  const { id } = useLocalSearchParams();
  const elemento = elementosData.find(e => e.id === Number(id));
  const [imgError, setImgError] = useState(false);

  if (!elemento) {
    return (
      <SafeAreaView style={styles.safe}>
        <Text style={styles.title}>Elemento no encontrado</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            {!imgError && elemento.urlImagen ? (
              <Image
                source={{ uri: elemento.urlImagen }}
                style={{ width: 80, height: 80, borderRadius: 16, backgroundColor: '#E6D3A3' }}
                onError={() => setImgError(true)}
              />
            ) : (
              <Icon name="image-off-outline" size={60} color="#A62C2B" />
            )}
          </View>
          <Text style={styles.title}>{elemento.titulo}</Text>
          <Text style={styles.description}>{elemento.descripcion}</Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Acción</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#3a0f0a',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scroll: {
    alignItems: 'center',
    paddingVertical: 30,
    gap: 30,
  },
  card: {
    width: '90%',
    backgroundColor: '#F5F5F5',
    borderRadius: 18,
    alignItems: 'center',
    padding: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  imageContainer: {
    backgroundColor: '#E6D3A3',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E2E2E',
    marginBottom: 6,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: '#4A3B31',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 6,
  },
  actionButton: {
    backgroundColor: '#A62C2B',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 7,
  },
  actionButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
