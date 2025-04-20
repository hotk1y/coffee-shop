'use client'
import React, { useEffect, useState } from 'react';
// import { IoIosArrowUp } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
// import "../styles/buttonUp.scss";

export default function ButtonUp() {
   const [up, setUp] = useState(false);
   const upButton = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   }
   useEffect(() => {
      const addClassScroll = () => {
         const dataSet = document.body.dataset.scroll = window.scrollY
         // const minHeight = document.documentElement.clientHeight
         if (dataSet > '100') {
            setUp(true)
            document.querySelector('.body').classList.add('_button__up_active')
         }
         if (dataSet < '100') {
            setUp(false)
            document.querySelector('.body').classList.remove('_button__up_active')
         }
      }
      document.addEventListener('scroll', addClassScroll, { passive: true });
      addClassScroll();
   }, [])
   return (
      <button onClick={upButton} type="button" className={up ? "button__up active" : "button__up"}>
         <FaArrowRight size={30} />
      </button>
   )
}