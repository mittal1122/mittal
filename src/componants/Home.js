import React from 'react'

export const Home = (props) => {
  
  let text= "Hello rafc = erow function shortcut ";
  // document.write(text)
  let txt = text.length;
  console.log(props.products)

  return (
   <div>
     <h1>HOME</h1>
     <h2>{txt}</h2>
     <h3>{props.title  }</h3>
     {
       props.products.map((product)=>{
         return(
         <div>
           <h3>product.name</h3>
           <h3>product.price</h3>
           <h3>product.description</h3>

        {/* //  console.log(product.name)
        //  console.log(product.price)
        //  console.log(product.description) */}
        </div>
       )})
     }
      </div>
  )
  // console.log("")
  // console.info("")// same as log
  // console.warn("")// warning (heilited text)

  
}


