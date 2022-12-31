import React from 'react'
import Style from '../styles/ChatMap.module.css'
import Image from 'next/image'
import {BsCameraVideo} from 'react-icons/bs'
import {MdCall} from 'react-icons/md'
import {BiSend} from 'react-icons/bi'
import {AiOutlineAudio} from 'react-icons/ai'

const ChatMap = () => {
  return (
    <div className={Style.container}>
      {/* Section 1 */}
    <div className={Style.details}>
      <Image src={require('../../public/girl4.jpg')} width={60} height={60} alt={'no image found'} className={Style.detailsImage}/>
      <h2>Sujal Shah <br /> <p>online 32 min ago</p></h2>
      <div className={Style.CallSection}>
        <div className={Style.icon}>
         <MdCall size={32} color={'#fff'}/>
        </div>
        <div className={Style.icon}>
          <BsCameraVideo size={28} color={'#fff'}/>
        </div>
      </div>
    </div>

     {/* Section 2 */}
    <div className={Style.chatsScroll}>
      <div className={Style.contentMsg}>
        <h4 className={Style.sendMsg}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores dicta dolore corrupti nulla accusantium ex assumenda vel consequuntur fugit *.</h4>
      </div>
      {/* <div className={Style.contentMsg}> */}
     
      <div className={Style.contentMsg}>
      <div className={Style.recieveMsg}>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores dicta dolore corrupti nulla accusantium ex assumenda vel consequuntur fugit *. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid autem officiis nemo commodi praesentium soluta quisquam! Id non, ratione nesciunt molestias repudiandae animi doloribus, ipsam odit dolorum explicabo quidem aliquam!</h4>
      </div>
      </div>
      <div className={Style.contentMsg}>
        <h4 className={Style.sendMsg}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores dicta dolore corrupti nulla accusantium ex assumenda vel consequuntur fugit *.</h4>
      </div>
      <div className={Style.contentMsg}>
      <div className={Style.recieveMsg}>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores dicta dolore corrupti nulla accusantium ex assumenda vel consequuntur fugit *. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid autem officiis nemo commodi praesentium soluta quisquam! Id non, ratione nesciunt molestias repudiandae animi doloribus, ipsam odit dolorum explicabo quidem aliquam!</h4>
      </div>
      </div>
      <div className={Style.contentMsg}>
        <h4 className={Style.sendMsg}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores dicta dolore corrupti nulla accusantium ex assumenda vel consequuntur fugit *.</h4>
      </div>
      <div className={Style.contentMsg}>
      <div className={Style.recieveMsg}>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores dicta dolore corrupti nulla accusantium ex assumenda vel consequuntur fugit *. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid autem officiis nemo commodi praesentium soluta quisquam! Id non, ratione nesciunt molestias repudiandae animi doloribus, ipsam odit dolorum explicabo quidem aliquam!</h4>
      </div>
      </div>
      </div>

    {/* Section 3 */}
    <div className={Style.sendChat}>
      <input type="text" className={Style.inputSection} placeholder='Enter a message'/>
      <div className={Style.icon}>
      <AiOutlineAudio size={27} color={'#fff'}/>
        </div>
        <div className={Style.icon}>
        <BiSend size={27} color={'#fff'}/>
        </div>
   
  
    </div>
    </div>
    
  )
}

export default ChatMap