import React, {useState, useEffect} from 'react';
import MoviesList from '../components/MoviesList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';
import env from "react-dotenv";

const PATH = process.env.REACT_APP_PATH

function Main(){
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    fetch(`${PATH}/?apikey=94bb9e7a&s=${str}${type !== "all" ? `&type=${type}` : ''}`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.Search);
      setLoading(false)
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    })


  }
  useEffect(() => {
    fetch(`${PATH}/?apikey=94bb9e7a&s=iron`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.Search);
      setLoading(false)
    })
    .catch((err) => {
      console.error(err);
      setLoading(false)
    })
  }, [])
    return (
      <main className="container content">
        <Search searchMovies={searchMovies}/>
        {
          loading ? <Preloader />
          : (<MoviesList movies={movies}/>)
        }

      </main>
    );
}

export default Main;
