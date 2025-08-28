import { ID } from "appwrite";
import type { Movie } from "../App";
import { appwriteConfig, databases } from "../appwrite/config";
import { getSearchEntry } from "./getSearchEntry";

export async function updateSearchCount(searchTerm: string, movie: Movie) {
    try {
       const existingDoc = await getSearchEntry(searchTerm);
       if (existingDoc) {
        await databases.updateDocument(
            appwriteConfig.DATABASE_ID,
            appwriteConfig.COLLECTION_ID,
            existingDoc.$id,
            { count: existingDoc.count + 1 }
        );
       } else {
        await databases.createDocument(
            appwriteConfig.DATABASE_ID,
            appwriteConfig.COLLECTION_ID,
            ID.unique(),
            { searchTerm, count: 1, movieId: movie.id, posterPath: `https://image.tmdb.org/t/p/w500/${movie.posterPath}`}
        );
       }
    } catch (error) {
        console.error(`Failed to update search count: ${error}`);
        
    }
}