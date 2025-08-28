import type { Movie } from "../App";
import { updateSearchCount } from "./updateSearchCount";


const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};


export async function fetchData(searchTerm: string = ''): Promise<Movie[]> {
    try {
        const endpoint = searchTerm
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(searchTerm)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

        const response = await fetch(endpoint, API_OPTIONS);

        if (!response.ok) {
            throw new Error(`Failed to fetch movies. Status: ${response.status}`)
        }

        const data = await response.json();
        const movieData: Movie[] = data.results.map((movie: any) => ({
            id: movie.id,
            title: movie.title,
            posterPath: movie.poster_path,
            overview: movie.overview,
            releaseDate: movie.release_date,
            voteAverage: movie.vote_average,
            originalLanguage: movie.original_language,
            searchTerm,
        }))

        if (searchTerm && movieData.length > 0) {
            await updateSearchCount(searchTerm, movieData[0])
        }

        return movieData;
        
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
}