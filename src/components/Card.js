import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Card = (props) => {
  const { title, release_date, poster_url } = props;
  return (
    <TouchableOpacity>
      <View style={styles.main_container}>
        <View style={styles.image}>
          <Image
            style={styles.picture}
            resizeMode={"contain"}
            source={{
              uri: poster_url,
            }}
          ></Image>
        </View>
        <View style={styles.desc}>
          <Text style={styles.desc_title}>{title}</Text>
          <Text style={styles.desc_date}> {release_date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main_container: {
    height: 100,
    flexDirection: "row",
    marginBottom: 15,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  image: {
    width: 80,
    marginRight: 10,
  },
  picture: {
    flex: 1,
  },
  desc: {
    flex: 1,
    justifyContent: "center",
  },
  desc_title: {
    fontWeight: "bold",
    marginBottom: 15,
    fontFamily: "Helvetica Neue",
  },
  desc_date: {
    fontWeight: "200",
    fontFamily: "Helvetica Neue",
  },
});
