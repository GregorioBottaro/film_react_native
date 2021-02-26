import React from "react";
import { View } from "react-native";
import { Rating } from "react-native-elements";

const RatingComponent = (props) => {
  const { vote } = props;
  return (
    <View>
      <Rating
        imageSize={15}
        startingValue={vote / 2}
        ratingCount={5}
        readonly
        tintColor="#f5f5f5"
      />
    </View>
  );
};

export default RatingComponent;
