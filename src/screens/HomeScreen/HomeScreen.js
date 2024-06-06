import React, { useEffect, useState } from 'react'
import './HomeScreen.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Library from '../Library/Library.js'
import Feed from '../Feed/Feed.js'
import Trending from '../Trending/Trending.js'
import Player from '../Player/Player.js'
import Favourite from '../Favourites/Favourite.js'
import SideBar from '../../components/SideBar/SideBar.js'
import Login from '../auth/Login.js'
import { setClientToken } from '../../spotify.js'

const HomeScreen = () => {
  const [token, setToken] = useState('')
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    const hash = window.location.hash
    window.location.hash = ''
    if (!token && hash) {
      const _token = hash.split('&')[0].split('=')[1]
      window.localStorage.setItem('token', _token)
      setToken(_token)
      setClientToken(_token)
    } else {
      setToken(token)
      setClientToken(token)
    }
  }, [])
  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className='main-body'>
        <SideBar />
        <Routes>
          <Route path='/' element={<Library />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/player' element={<Player />} />
          <Route path='/favourite' element={<Favourite />} />
        </Routes>
      </div>
    </Router>
  )
}

export default HomeScreen
