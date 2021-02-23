import React from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import { Card } from './Card'
import data from '../helpers/filmDatas'

export const ListResults = (props) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        keyExtractor={key => String(key.id)}
        renderItem={({ item }) => <Card key={item.id} title={item.title} release_date={item.release_date} />}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 5,
      margin: 10,
      paddingHorizontal: 0
  }
})
