

export default function Button({ children, styleProduct }) {
   return (
      <button className={`button ${styleProduct}`}>
         {children}
      </button>
   )
}