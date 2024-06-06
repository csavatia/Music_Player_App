import React, { useEffect, useState } from 'react'
import './SideBar.css'
import SideBarButton from './SideBarButton.js'
import { MdFavorite, MdSpaceDashboard } from 'react-icons/md'
import { FaPlay, FaGripfire, FaSignOutAlt } from 'react-icons/fa'
import { IoLibrary } from 'react-icons/io5'
import apiClient from '../../spotify.js'

const SideBar = () => {
  const [image, setImage] = useState(
    'https://images.unsplash.com/photo-1600497900863-2dfbeedb06a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  )
  useEffect(() => {
    apiClient.get('me').then((response) => {
      setImage(response.data.images[0].url)
      console.log(response)
    })
  }, [])
  return (
    <div className='sidebar-container'>
      <img src={image} alt='profile' className='profile-img' />
      <div>
        <SideBarButton title='Feed' to='/feed' icon={<MdSpaceDashboard />} />
        <SideBarButton title='Trending' to='/trending' icon={<FaGripfire />} />
        <SideBarButton title='Player' to='/player' icon={<FaPlay />} />
        <SideBarButton
          title='Favourites'
          to='/favourite'
          icon={<MdFavorite />}
        />
        <SideBarButton title='Library' to='/' icon={<IoLibrary />} />
      </div>
      <SideBarButton title='Sign Out' to='' icon={<FaSignOutAlt />} />
    </div>
  )
}

export default SideBar
