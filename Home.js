import React from "react";
import { View, ImageBackground, StyleSheet, Text, Image } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: "https://images.unsplash.com/photo-1529693662655-5a810fda9665",
        }}
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>Inicio</Text>
          <Text style={styles.description}>
            Bienvenidos a nuestra página de galería de imágenes y formulario. En
            esta página podrás disfrutar de una amplia variedad de imágenes en
            una elegante galería con un estilo moderno y atractivo. Puedes
            navegar por nuestra selección de imágenes y encontrarás fotos de
            todo tipo, desde hermosos paisajes hasta increíbles tomas de
            animales en su hábitat natural. Además, en nuestra página también
            encontrarás un formulario que te permitirá ingresar tus datos de
            inicio de sesión y así disfrutar de una experiencia más
            personalizada. Una vez que ingreses tus datos y presiones el botón
            de ingresar, serás bienvenido con un mensaje personalizado. En
            resumen, nuestra página es el lugar perfecto para explorar hermosas
            imágenes y acceder a una experiencia personalizada con nuestro
            formulario de inicio de sesión. ¡Esperamos que disfrutes de tu
            visita a nuestra página y que regreses pronto para explorar nuestras
            nuevas actualizaciones y contenido!
          </Text>
        </View>
        <Image
          style={styles.logo}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
          }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginHorizontal: 40,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 40,
  },
});

export default Home;
