import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import Home from "./src/components/Home";
import { ListResults } from "./src/components/ListResults";
import { Search } from "./src/components/Search";
import { fetchMovies, fetchTopRated } from "./src/services/network";

export default function App() {
  const [searchValue, setSeachValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputFocus, setInputFocus] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchFilm = (searchedText) => {
    setSeachValue(searchedText);
    if (searchedText.length > 3) {
      fetchMovies(searchValue, currentPage).then((resJson) => {
        setMovies(resJson.results);
        setLoading(false);
      });
    }
  };

  const fetchNetworkMovie = () => {
    setLoading(true);
    fetchTopRated(currentPage).then((resJson) => {
      setMovies(resJson.results);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchNetworkMovie();
  }, []);

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
