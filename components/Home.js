import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/nasywaaapr/coffeeapi/main/datacoffee.json")
      .then((res) => res.json())
      .then((hasil) => {
        setData(hasil);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#7B3F00" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Detail", { item })}
          >
            <Image source={{ uri: item.gambarthumbnail }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.nama}>{item.nama}</Text>
              <Text numberOfLines={2} style={styles.deskripsi}>
                {item.deskripsi}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  card: {
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
    elevation: 2,
  },
  image: { width: 80, height: 80, borderRadius: 10 },
  textContainer: { flex: 1, marginLeft: 10 },
  nama: { fontSize: 16, fontWeight: "bold", color: "#4b2e05" },
  deskripsi: { color: "#555" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});
