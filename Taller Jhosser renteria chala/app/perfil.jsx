import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

export default function Perfil() {

  const nombre = "jhosser renteria";
  const correo = "jhosser@gmail.com";

  const handlePress = (opcion) => {
    Alert.alert('Opción seleccionada', `Has seleccionado: ${opcion}`);
  };

  const handleLogout = () => {
    Alert.alert('Cerrar sesión', 'Has cerrado sesión exitosamente.');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./img/perfil.png')} style={styles.avatar} />
      <Text style={styles.name}>{nombre}</Text>
      <Text style={styles.email}>{correo}</Text>

      <View style={styles.card}>
        <TouchableOpacity style={styles.row} onPress={() => handlePress('Editar perfil')}>
          <Text style={styles.label}>Editar perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={() => handlePress('Notificaciones')}>
          <Text style={styles.label}>Notificaciones</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={() => handlePress('Configuración')}>
          <Text style={styles.label}>Configuración</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={() => handlePress('Ayuda')}>
          <Text style={styles.label}>Ayuda</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#8b0815ff', alignItems: 'center', justifyContent: 'center' },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 18 },
  name: { fontSize: 22, color: 'white', fontWeight: 'bold', marginBottom: 2 },
  email: { fontSize: 16, color: '#ccc', marginBottom: 18 },
  card: {
    width: '100%',
    backgroundColor: '#222',
    borderRadius: 12,
    marginBottom: 30,
    paddingVertical: 2,
  },
  row: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  label: { color: 'white', fontSize: 17 },
  logoutButton: { alignItems: 'center', marginTop: 10 },
  logoutText: { color: '#3366FF', fontSize: 16 },
});
