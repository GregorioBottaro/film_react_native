import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  SafeAreaView,
  Animated,
  Easing,
} from "react-native";
import { getMovieDetails } from "../services/network";
import { urlImageMovie } from "../helpers/constants";
import {
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { AirbnbRating, Icon, Rating } from "react-native-elements";
// import RatingComponent from "../components/RatingComponent";
import StarRating from "react-native-star-rating";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MovieDetails = ({ route, navigation }) => {
  const { id } = route.params;
  const [movieData, setMovieData] = useState([]);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
      // easing: Easing.linear,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1200,
      useNativeDriver: true,
      // easing: Easing.linear,
    }).start();
  };
  const vignet = () => {
    Animated.decay(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
      easing: Easing.in,
    }).start();
  };

  const fillStorageMovieCheked = async (data) => {
    const arrMoviesCheked = [];
    const item = {
      id: data.id,
      title: data.title,
      illustration: urlImageMovie + data.poster_path,
    };
    const arrMovieCheked = await AsyncStorage.getItem("LAST_MOVIES_CHECK");
    console.log("arrMovieCheked", arrMovieCheked);
    if (arrMovieCheked) {
      if (!arrMovieCheked.includes(item.illustration)) {
        const parseArr = JSON.parse(arrMovieCheked);
        if (parseArr.length > 0 && parseArr.length < 5) {
          parseArr.push(item);
          await AsyncStorage.setItem(
            "LAST_MOVIES_CHECK",
            JSON.stringify(parseArr)
          );
        } else {
          parseArr.shift();
          parseArr.push(item);
          await AsyncStorage.setItem(
            "LAST_MOVIES_CHECK",
            JSON.stringify(parseArr)
          );
        }
      }
    } else {
      arrMoviesCheked.push(item);
      await AsyncStorage.setItem(
        "LAST_MOVIES_CHECK",
        JSON.stringify(arrMoviesCheked)
      );
    }
  };

  useEffect(() => {
    getMovieDetails(id).then((data) => {
      setMovieData(data);
      fillStorageMovieCheked(data);
    });
    fadeIn();
  }, []);
  return (
    <View style={styles.main_container}>
      <View style={styles.bg_image}>
        <Animated.Image
          style={[
            styles.picture,
            {
              opacity: fadeAnim,
              flex: 1,
            },
          ]}
          resizeMode={"cover"}
          source={{ uri: urlImageMovie + movieData.poster_path }}
          blurRadius={0.5}
        ></Animated.Image>
        <View style={{ flex: 1, position: "absolute", bottom: -20, right: 25 }}>
          <TouchableOpacity style={styles.iconPlay}>
            <Icon
              // style={styles.iconPlay}
              name="play"
              type="font-awesome"
              color="#fff"
              size={16}
            ></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bg_infos}>
        <Animated.View
          style={[
            {
              translate: arriveAnim,
              flex: 1,
            },
          ]}
        >
          <Image
            style={styles.vignet}
            resizeMode={"cover"}
            source={{ uri: urlImageMovie + movieData.poster_path }}
          />
        </Animated.View>
        <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
          <Text style={styles.title}>{movieData.title}</Text>
          <Text style={styles.date}> {movieData.release_date}</Text>
          {/* <RatingComponent vote={movieData.vote_average} /> */}
          <StarRating
            disabled
            maxStars={5}
            starSize={15}
            rating={movieData.vote_average / 2}
            fullStarColor={"gold"}
            emptyStarColor={"gold"}
            // selectedStar={(rating) => this.onStarRatingPress(rating)}
          />
        </View>
      </View>
      <Text
        style={{
          paddingHorizontal: 25,
          paddingVertical: 10,
          fontWeight: "600",
        }}
      >
        Synopsis
      </Text>
      <ScrollView style={styles.bg_synopsis}>
        <Text style={{ textAlign: "justify" }}>{movieData.overview}</Text>
      </ScrollView>
      <View style={styles.footer}>
        <SafeAreaView style={{ marginHorizontal: 30 }}>
          <TouchableHighlight
            style={styles.btnFooter}
            onPress={() => console.log("cc")}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontFamily: "Helvetica Neue",
              }}
            >
              Visite website
            </Text>
          </TouchableHighlight>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  bg_image: {
    flex: 2,
    zIndex: -1,
  },
  bg_infos: {
    flex: 0.4,
    flexDirection: "row",
    // justifyContent: "space-between",
    marginRight: 20,
    marginLeft: 20,
  },
  bg_synopsis: {
    flex: 3,
    marginHorizontal: 25,
    marginVertical: 0,
    height: 250,
  },
  picture: {
    flex: 1,
  },
  vignet: {
    flex: 1,
    width: 90,
    borderColor: "white",
    borderWidth: 3.5,
    borderRadius: 20,
    marginTop: -40,
    marginRight: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    fontFamily: "Helvetica",
    paddingBottom: 5,
    maxWidth: 250,
  },
  date: {
    fontWeight: "300",
    paddingBottom: 5,
  },
  iconPlay: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "#AD2A2A",
    borderRadius: 50,
    // marginTop: -25,
    width: 40,
    height: 40,
  },
  footer: {
    flex: 0.5,
  },
  btnFooter: {
    backgroundColor: "#AD2A2A",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
