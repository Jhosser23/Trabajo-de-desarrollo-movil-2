import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';



const opciones = [
  { titulo: 'Inicio de sesión', icono: 'lock', ruta: '/Login' },
  { titulo: 'Pantalla principal', icono: 'home', ruta: '/principal' },
  { titulo: 'Lista de elementos', icono: 'format-list-bulleted', ruta: '/lista' },
  { titulo: 'Formulario de registro', icono: 'form-select', ruta: '/registro' },
  { titulo: 'Configuración', icono: 'cog-outline', ruta: '/configuracion' },
  { titulo: 'Perfil de usuario', icono: 'account-circle-outline', ruta: '/perfil' },
  { titulo: 'Lista de servicios', icono: 'tools', ruta: '/servicios' },
  { titulo: 'autor', icono: 'account', ruta: '/autor' },
];

export default function MenuPrincipal() {
  const router = useRouter();

  return (
    <View style={styles.container}>


      <Text style={styles.titulo}>Menú Principal</Text>
      <Image
        source={require('./img/imagenprin.png')}
        style={styles.image}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        {opciones.map((item, i) => (
          <TouchableOpacity key={i} style={styles.boton} onPress={() => router.push(item.ruta)}>
            <Icon name={item.icono} size={24} color="#ec0000ff" style={styles.icono} />
            <Text style={styles.texto}>{item.titulo}</Text>
            <Icon name="chevron-right" size={24} color="#aaa" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#be0517' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20,color: '#F5E2C8'  },
  scroll: { gap: 12 },

  image: { width: 360, height: 100, marginBottom: 30, justifyContent: 'center', alignSelf:'center'}, 

  boton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5a362eff',
    padding: 12,
    borderRadius: 10,
    elevation: 1,
    borderWidth: 1, borderColor: '#3f2e1aff'
  },
  icono: { marginRight: 12 },
  texto: { flex: 1, fontSize: 16, color: '#ffffffff' },
});
