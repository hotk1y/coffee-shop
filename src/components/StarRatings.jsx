
import { FaRegStar } from "react-icons/fa6";

export default function StarRatings({ rating, starDimension, starSpacing, starRatedColor }) {
   const stars = [];
   const starCount = 5;

   for (let i = 1; i <= starCount; i++) {
      stars.push(
         <span
            key={i}
            className={`star ${i <= rating ? 'filled' : ''}`}
            style={{
               display: 'inline-block',
               width: starDimension,
               height: starDimension,
               margin: starSpacing,
               backgroundColor: i <= rating ? starRatedColor : 'rgb(201, 158, 113)',
            }}
         />
      );
   }

   return (
      <div className="productsblock__item__rating">
         {stars}
      </div>
   );
   // <div className="productsblock__item__rating_star">
   //    <Image src={'/products/star.svg'} width={20} height={20} alt="Star" />
   //    <Image src={'/products/star.svg'} width={20} height={20} alt="Star" />
   //    <Image src={'/products/star.svg'} width={20} height={20} alt="Star" />
   //    <Image src={'/products/star.svg'} width={20} height={20} alt="Star" />
   //    <Image src={'/products/star.svg'} width={20} height={20} alt="Star" />
   // </div>
   //    <div className="productsblock__item__rating_text">4.5</div>
}