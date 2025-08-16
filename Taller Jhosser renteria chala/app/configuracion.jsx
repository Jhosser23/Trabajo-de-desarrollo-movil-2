import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

export default function Configuracion() {
  const [notificaciones, setNotificaciones] = useState(false);


  const handlePress = (opcion) => {
    Alert.alert('Opción seleccionada', `Has seleccionado: ${opcion}`);
  };


  const handleLogout = () => {
    Alert.alert('Cerrar sesión', 'Has cerrado sesión exitosamente.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajustes</Text>

      <View style={styles.card}>
        <TouchableOpacity style={styles.row} onPress={() => handlePress('Cuenta')}>
          <Text style={styles.label}>Cuenta</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.label}>Notificaciones</Text>
          <Switch
            value={notificaciones}
            onValueChange={setNotificaciones}
            thumbColor="#8B0000"
          />
        </View>
        <TouchableOpacity style={styles.row} onPress={() => handlePress('Privacidad')}>
          <Text style={styles.label}>Privacidad</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={() => handlePress('Seguridad')}>
          <Text style={styles.label}>Seguridad</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={() => handlePress('Ayuda')}>
          <Text style={styles.label}>Ayuda</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#8b0815ff' },
  title: { fontSize: 32, fontWeight: 'bold', color: 'white', marginBottom: 30, marginTop: 10 },
  card: {
    backgroundColor: '#222',
    borderRadius: 12,
    paddingVertical: 4,
    marginBottom: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  label: { color: 'white', fontSize: 18 },
  arrow: { color: 'white', fontSize: 20 },
  logoutButton: { alignItems: 'center', marginTop: 20 },
  logoutText: { color: '#3366FF', fontSize: 17, fontWeight: 'bold' },
});
