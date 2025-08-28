import { Client, Databases } from "appwrite";

export const appwriteConfig = {
  PROJECT_ID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  ENDPOINT: import.meta.env.VITE_APPWRITE_ENDPOINT,
  DATABASE_ID: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  COLLECTION_ID: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.ENDPOINT)
  .setProject(appwriteConfig.PROJECT_ID);

const databases = new Databases(client);

export { client, databases };
