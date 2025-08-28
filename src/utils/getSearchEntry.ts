import { Query } from "appwrite";
import { appwriteConfig, databases } from "../appwrite/config";

export async function getSearchEntry(searchTerm: string) {
    try {
        const response = await databases.listDocuments(
            appwriteConfig.DATABASE_ID,
            appwriteConfig.COLLECTION_ID,
            [Query.equal('searchTerm', searchTerm)]
        )

        return response.documents[0] || null;
    } catch (error) {
        console.error(`Failed to load search entry: ${error}`);
        
    }
}