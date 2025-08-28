import { Query } from "appwrite";
import { appwriteConfig, databases } from "../appwrite/config";
import type { Movie } from "../App";

export async function getTrendingMovies(): Promise<Movie[]> {
    try {
        const response = await databases.listDocuments(
            appwriteConfig.DATABASE_ID,
            appwriteConfig.COLLECTION_ID,
            [Query.limit(5), Query.orderDesc('count')]
        )

        const movies: Movie[] = response.documents.map((doc) => ({
            id: doc.$id,
            title: doc.title,
            posterPath: doc.poster_path,
            overview: doc.overview,
            releaseDate: doc.realse_date,
        }));

        return movies;
    } catch (error) {
        console.error(`Failed to fetch trending movies: ${error}`);
        
        return []
    }
}