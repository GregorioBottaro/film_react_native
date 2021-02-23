import React from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import { Card } from './Card'
import data from '../helpers/filmDatas'
import { EmptyResults } from './EmptyResults'

export const ListResults = (props) => {
  return (
    <View style={styles.container}>
    {
      data.length > 0 ? (
        <View style={styles.listContainer}>
          <FlatList 
            data={data}
            keyExtractor={key => String(key.id)}
            renderItem={({ item }) => <Card key={item.id} title={item.title} release_date={item.release_date} />}
            />
        </View>
        ) : (
          <EmptyResults />
        )
      }
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 5
  },
  listContainer: {
    margin: 10,
  }
})
