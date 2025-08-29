import React from 'react'

const Header = () => {
  return (
    <div className='wrapper'>
      <header>
          <img src="./reel.svg" alt="reelvibe logo" className='w-24 h-24' />
        <img src="./hero-img.png" alt="reelvibe hero" />
        <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle.</h1>
      </header>
    </div>
  )
}

export default Header