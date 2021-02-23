import React from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

export const EmptyResults = () => {
  const image = { uri: "https://images.unsplash.com/photo-1488197047962-b48492212cda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2094&q=80" };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.content}>
        <Icon
          name='emoji-sad'
          type='entypo'  
          color='#E76933'
          size={64}
          />
        <Text style={styles.text}>Pas de résultats pour votre recherche</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
  },
  content: {
    // marginTop: '40%',
    flex: 1,
    marginTop: -10,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    color: 'white'
  },
})