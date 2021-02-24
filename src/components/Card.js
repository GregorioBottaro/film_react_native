import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { urlImageMovie } from "../helpers/constants";
import { Icon } from "react-native-elements";

export const Card = (props) => {
  const { title, release_date, poster_path, vote_average } = props;
  return (
    <TouchableOpacity>
      <View style={styles.main_container}>
        <View style={styles.image}>
          <Image
            style={styles.picture}
            resizeMode={"contain"}
            source={{
              uri: urlImageMovie + poster_path,
            }}
          ></Image>
        </View>
        <View style={styles.desc}>
          <Text style={styles.desc_title}>{title}</Text>
          <Text style={styles.desc_date}> {release_date}</Text>
        </View>
        <View style={{ height: "100%", justifyContent: "center" }}>
          {vote_average > 6.9 && (
            <Text>
              <Icon name="star" type="entypo" color="gold" size={24} />
            </Text>
          )}
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
