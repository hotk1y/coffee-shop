import Link from "next/link";


export default function NotFound() {
   return (
      <div className="not_found">
         <h1>404</h1>
         <p>Page not found</p>
         <Link href="/">Go back to the main page</Link>
      </div>
   )
}