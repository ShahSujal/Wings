import React from 'react'
import Chat from '../Chat/Chat'
import Navbar from '../other/Navbar'
import Profile from '../Profile/Profile'
import PostMap from './PostMap'
import StatusMap from './StatusMap'
// intial phase
const HomeScreen = () => {
  return (
    <>
    {/* <Navbar/> */}
    <StatusMap />
    <PostMap/>
    </>
  )
}

export default HomeScreen