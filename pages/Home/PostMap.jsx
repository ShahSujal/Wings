import React from 'react'
import Post from '../other/Post'
import Style from '../styles/PostStyle.module.css'

const PostMap = () => {
  return (
    <div className={Style.PostMap}>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    </div>
  )
}

export default PostMap