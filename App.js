import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { ListResults } from "./src/components/ListResults";
import { Search } from "./src/components/Search";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="green" barStyle={"light-content"} />
      <Search />
      <ListResults />
    </>
  );
}
