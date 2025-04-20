'use client'
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Button from "../components/Button";
import ButtonUp from "../components/ButtonUp";
import Loading from "./loading";
import Chat from "@/components/Chat";
import StarRatings from "@/components/StarRatings";


export default function Home() {
   const cartIcons = "/products/cart.svg"

   const [openModalVideo, setOpenModalVideo] = useState(false);
   const playVideo = () => {
      setOpenModalVideo(!openModalVideo)
      document.querySelector('.body').classList.toggle('_play__video_active')
      setTimeout(() => {
         document.getElementById('mainblock__video').play()
      }, 500)
      if (openModalVideo) {
         document.getElementById('mainblock__video').pause()
      }
   }

   useEffect(() => {
      document.addEventListener('click', (e) => {
         if (openModalVideo && e.target.closest('.mainblock__btn_play') && e.target.closest('.modal')) {
            setOpenModalVideo(false)
            document.querySelector('.body').classList.remove('_play__video_active')
         }
         return false
      })
   }, [openModalVideo])
   return (
      <main className="main">
         <section className="mainblock">
            <div className="mainblock__container container">
               <div className="mainblock__body">
                  <div className="mainblock__column">
                     <h1 className="mainblock__title">Enjoy Your <br /> Morning Coffee.</h1>
                     <div className="mainblock__text">The coorow brewed by fist roasting the green coffee <br /> beans over hot coals in brazier. given to Opportunity</div>
                     <div className="mainblock__btn">
                        <Button>Test Coffee</Button>
                        <button onClick={playVideo} type="button" className="mainblock__btn_play" />
                     </div >
                  </div >
                  <div className="mainblock__column">
                     <div className="mainblock__video_body">
                        <button type="button" className="mainblock__btn_close" />
                        <video className="mainblock__video" controls muted id="mainblock__video" preload="/main/main.jpeg" width={500} height={400} alt="Video Coffee">
                           <source src="/main/coffee.mp4" type="video/mp4" />
                        </video>
                     </div>
                  </div >
               </div >
            </div >
         </section >
         <section className="aboutblock">
            <div className="aboutblock__container container">
               <div className="aboutblock__body">
                  <div className="aboutblock__column">
                     <div className="aboutblock__item">
                        <div className="aboutblock__item_title">
                           <span>01</span>
                           Best Coffee Flavour
                        </div>
                        <Suspense fallback={<Loading />}>
                           <div className="aboutblock__item_img">
                              <Image src={'/about/01.jpeg'} width={366} height={420} alt="Best Coffee Flavour" />
                           </div>
                        </Suspense>
                     </div>
                  </div>
                  <div className="aboutblock__column">
                     <div className="aboutblock__item">
                        <div className="aboutblock__item_title">
                           <span>02</span>
                           Place to get lost
                        </div>
                        <div className="aboutblock__item_img">
                           <Image src={'/about/02.jpeg'} width={366} height={420} alt="Place to get lost" />
                        </div>
                     </div>
                  </div>
                  <div className="aboutblock__column">
                     <div className="aboutblock__item">
                        <div className="aboutblock__item_title">
                           <span>03</span>
                           Proper roesting
                        </div>
                        <div className="aboutblock__item_img">
                           <Image src={'/about/03.jpeg'} width={366} height={420} alt="Proper roesting" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section >
         <section className="historyblock">
            <div className="historyblock__container container">
               <div className="historyblock__body">
                  <div className="historyblock__image">
                     <div className="historyblock__column_img_1">
                        <div className="historyblock__img_1">
                           <Image src={'/history/01.jpeg'} width={300} height={300} alt="Image_1" />
                        </div>
                        <div className="historyblock__img_2">
                           <Image src={'/history/02.jpeg'} width={300} height={300} alt="Image_2" />
                        </div>
                     </div>
                     <div className="historyblock__img_3">
                        <Image src={'/history/03.jpeg'} width={300} height={632} alt="Image_3" />
                     </div>
                  </div>
                  <div className="historyblock__content">
                     <div className="historyblock__label label__block">Our history</div>
                     <h2 className="historyblock__title title__block">Create a new story with us</h2>
                     <p className="historyblock__text text__block">mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt. donec et nibh maximus, est eu, mattis nuce. preasent ut quam quis quam venen atis fringilla. morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.</p>
                  </div>
               </div>
            </div>
         </section>
         {/* <section className="productsblock">
            <div className="productsblock__container container">
               <div className="productsblock__body">
                  <div className="productsblock__label label__block">Popular Product</div>
                  <h2 className="productsblock__title title__block">Coffee popular Product</h2>
                  <div className="productsblock__content">
                     <aside className="productsblock__item">
                        <div className="productsblock__item_img">
                           <Image src={'/products/coffee.jpeg'} width={270} height={343} alt="Product_1" />
                        </div>
                        <div className="productsblock__item__rating">
                           <div className="productsblock__item__rating_label">Coffee</div>
                           <StarRatings />
                        </div>
                        <h3 className="productsblock__item_name">brazil coffee gred</h3>
                        <div className="productsblock__item__price">Price - <span>$320.00 /</span> $358</div>
                        <Button styleProduct={'button__product'}>
                           <Image src={'/icons/cart.svg'} width={24} height={24} alt="Cart" />
                           <span>A</span>dd to cart
                        </Button>
                     </aside>
                  </div>
               </div>
            </div>
         </section> */}
         <Chat />
         <ButtonUp />
      </main >
   );
}
