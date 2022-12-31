import React from 'react'
import Image from 'next/image'
import Style from '../styles/PostStyles.module.css'
import { AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai'
import { CiLocationArrow1 } from 'react-icons/ci'
import { BiMessageSquareEdit } from 'react-icons/bi'
const Post = () => {
  return (
    <div className={Style.container}>
      <div className={Style.title}>
        <div className={Style.img}>
          <Image src={require('../../public/girl4.jpg')} width={70} height={70} alt="" className={Style.borderS} />
        </div>
        <div className={Style.contain}>
          <h3>Sujal Shah <br /> <span>Jhabua, India </span></h3>
        </div>
        <div className={Style.TimeLoc}>
          <h4>10:55 A.M.</h4>
        </div>
      </div>
      <div className={Style.split}>
        <div className={Style.imgMain}>

          <Image src={require('../../public/girl4.jpg')} width={100} height={100} alt="" />
        </div>

        <div className={Style.shareContain}>
          <div className={Style.shareContain1}>
            <AiOutlineHeart size={28} color={'#fff'} className={Style.likes} />
            <BiMessageSquareEdit size={28} color={'#fff'} className={Style.likes} />
            <CiLocationArrow1 size={28} color={'#fff'} className={Style.likes} />
            <AiOutlineShareAlt size={28} color={'#fff'} className={Style.likes} />
          </div>
          <div className={Style.shareContain2}>
            <h4 className={Style.likes}>3,400 likes</h4>
            <h5>Sujal Shah <span>thanks for your likes and comments....</span> <div>#css #instagram #awesome</div></h5>
            <p>view all 300 comments</p>
          </div>
          <div className={Style.shareContain3}>
            <div className={Style.user}>
              <Image src={require('../../public/girl4.jpg')} width={70} height={70} alt="" className={Style.borderS} />
              <input type="text" placeholder="add a comment" />
            </div>
            <span>4 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post