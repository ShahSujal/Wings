import React from 'react'
import Style from '../styles/StatusBar.module.css'
import Image from 'next/image'
const StatusMap = () => {
  return (
    <div className={Style.container}>
     <div className={Style.content}>
      <div className={Style.circle}>
        <Image src={require('../../public/girl2.jpg')} width={76} height={76} className={Style.statusImage}/>
      </div>
      <div className={Style.circle}>
        <Image src={require('../../public/girl.jpg')} width={76} height={76} className={Style.statusImage}/>
      </div>
      <div className={Style.circle}>
        <Image src={require('../../public/girl2.jpg')} width={76} height={76} className={Style.statusImage}/>
      </div>
      <div className={Style.circle}>
        <Image src={require('../../public/girl4.jpg')} width={76} height={76} className={Style.statusImage}/>
      </div>
      <div className={Style.circle}>
        <Image src={require('../../public/girl2.jpg')} width={76} height={76} className={Style.statusImage}/>
      </div>
      <div className={Style.circle}>
        <Image src={require('../../public/girl4.jpg')} width={76} height={76} className={Style.statusImage}/>
      </div>
      <div className={Style.circle}>
        <Image src={require('../../public/girl.jpg')} width={76} height={76} className={Style.statusImage}/>
      </div>
      <div className={Style.circle}>
        <Image src={require('../../public/girl2.jpg')} width={76} height={76} className={Style.statusImage}/>
      </div>
      <div className={Style.circle}>
        <Image src={require('../../public/girl4.jpg')} width={76} height={76} className={Style.statusImage}/>
      </div>
      <div className={Style.circle}>
        <Image src={require('../../public/girl4.jpg')} width={76} height={76} className={Style.statusImage}/>
      </div>
      <div className={Style.circle}>
        <Image src={require('../../public/girl4.jpg')} width={76} height={76} className={Style.statusImage}/>
      </div>
      <div className={Style.circle}>
        <Image src={require('../../public/girl4.jpg')} width={76} height={76} className={Style.statusImage}/>
      </div>
      <div className={Style.circle}>
        <Image src={require('../../public/girl.jpg')} width={76} height={76} className={Style.statusImage}/>
      </div>
      
      </div>    
    </div>
  )
}

export default StatusMap