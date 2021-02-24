import React, { useState } from "react";
import { StatusBar } from "react-native";
import Home from "./src/components/Home";
import { ListResults } from "./src/components/ListResults";
import { Search } from "./src/components/Search";
import data from "./src/helpers/filmDatas";

export default function App() {
  const [searchValue, setSeachValue] = useState("");
  const [movies, setMovies] = useState(data);
  const [inputFocus, setInputFocus] = useState(false);

  const searchFilm = (searchedText) => {
    setSeachValue(searchedText);
    const newMovies = data.filter((movie) => {
      const movieLowerCase = movie.title.toLowerCase();
      return movieLowerCase.includes(searchedText.toLowerCase());
    });
    setMovies(newMovies);
  };

  return (
    <>
      <StatusBar backgroundColor="green" barStyle={"light-content"} />
      <Search
        searchValue={searchValue}
        searchFilm={(searchedText) => searchFilm(searchedText)}
        setInputFocus={setInputFocus}
      />
      {inputFocus ? (
        <ListResults movies={movies} searchValue={searchValue} />
      ) : (
        <Home />
      )}
    </>
  );
}
