import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width: screenWidth } = Dimensions.get("window");

const Home = (props) => {
  const { itemClicked } = props;
  const image = {
    uri:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  };

  const [moviesChecked, setMoviesChecked] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  const getMoviesCheked = async () => {
    const arrMoviesChecked = await AsyncStorage.getItem("LAST_MOVIES_CHECK");
    if (arrMoviesChecked) {
      setMoviesChecked(JSON.parse(arrMoviesChecked));
    }
  };

  useEffect(() => {
    getMoviesCheked();
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    console.log("moviesChecked", moviesChecked);
    return (
      <TouchableOpacity onPress={() => itemClicked(item.id)}>
        <View style={styles.item}>
          <ParallaxImage
            source={{ uri: item.illustration }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
          />
          <Text style={styles.titleCard} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 5 }}>
      <ImageBackground source={image} style={styles.imageBackground}>
        <View>
          <Text style={styles.text}>Vos derniers films consultés</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={goForward}>
            <Text>go to next slide</Text>
          </TouchableOpacity>
          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 60}
            data={moviesChecked}
            renderItem={renderItem}
            hasParallaxImages={true}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  imageBackground: {
    flex: 1,
    marginTop: -10,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10,
    fontFamily: "Helvetica Neue",
  },
  titleCard: {
    color: "white",
    textAlign: "center",
    marginTop: -45,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Home;
