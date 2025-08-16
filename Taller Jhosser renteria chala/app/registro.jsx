import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useState } from 'react';
import usuariosJson from './usuarios.json';

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmar, setConfirmar] = useState('');

  const handleRegistro = () => {
    if (!nombre || !correo || !contrasena || !confirmar) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }
    if (contrasena !== confirmar) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    const existe = usuariosJson.some(
      u => u.email.toLowerCase() === correo.toLowerCase()
    );
    if (existe) {
      Alert.alert('Advertencia', 'El usuario ya existe.');
    } else {
      Alert.alert('Éxito', 'Usuario creado con éxito.');
      setNombre('');
      setCorreo('');
      setContrasena('');
      setConfirmar('');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./img/iconos.png')}
        style={styles.image}
      />
      <Text style={styles.header}>Registro</Text>

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        placeholder="Nombre"
        placeholderTextColor="#fff"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput
        placeholder="Correo electrónico"
        placeholderTextColor="#fff"
        style={styles.input}
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#fff"
        secureTextEntry
        style={styles.input}
        value={contrasena}
        onChangeText={setContrasena}
      />

      <Text style={styles.label}>Confirmar contraseña</Text>
      <TextInput
        placeholder="Confirmar contraseña"
        placeholderTextColor="#fff"
        secureTextEntry
        style={styles.input}
        value={confirmar}
        onChangeText={setConfirmar}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegistro}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#3a0f0aff', justifyContent: 'center' },
  header: { fontSize: 32, fontWeight: 'bold', color: '#fff', textAlign: 'left', marginBottom: 30, marginLeft: 10 },
  label: { fontSize: 15, color: '#fff', marginLeft: 5, marginBottom: 4, fontWeight: '500' },
  input: {
    backgroundColor: '#fff',
    color: '#222',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#3366FF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: { width: 180, height: 120, alignSelf: 'center', marginBottom: 20 },

});
