import React from 'react'
import Style from '../styles/ChatUserList.module.css'
import Image from 'next/image'
const ChatUsersList = () => {
  return (
    <div className={Style.container}>
      {/* user start */}
    <div className={Style.info}>
      <Image src={require('../../public/girl.jpg')} width={50} height={50} alt={'no image found'} className={Style.image}/>
     <div className={Style.details}>
     <h2>Sujal Shah</h2>
      <p >liked your post</p>
     </div>
      <div className={Style.time}><p>10:55</p></div>
    </div>
    {/* user end */}
      {/* user start */}
    <div className={Style.info}>
      <Image src={require('../../public/girl.jpg')} width={50} height={50} alt={'no image found'} className={Style.image}/>
     <div className={Style.details}>
     <h2>Sujal Shah</h2>
      <p >liked your post</p>
     </div>
      <div className={Style.time}><p>10:55</p></div>
    </div>
    {/* user end */}
      {/* user start */}
    <div className={Style.info}>
      <Image src={require('../../public/girl4.jpg')} width={50} height={50} alt={'no image found'} className={Style.image}/>
     <div className={Style.details}>
     <h2>Sujal Shah</h2>
      <p >liked your post</p>
     </div>
      <div className={Style.time}><p>10:55</p></div>
    </div>
    {/* user end */}
      {/* user start */}
    <div className={Style.info}>
      <Image src={require('../../public/girl2.jpg')} width={50} height={50} alt={'no image found'} className={Style.image}/>
     <div className={Style.details}>
     <h2>Sujal Shah</h2>
      <p >liked your post</p>
     </div>
      <div className={Style.time}><p>10:55</p></div>
    </div>
    {/* user end */}
      {/* user start */}
    <div className={Style.info}>
      <Image src={require('../../public/girl.jpg')} width={50} height={50} alt={'no image found'} className={Style.image}/>
     <div className={Style.details}>
     <h2>Sujal Shah</h2>
      <p >liked your post</p>
     </div>
      <div className={Style.time}><p>10:55</p></div>
    </div>
    {/* user end */}
      {/* user start */}
    <div className={Style.info}>
      <Image src={require('../../public/girl2.jpg')} width={50} height={50} alt={'no image found'} className={Style.image}/>
     <div className={Style.details}>
     <h2>Sujal Shah</h2>
      <p >liked your post</p>
     </div>
      <div className={Style.time}><p>10:55</p></div>
    </div>
    {/* user end */}
      {/* user start */}
    <div className={Style.info}>
      <Image src={require('../../public/girl4.jpg')} width={50} height={50} alt={'no image found'} className={Style.image}/>
     <div className={Style.details}>
     <h2>Sujal Shah</h2>
      <p >liked your post</p>
     </div>
      <div className={Style.time}><p>10:55</p></div>
    </div>
    {/* user end */}




    </div>
  )
}

export default ChatUsersList