import React from 'react'

class Product extends React.Component{
    state={
            product_Name:"HippoBikes 2020 Electric Bike",
            price:25000,
            qty:5,
            image:""
          }
    
    decrHandler = ()=>{
        this.setState({qty:this.state.qty -1})
    }
    render(){
        return <div>
           <h4>Product Component</h4>
           <h4>Product Name:{this.state.product_Name}</h4>
           <h5>Product Price:{this.state.price}</h5>
           <h4>Total:{this.state.price * this.state.qty}</h4>
           <button onClick={this.decrHandler}>-</button>
           {this.state.qty}
           <button >+</button>

           </div>
    }
}

export default Product