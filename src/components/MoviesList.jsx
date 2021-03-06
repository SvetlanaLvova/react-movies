import Movie from './Movie';

const MoviesList = (props) => {
  const {movies = []} = props;
  return (
    <div className="movies">
      {movies.length ? movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie}/> 
      )) : <h4>Nothing was found</h4>
    }
    </div>
  );
}

export default MoviesList;
