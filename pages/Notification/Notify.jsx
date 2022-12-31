import React from 'react'
import Style from '../styles/Notification.module.css'
import Image from 'next/image'
import Head from 'next/head'
import {AiOutlineHeart,AiFillEdit} from 'react-icons/ai'
import {BiBorderAll} from 'react-icons/bi'
import {BsCameraReels} from 'react-icons/bs'
import NotifyMap from './NotifyMap'

const Notify = () => {
  const Array = [
    {
      id:0,
      name:'Sujal Shah',
      type:'l',
      time:'10:45',
      comment:'awesome bro❤',
      image:'girl'
    },
    {
      id:1,
      name:'Rohan',
      type:'c',
      time:'09:05',
      comment:'bhai❤ 🎊🎊🎊🎆',
      image:'girl2'
    },
    {
      id:2,
      name:'Sujal Shah',
      type:'s',
      time:'10:45',
      comment:'awesome bro❤',
      image:'girl3'
    },
    {
      id:3,
      name:'Tamaya',
      type:'l',
      time:'05:50',
      comment:'awesome bro❤',
      image:'girl4'
    },
    {
      id:4,
      name:'King Joe',
      type:'c',
      time:'07:45',
      comment:'awesome bro❤',
      image:'girl5'
    },
    {
      id:5,
      name:'Crazy xyz',
      type:'s',
      time:'10:45',
      comment:'awesome bro❤',
      image:'girl6'
    },
    {
      id:6,
      name:'new_user',
      type:'c',
      time:'03:45',
      comment:'fantastic fabolous',
      image:'girl7'
    },
    {
      id:7,
      name:'Sujal Shah',
      type:'l',
      time:'10:45',
      comment:'awesome bro❤',
      image:'girl8'
    },
  ]
  return (
    <div className={Style.Notify}>
         <Head>
        <title>Wings Notifications</title>
        <meta name="description" content="Your notifications" />
        </Head>
      <div className={Style.section2}>
        <div className={Style.titlePost}>
            <h2>All <BiBorderAll  size={18} className={Style.iconGap}/> </h2>
            <h2>Status <BsCameraReels size={14} className={Style.iconGap}/> </h2>
            <h2>Comments <AiFillEdit size={18} className={Style.iconGap}/></h2>
            <h2>Like <AiOutlineHeart  size={18} className={Style.iconGap}/></h2>
        </div>
        <div className={Style.Photos}>
        {
          Array.map((e)=>{
            return<div key={e.id}>
               <NotifyMap name={e.name} type={e.type} time={e.time} comment={e.comment} image={e.image} id={e.id}/>
            </div>
          })
        }
         </div>
        </div>
    </div>
  )
}

export default Notify