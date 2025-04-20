'use client'
import React, { useState, useEffect } from 'react';
import { GrChat } from "react-icons/gr";
import { IoIosArrowUp } from "react-icons/io";
import Logo from './Logo';


export default function Chat() {

   const [openChat, setOpenChat] = useState(false);
   const toggleChat = () => {
      setOpenChat(!openChat);
      document.querySelector('.body').classList.toggle('_chat__active');
   }

   useEffect(() => {
      document.addEventListener('click', (e) => {
         if (openChat && e.target.closest('chat')) {
            setOpenChat(false);
            document.querySelector('.body').classList.remove('_chat__active')
         }
         return false
      })
   }, [openChat])

   return (
      <div className="chat">
         <button onClick={toggleChat} type="button" className="chat__btn">
            {!openChat ? <GrChat /> : <IoIosArrowUp />}
         </button>
         <div className="chat__body">
            <div className="chat__top">
               <Logo />
               {/* <div className="chat__title">Hotk3y</div> */}
            </div>
            {/* <div className="chat__text">We are here to help you!</div> */}
            {/* <form className="chat__form">
               <input type="text" placeholder="Type your message..." className="chat__input" />
               <button type="submit" className="chat__send">Send</button>
            </form> */}
            <div className="chat__bottom">

            </div>
         </div>
      </div>
   )
}