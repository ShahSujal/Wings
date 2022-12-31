import React from 'react'
import Style from '../styles/ChatSectionStyle.module.css'
import ChatMap from './ChatMap'
import ChatUsersList from './ChatUsersList'
import Head from 'next/head'

const Chat = () => {
  return (
    <div className={Style.Chat}>
        <Head>
        <title>Wings Chats</title>
        <meta name="description" content="Your chats are here" />
      </Head>
        <ChatUsersList/>
        <ChatMap/>
    </div>
  )
}

export default Chat