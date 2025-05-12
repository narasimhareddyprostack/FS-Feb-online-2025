import { useState } from "react";

let Product = ()=>{

    let [product,setProduct]=useState({
        product_Name:"HippoBikes 2020 Electric Bike",
        price:25000,
        qty:1,
        image:""
        })
    let decrHandler = ()=>{
        setProduct({...product, qty:product.qty-1})
    }
    let incrHanlder =()=>{
        setProduct({...product, qty:product.qty+1})
    }
    return <div>
           <h4>Product Component</h4>
           <h4>Product Name:{product.product_Name}</h4>
           <h5>Product Price:{product.price}</h5>
           <h4>Total:{product.price * product.qty}</h4>
           <button onClick={decrHandler}>-</button>
           {product.qty}
           <button onClick={incrHanlder}>+</button>

           </div>
}

export default Product;