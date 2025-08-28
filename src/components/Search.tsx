import React from 'react'

interface SearchProps {
    search: string;
    setSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ search, setSearch}) => {
  return (
    <div className='search-term'>
        <h2>{search}</h2>
        <img src="./search.svg" alt="search image" />
        <input
            type='text'
            placeholder='Search your favourite movies'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
    </div>
  )
}

export default Search