import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Card } from "./Card";
import { EmptyResults } from "./EmptyResults";

export const ListResults = (props) => {
  const { movies } = props;
  return (
    <View style={styles.container}>
      {movies.length > 0 ? (
        <View style={styles.listContainer}>
          <FlatList
            data={movies}
            keyExtractor={(key) => String(key.id)}
            renderItem={({ item }) => (
              <Card
                key={item.id}
                title={item.title}
                release_date={item.release_date}
                poster_url={item.poster_url}
              />
            )}
          />
        </View>
      ) : (
        <EmptyResults />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
  listContainer: {
    margin: 10,
  },
});
