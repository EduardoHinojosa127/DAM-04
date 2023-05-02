import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Gallery = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: 'https://picsum.photos/id/10/200/300'}} />
        <Image style={styles.image} source={{uri: 'https://picsum.photos/id/20/200/300'}} />
        <Image style={styles.image} source={{uri: 'https://picsum.photos/id/30/200/300'}} />
      </View>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: 'https://picsum.photos/id/40/200/300'}} />
        <Image style={styles.image} source={{uri: 'https://picsum.photos/id/50/200/300'}} />
        <Image style={styles.image} source={{uri: 'https://picsum.photos/id/60/200/300'}} />
      </View>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: 'https://picsum.photos/id/70/200/300'}} />
        <Image style={styles.image} source={{uri: 'https://picsum.photos/id/80/200/300'}} />
        <Image style={styles.image} source={{uri: 'https://picsum.photos/id/90/200/300'}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)', //Fondo opaco
    padding: 10, //Agregamos un poco de padding para separar los bordes
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  image: {
    width: 120, //Agrandamos el ancho de la imagen
    height: 120, //Agrandamos la altura de la imagen
    marginRight: 5,
  },
});

export default Gallery;
