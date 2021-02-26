import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/pages/SearchScreen";
import MovieDetails from "./src/pages/MovieDetails";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SearchScreen}
          options={{
            title: null,
            headerVisible: false,
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={MovieDetails}
          options={{
            title: null,
            headerVisible: false,
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
