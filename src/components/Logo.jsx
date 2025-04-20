
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
   return (
      <Link className="logo__link" href={'/'} >
         <Image className="logo__image" priority src={'/logo.png'} width={72} height={60} alt="Logo" />
      </Link >
   )
}