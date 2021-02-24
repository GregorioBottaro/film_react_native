import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import Carousel from "react-native-snap-carousel";

const data = [
  {
    title: "Item 1",
    text: "Text 1",
  },
  {
    title: "Item 2",
    text: "Text 2",
  },
  {
    title: "Item 3",
    text: "Text 3",
  },
  {
    title: "Item 4",
    text: "Text 4",
  },
  {
    title: "Item 5",
    text: "Text 5",
  },
];

const Home = (props) => {
  const image = {
    uri:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  };

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <ImageBackground source={image} style={styles.content}>
      <View>
        <Text style={styles.text}>Vos derniers films consultés</Text>
      </View>
      <Carousel
        layout={"default"}
        // ref={(ref) => (this.carousel = ref)}
        data={data}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
        // onSnapToItem={(index) => this.setState({ activeIndex: index })}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 5,
    marginTop: -10,
    resizeMode: "cover",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 30,
    fontFamily: "Helvetica Neue",
  },
});

export default Home;
