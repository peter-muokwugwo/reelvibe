import React, { useState } from 'react'


interface Movie {
  id: string | number;
  title: string;
  posterPath: string;
  overview?: string;
  releaseDate?: string;
}

interface State {
  searchTerm: string;
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
  
  return (
    <div>App</div>
  )
}

export default App