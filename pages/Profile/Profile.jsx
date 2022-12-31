import React from 'react'
import Style from '../styles/ProfileStyle.module.css'
import Image from 'next/image'
import {FaHashtag} from 'react-icons/fa'
import {MdSlowMotionVideo} from 'react-icons/md'
import {BsCameraReels} from 'react-icons/bs'
import {RiGalleryFill} from 'react-icons/ri'
const Profile = () => {
  return (
    <div className={Style.profile}>
        <div className={Style.section1}>
        <div className={Style.subSectionImg}>
        <Image src={require('../../public/girl.jpg')} width={200} height={200} alt='no image' className={Style.image}/>
        </div>
        <div className={Style.subSection}>
        <div className={Style.row1}>
            <h2>Sujal Shah</h2>
            <button>Follow</button>
            <button>message</button>
            <button>more</button>
        </div>
        <div className={Style.row2}>
            <h3>{3} posts</h3>
            <h3>{12} followers</h3>
            <h3>{13} followings</h3>
        </div>
        <div className={Style.row3}>
            <h2>Hello myself jenni dizosa <br /> #creator</h2>
            <h4>NewYork</h4>
            <p>followed by sujal and 45 others</p>
        </div>
        </div>
        </div>
        <div className={Style.section2}>
        <div className={Style.titlePost}>
            <h2>Posts <RiGalleryFill size={18} className={Style.iconGap}/> </h2>
            <h2>Tagged <FaHashtag size={14} className={Style.iconGap}/> </h2>
            <h2>Reels <MdSlowMotionVideo size={18} className={Style.iconGap}/></h2>
            <h2>Videos <BsCameraReels size={14} className={Style.iconGap}/></h2>
        </div>
        <div className={Style.Photos}>
            <Image src={require('../../public/girl2.jpg')} width={300} height={300} alt={'no image found'} className={Style.PhotoRadius}/>
            <Image src={require('../../public/girl.jpg')} width={300} height={300} alt={'no image found'} className={Style.PhotoRadius}/>
            <Image src={require('../../public/girl4.jpg')} width={300} height={300} alt={'no image found'} className={Style.PhotoRadius}/>
            <Image src={require('../../public/girl3.jpg')} width={300} height={300} alt={'no image found'} className={Style.PhotoRadius}/>
            <Image src={require('../../public/girl2.jpg')} width={300} height={300} alt={'no image found'} className={Style.PhotoRadius}/>
            <Image src={require('../../public/girl.jpg')} width={300} height={300} alt={'no image found'} className={Style.PhotoRadius}/>
        </div>
        </div>
    </div>
  )
}

export default Profile