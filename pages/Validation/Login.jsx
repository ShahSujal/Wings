import React from 'react'
import Style from '../styles/Login.module.css'
import Image from 'next/image'
const Login = () => {
  return (
    <div className={Style.login}>
        <div className={Style.ImageContainer}>
            <Image src={require('../../public/jungleBook2.png')} width={'auto'} height={'auto'} alt={'no image'} className={Style.image}/>
        </div>

        <div className={Style.LoginContent}>
            <h2>Login now..</h2>
            <input type="text" placeholder='enter your username' />
            <input type="text" placeholder='enter your password' />
            <button>Login</button>
            <p>Create new account <h3>Sign in</h3></p>
        </div>
    </div>
  )
}

export default Login