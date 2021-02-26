import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { urlImageMovie } from "../helpers/constants";
import { Icon } from "react-native-elements";
import RatingComponent from "./RatingComponent";

export const Card = (props) => {
  const { title, release_date, poster_path, vote_average, itemClicked } = props;
  return (
    <TouchableOpacity onPress={itemClicked}>
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
          <RatingComponent vote={vote_average} />
        </View>
        <View style={{ height: "100%", justifyContent: "" }}>
          {vote_average > 7.9 && (
            <Text>
              <Icon name="heart" type="entypo" color="lightpink" size={24} />
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
    paddingBottom: 10,
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
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 2,
    marginBottom: 10,
  },
  desc_title: {
    fontWeight: "bold",
    fontFamily: "Helvetica Neue",
  },
  desc_date: {
    fontWeight: "200",
    fontFamily: "Helvetica Neue",
  },
  rating: {
    height: "1em",
  },
});
