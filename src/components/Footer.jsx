
import Form from "./Form";
import Logo from "./Logo";
import Nav from "./Nav";
import "../styles/footer.scss";


export default function Footer() {
   return (
      <footer className="footer">
         <div className="footer__wrapper">
            <div className="footer__top">
               <div className={`$"footer__container} container`}>
                  <div className="footer__body">
                     <div className="footer__logo">
                        <Logo />
                     </div>
                     <Nav />
                     <Form />
                  </div>
               </div>
            </div>
            <div className="footer__bottom">
               <div className={`$"footer__container} container`}>
                  < div className="footer__bottom_copyright">e-Tennis © 2021. All rights reserved.</div>
               </div >
            </div >
         </div >
      </footer >
   )
}