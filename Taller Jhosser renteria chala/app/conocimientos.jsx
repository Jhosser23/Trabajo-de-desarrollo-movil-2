import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

const cardsData = [
  {
    id: 1,
    titulo: 'Card title 1',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Esta es una descripción larga para probar el ver más/ver menos.',
    mostrarTodo: false,
  },
  {
    id: 2,
    titulo: 'Card title 2',
    descripcion: 'Otra descripción diferente para la segunda tarjeta, con más texto para mostrar el comportamiento.',
    mostrarTodo: false,
  },
];

export default function Conocimientos() {
  const [cards, setCards] = useState(cardsData);

  const toggleMostrarTodo = (id) => {
    setCards(prev =>
      prev.map(card =>
        card.id === id ? { ...card, mostrarTodo: !card.mostrarTodo } : card
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <View style={styles.tabContainer}>
        <Text style={styles.tabSelected}>Inicio</Text>
        <Text style={styles.tab}>Buscar</Text>
      </View>
      <Image
        source={require('./img/conocimientos.png')}
        style={styles.image}
      />
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {cards.map(card => (
          <View key={card.id} style={styles.card}>
            <Text style={styles.cardTitle}>{card.titulo}</Text>
            <Text style={styles.cardText}>
              {card.mostrarTodo
                ? card.descripcion
                : `${card.descripcion.slice(0, 30)}${card.descripcion.length > 30 ? '...' : ''}`}
            </Text>
            <TouchableOpacity onPress={() => toggleMostrarTodo(card.id)}>
              <Text style={styles.link}>
                {card.mostrarTodo ? 'Ver menos' : 'Ver más'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#3a0f0aff', alignItems: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#F5E2C8' },
  tabContainer: { flexDirection: 'row', gap: 15, marginVertical: 10 },
  tabSelected: {
    backgroundColor: '#4E342E',
    color: '#F5E2C8',
    paddingHorizontal: 50,
    paddingVertical: 9,
    borderRadius: 6,
    borderWidth: 1, borderColor: '#555'
  },
  tab: {
    backgroundColor: 'white',
    color: '#222',
    paddingHorizontal: 50,
    paddingVertical: 9,
    borderRadius: 6,
    borderWidth: 2, borderColor: '#555'
  },
  cardContainer: { gap: 20 },
  card: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
  },
  image: { width: 280, height: 220, alignSelf: 'center', marginBottom: 20 },
  cardTitle: { fontWeight: 'bold', fontSize: 28, marginBottom: 5, color: '#F5E2C8' },
  cardText: { fontSize: 18, marginBottom: 8, color: 'white' },
  link: { color: 'cyan', fontWeight: '500' },
});
