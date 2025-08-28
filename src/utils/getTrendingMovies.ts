import { Query } from "appwrite";
import { appwriteConfig, databases } from "../appwrite/config";

export async function getTrendingMovies() {
    try {
        const response = await databases.listDocuments(
            appwriteConfig.COLLECTION_ID,
            appwriteConfig.COLLECTION_ID,
            [Query.limit(5), Query.orderDesc('count')]
        )

        return response.documents;
    } catch (error) {
        console.error(`Failed to fetch trending movies: ${error}`);
        
    }
}