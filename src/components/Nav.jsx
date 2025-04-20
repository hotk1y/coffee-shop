'use client'

import Link from "next/link";
import { menuLinks } from "../lib/db";
import { usePathname } from "next/navigation";

export default function Nav({ isMenuClose }) {

   const pathname = usePathname()

   return (
      <div className="menu__body">
         <ul className="menu__list">
            {menuLinks.map((item, index) => (
               <li key={index} className="menu__item">
                  <Link onClick={isMenuClose} href={item.path} className={`menu__link ${pathname === item.path ? '_menu__link_active' : ''}`}>{item.value}</Link>
               </li>
            ))}
         </ul>
      </div >
   )
}