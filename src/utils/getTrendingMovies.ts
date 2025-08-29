import { Query } from "appwrite";
import { appwriteConfig, databases } from "../appwrite/config";
import type { Movie } from "../App";

export async function getTrendingMovies() {
    try {
        const response = await databases.listDocuments(
            appwriteConfig.DATABASE_ID,
            appwriteConfig.COLLECTION_ID,
            [Query.limit(5), Query.orderDesc('count')]
        )

        const movies: Movie[] = response.documents.map((doc) => ({
            id: doc.movie_id,
            title: doc.searchTerm || 'Unknown',
            posterPath: doc.poster_path,
            overview: '',
            releaseDate: '',
            voteAverage: 0,
            originalLanguage: ''
        }));

        return movies;
    } catch (error) {
        console.error(`Failed to fetch trending movies: ${error}`);
        
        return []
    }
}