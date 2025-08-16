import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import usuarios from './usuarios.json';

import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const usuario = usuarios.find((user) => user.email === email);

    if (!usuario) {
      Alert.alert('Error', 'El usuario no existe.');
    } else if (usuario.clave !== password) {
      Alert.alert('Error', 'Datos de acceso incorrectos.');
    } else {
      Alert.alert('Bienvenido', `Datos de acceso correctos. Hola, ${usuario.nombre}!`);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./img/sombrero.png')} style={styles.image} />
      <Text style={styles.title}>INICIAR SESIÓN</Text>

      <View style={styles.inputContainer}>
        <Icon name="email-outline" size={20} color="#aaa" />
        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock-outline" size={20} color="#aaa" />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Text style={styles.link}>Olvidaste tu contraseña?</Text>

      <TouchableOpacity style={styles.mainButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={styles.altButton}>
        <Icon name="google" size={20} color="#EA4335" />
        <Text style={styles.altText}>Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.altButton}>
        <Icon name="apple" size={20} color="#000" />
        <Text style={styles.altText}>Apple</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, justifyContent: 'center', backgroundColor: '#8b0815ff' },
  image: { width: 250, height: 180, alignSelf: 'center', marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', color: '#F5E2C8', marginBottom: 20 },
  inputContainer: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#333', paddingHorizontal: 10,
    marginBottom: 12, borderRadius: 8,
  },
  input: { flex: 1, padding: 10, color: '#F5E2C8' },
  link: { textAlign: 'right', color: '#aaa', marginBottom: 20 },
  mainButton: { backgroundColor: '#4E342E', padding: 14, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#F5E2C8', fontWeight: 'bold' },
  divider: {
    borderBottomWidth: 1, borderColor: '#444', marginVertical: 20, marginHorizontal: 50,
  },
  altButton: {
    flexDirection: 'row', alignItems: 'center', gap: 10, borderWidth: 1, borderColor: '#555',
    padding: 12, borderRadius: 8, marginBottom: 10, justifyContent: 'center', backgroundColor: '#222',
  },
  altText: { fontSize: 14, color: '#F5E2C8' },
});