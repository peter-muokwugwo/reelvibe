import type { Movie } from "../App";
import { updateSearchCount } from "./updateSearchCount";



export async function fetchData(searchTerm: string = ''): Promise<Movie[]> {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const API_BASE_URL = "https://api.themoviedb.org/3";
    const API_OPTIONS = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    };

    interface ApiMovie {
        results: Array<{
            id: number;
        title: string;
        poster_path: string;
        overview: string;
        release_date: string;
        vote_average: number;
        original_language: string;
        }> 
    }
    
    try {
        const endpoint = searchTerm
            ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(searchTerm)}`
            : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

        const response = await fetch(endpoint, API_OPTIONS);

        if (!response.ok) {
            throw new Error(`Failed to fetch movies. Status: ${response.status}`)
        }

        const mapToMovie = (rawMovie: ApiMovie['results'][number]): Movie => ({
            id: rawMovie.id,
            title: rawMovie.title,
            posterPath: rawMovie.poster_path,
            overview: rawMovie.overview,
            releaseDate: rawMovie.release_date,
            voteAverage: rawMovie.vote_average,
            originalLanguage: rawMovie.original_language
        })

        const data: ApiMovie = await response.json();

        const movies: Movie[] = data.results.map(mapToMovie)       


        if (searchTerm && movies.length > 0) {
            await updateSearchCount(searchTerm, movies[0])
        }

        return movies;

    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
}