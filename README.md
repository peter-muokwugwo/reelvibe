# 🎬 ReelVibe

Welcome to **ReelVibe**, a simple and fun app to discover movies you'll actually enjoy. Search for your favorites, explore trending films, and enjoy a smooth, clean interface, no hassle, no clutter. 

---

## ✨ What You Can Do

-  **Search Movies:** Quickly find your favorite films with the search bar.  
-  **Trending Movies:** See what’s popular right now.  
-  **Movie Details:** Check ratings, release year, language, and more.  
-  **Track Searches:** Appwrite keeps track of popular searches automatically.  
-  **Smooth Experience:** Debounced search for faster, smarter results.  
-  **Clean UI:** Polished design for a pleasant browsing experience.

---

## 🛠 How It Works

- **Header:** Displays the logo, hero image, and a tagline.  
- **Search:** Type to find movies.  
- **Movie Cards:** Shows movie poster, title, rating, year, and language.  
- **Trending Section:** Highlights movies that users are searching for the most.

---

## 💻 Built With

- **React + TypeScript** – Frontend  
- **Tailwind CSS** – Styling  
- **Appwrite** – Backend & database for trending searches  
- **TMDb API** – Movie data  
- **use-debounce** – Optimized search input

---

## 🔧 Utilities

- `fetchData` – Gets movies from TMDb API based on search or popularity.  
- `getTrendingMovies` – Fetches top trending movies from Appwrite.  
- `updateSearchCount` – Updates the number of times a movie has been searched.

---

## 🚀 Getting Started

1. **Clone the repo:**  
   ```bash
   git clone https://github.com/your-username/reelvibe.git
   ```

2. **Install dependencies:**  
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add your TMDb API key:**  
   Create a `.env` file in the root folder with:  
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   ```

4. **Start the app:**  
   ```bash
   npm run dev
   # or
   yarn dev
   ```

---


## Author

@peter-muokwugwo
---

## 📜 License

MIT License © 2025

