import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Card } from "./Card";
import { EmptyResults } from "./EmptyResults";

export const ListResults = (props) => {
  const { movies, fecthMoreMovie, itemClicked } = props;
  return (
    <SafeAreaView style={styles.container}>
      {movies.length > 0 ? (
        <View style={styles.listContainer}>
          <FlatList
            data={movies}
            keyExtractor={(key) => String(key.id + Math.random())}
            renderItem={({ item }) => (
              <Card
                key={item.id + Math.random()}
                title={item.title}
                release_date={item.release_date}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                itemClicked={() => itemClicked(item.id)}
              />
            )}
            onEndReachedThreshold={0}
            onEndReached={fecthMoreMovie}
          />
        </View>
      ) : (
        <EmptyResults />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    position: "relative",
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    margin: 10,
  },
});
