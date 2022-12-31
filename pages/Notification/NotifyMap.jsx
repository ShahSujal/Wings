import React from 'react'
import Style from '../styles/NotifyMap.module.css'
import Image from 'next/image'
import { AiOutlineHeart,AiFillHeart} from 'react-icons/ai'

const NotifyMap = ({name,type,time,comment,image,id}) => {
    // const {name} = props
    console.log(name,type,time,comment,image,id);
    return (
        <div className={Style.notify}>
            <div className={Style.imageSpace}><Image src={require(`../../public/${image}.jpg`)} width={60} height={60} className={Style.PhotoRadius} alt={'no image'} priority={'low'}/></div>
            <div className={Style.details}>
                <h2>{name}</h2>
                <h4>{type=='c'?'commented on your post':type=='l'?'liked your post':type=='s'?'liked your status':''}</h4>
            </div>
            <div className={Style.commentDetails}>
            {type=="c"?<>
            <p>" {comment} "
            </p>
            <p className={Style.co}>
            like <AiFillHeart size={18} color={'red'} className={Style.iconGap}/>
            </p>
            </> 
            
            :<p></p>} 
            </div>
            <div className={Style.time}><h4>{time}</h4></div>
        </div>
    )
}
export default NotifyMap