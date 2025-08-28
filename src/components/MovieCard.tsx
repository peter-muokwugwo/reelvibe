import React from 'react'
import type { Movie } from '../App'

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({movie: {title, posterPath, releaseDate, voteAverage, originalLanguage}}) => {
  return (
    <div className='movie-card'>
        <img
            src={
                posterPath
                ? `https://image.tmdb.org/t/p/w500/${posterPath}`
                : './no-poster.png'
            }
            alt={title}
            />

            <h3>{title}</h3>

            <div className='rating'>
                <img
                    src='./rating.svg'
                    alt='rating star'
                    />
                    <p>{voteAverage ? voteAverage.toFixed(1) : 'N/A'}</p>
            </div>

             <div>
                <span>.</span>
                <p>{originalLanguage}</p>
            </div>

            <div>
                <span>.</span>
                <p>{releaseDate ? releaseDate.split('-')[0] : 'N/A'}</p>
            </div>
    </div>
  )
}

export default MovieCard