'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import "../styles/header.scss";
import Logo from "./Logo";
import Nav from "./Nav";


export default function Header() {
   const [menuOpen, setMenuOpen] = useState(false);
   const [searchOpen, setSearchOpen] = useState(false);
   // Menu Burger / Open Menu ========================================================================================
   const isMenuOpen = () => {
      setMenuOpen(!menuOpen)
      document.querySelector('.body').classList.toggle('_menu__burger_active')
      return true
   }
   // Open Search ========================================================================================
   const isSearchOpen = () => {
      setSearchOpen(!searchOpen)
      document.querySelector('.body').classList.toggle('_header__search_active')
      document.querySelector('.body').classList.remove('_menu__burger_active')
   }
   // Menu Search Close ========================================================================================
   useEffect(() => {
      document.addEventListener('click', (e) => {
         if (menuOpen && e.target.closest('.menu__item')) {
            setSearchOpen(false)
            document.querySelector('.body').classList.remove('_menu__burger_active')
         }
         if (searchOpen && !e.target.closest('.header__search__form') && !e.target.closest('.header__search_btn')) {
            setSearchOpen(false)
            document.querySelector('.body').classList.remove('_header__search_active')
            document.querySelector('.header__search__form_input').value = ''
         }
         return false
      })
   }, [menuOpen, searchOpen])
   // Add Class Header Scroll ========================================================================================
   useEffect(() => {
      const addClassScroll = () => {
         const dataSet = document.body.dataset.scroll = window.scrollY
         if (dataSet > '90') {
            document.querySelector('.body').classList.add('_header__scroll')
         }
         if (dataSet < '90') {
            document.querySelector('.body').classList.remove('_header__scroll')
         }
         setSearchOpen(false)
         document.querySelector('.body').classList.remove('_header__search_active')
      }
      document.addEventListener('scroll', addClassScroll, { passive: true });
      addClassScroll();
   }, [])

   return (
      <header className="header">
         <div className="header__wrapper">
            <div className="header__container">
               <div className="header__body">
                  <Logo />
                  <Nav />
                  <div className="header__actions">
                     <button onClick={isSearchOpen} type="button" className="header__search_btn" >
                        <Image src={'/icons/search.svg'} width={30} height={30} alt="Search" />
                     </button>
                     <div className="header__cart">
                        <button type="button" className="header__cart_btn">
                           <Image src={'/icons/cart.svg'} width={30} height={30} alt="Cart" />
                           <span className="header__cart_btn_quantity">2</span>
                        </button>
                        <div className="header__cart_body">
                           <ul className="header__cart_list"></ul>
                        </div>
                     </div>
                     <button onClick={isMenuOpen} type="button" className="header__burger_btn">
                        <span></span>
                     </button>
                  </div>
                  <form action="#" className="header__search__form">
                     <input className="header__search__form_input" type="text" placeholder="Search..." />
                     <button className="header__search__form_btn" type="submit">
                        <Image src={'/icons/search.svg'} width={40} height={40} alt="Input Search" />
                     </button>
                  </form>
               </div >
            </div >
         </div >
      </header >
   )
}
