import React, { useState } from 'react'
import Search from './components/Search';
import MovieCard from './components/MovieCard';
import Header from './components/Header';


export interface Movie {
  id: string | number;
  title: string;
  posterPath: string;
  searchTerm: string;
  voteAverage: number;
  originalLanguage: string;
  overview?: string;
  releaseDate?: string;
}

interface State {
  movies: Movie[];
  trendingMovies: Movie[];
  error: string | null;
  isLoading: boolean;
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <main>
      <Header />
      <section id='search'>
        <Search 
        search={searchTerm}
        setSearch={setSearchTerm}
        />
      </section>
      {trendingMovies.length > 0 && (
        <section id='trending'>
          <h2>Trending Movies</h2>

          <ul>
            {trendingMovies.map((movie, i) => (
              <li key={movie.id}>
                <p>{i + 1}</p>

                <img 
                  src={movie.posterPath}
                  alt={movie.searchTerm}
                  />
              </li>
            ))}
          </ul>
        </section>
      )}
      <section id='all-movie'>
        <h2>All Reels</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul>
            {movies.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                />
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App