import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function Detail({ route }) {
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: item.gambarPoster }} style={styles.image} />
      <Text style={styles.nama}>{item.nama}</Text>
      <Text style={styles.deskripsi}>{item.deskripsi}</Text>
      <Text style={styles.harga}>Harga: Rp {item.harga}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  nama: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4b2e05",
    marginBottom: 10,
  },
  deskripsi: {
    fontSize: 16,
    color: "#333",
    textAlign: "justify",
    marginBottom: 20,
  },
  harga: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7B3F00",
  },
});
