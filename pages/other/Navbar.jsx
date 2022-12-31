import React from 'react'
import Style from '../styles/NavBarStyle.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {BiHomeHeart} from 'react-icons/bi'
import {RiChatSmileLine,RiRocket2Line} from 'react-icons/ri'
import {MdWorkspacesOutline} from 'react-icons/md'
import {FaDraftingCompass,FaRegHeart,FaSearch} from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
    <div className={Style.nav}>
    <div className={Style.logo}>
      <h2>WINGS</h2>
      <Image src={require('../../public/wing.png')} alt="hhh" width={40} height={40} className={Style.image}/>
    </div>
    <div className={Style.searchBar}>
      <div className={Style.inputBox}>
       <input type="text" name="serach" className={Style.search} placeholder={'Search user'}/>
      <FaSearch size={18} className={Style.icon}/>
      </div>
    </div>
    <div className={Style.links}>
      <Link href={'/'}>
        <BiHomeHeart size={23} className={Style.iconio}/>
      </Link>
      <Link href={'/Chat/Chat'}>
      <MdWorkspacesOutline size={23} className={Style.iconio}/>
      </Link>
      <Link href={'/'}>
      <RiRocket2Line size={23} className={Style.iconio}/>
      </Link>
      <Link href={'/Notification/Notify'}>
      <FaRegHeart size={23} className={Style.iconio}/>
      </Link>
      <Link href={'/Profile/Profile'}>
      <Image src={require('../../public/girl.jpg')} alt='no image' width={30} height={30} className={Style.profile}/>
      </Link>
      
    </div>
    </div>
    </>
  )
}

export default Navbar