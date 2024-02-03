// 
import Hero from '../hero/Hero';
import MovieList from '../movieList/MovieList';

const Home = ({movies}) => {
  return (<>
    <Hero movies = {movies} />
    <MovieList/>
    </>
  )
}

export default Home