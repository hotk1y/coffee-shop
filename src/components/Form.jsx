
import { BiMailSend } from "react-icons/bi";

export default function Form() {
   return (
      <form action="#" className="form__footer_email">
         <input className="form__footer_input" type="email" placeholder="Enter your email" />
         <button className="form__footer_btn" type="submit">
            <BiMailSend size={20} />
         </button>
      </form>
   )
}