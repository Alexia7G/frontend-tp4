import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Image, Card } from "react-native-elements";
import { size } from "lodash";

export default function ListaRestauranes() {
  const restaurants = [
    {
      name: "Saltimbanco",
      image: require("../../../assets/restaurantes/Saltimbanco.jpg"),
      address: "Av. Rafael Núñez 5520",
      cantCalificaciones: "100",
    },
    {
      name: "San Pietro",
      image: require("../../../assets/restaurantes/san-pietro.jpg"),
      address: "Viamonte 45",
      cantCalificaciones: "150",
    },
    {
      name: "La casa del lomito",
      image: require("../../../assets/restaurantes/chori.jpg"),
      address: "Martiniano Chilavert 2398",
      cantCalificaciones: "20",
    },
  ];

  return (
    <View>
      {size(restaurants) > 0 ? (
        <FlatList
          data={restaurants}
          renderItem={(restaurant) => <Restaurant restaurant={restaurant} />}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.loaderRestaurants}>
          <ActivityIndicator size="large" />
          <Text>Cargando</Text>
        </View>
      )}
    </View>
  );
}
const goRestaurant = () => {
  console.log("Ok");
};
const Restaurant = (props) => {
  const { restaurant } = props;
  const { image, name, address } = restaurant.item;
  //console.log(restaurant);
  return (
    <TouchableOpacity onPress={goRestaurant}>
      <View style={styles.viewRestaurante}>
        <Card title={name} image={image}>
          <Text style={{ marginBottom: 10 }}>{address}</Text>
        </Card>
        {/* <View style={styles.viewRestImage}>
          <Image
            resizeMode="cover"
            PlaceholderContent={<ActivityIndicator color="#fff" />}
            source={image}
            style={styles.imageRest}
          ></Image>
        </View>
        <View>
          <Text>{name}</Text>
  </View> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loaderRestaurants: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  viewRestaurante: {
    flexDirection: "column",
    margin: 10,
  },
  viewRestImage: {
    marginRight: 15,
  },
  imageRest: {
    width: 80,
    height: 80,
  },
});
