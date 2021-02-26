import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import Home from "../components/Home";
import { ListResults } from "../components/ListResults";
import { Search } from "../components/Search";
import { fetchMovies, fetchTopRated } from "../services/network";

export default function SearchScreen({ navigation }) {
  const [searchValue, setSeachValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputFocus, setInputFocus] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchFilm = (searchedText) => {
    setCurrentPage(1);
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

  const fecthMoreMovie = () => {
    setCurrentPage(currentPage + 1);
    // setSeachValue();
    fetchMovies(searchValue, currentPage).then((resJson) => {
      setMovies([...movies, ...resJson.results]);
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
        <ListResults
          movies={movies}
          searchValue={searchValue}
          fecthMoreMovie={fecthMoreMovie}
          itemClicked={(id) => navigation.navigate("Details", { id })}
        />
      ) : (
        <Home itemClicked={(id) => navigation.navigate("Details", { id })} />
      )}
    </>
  );
}
