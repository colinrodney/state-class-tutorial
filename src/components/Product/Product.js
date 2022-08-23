import React, {Component} from 'react';
import "./Product.css";

let products = [
    {
        emoji: '🍦',
        name: "ice cream",
        price: 5,
    },

    {
        emoji: '🍩',
        name: "donuts",
        price: 2.5,
    },

    {
        emoji: '🍉',
        name: "watermelon",
        price: 4,
    }

]

class Product extends Component{
    state = {
        cart: [],
        total: 0,
    }

    currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }

    
    getCart = () =>{
        return this.state.cart
    }

    getTotal = () =>{
        return this.state.total.toLocaleString("en-US", this.currencyOptions)
    }

    setTotal = () =>{
        return this.state.total - this.state.total.toLocaleString("en-US", this.currencyOptions)
    }

    // add = () =>{
    //     this.setState({
    //         cart: ["ice cream"],
    //         total: 5,
    //     })
    // }

    add = (products) =>{
        this.setState(state =>({
            cart:[...state.cart, products.name],
            total: [state.total + products.price],
        }))
    }

    remove = () =>{
        this.setState({
            cart: [],
            total: this.setTotal(),
        })
    }

    render(){
        return(
        <div className="wrapper">
            <div>
                Shopping Cart: {`total items ${this.state.cart.length}`},
            </div>
            <div>Total Cost: {this.getTotal()}</div>
            {products.map(product =>
                // parent/ wrapper element
                <div key={product.name}>
                    <div className="product">
                        <span role="img" aria-label={product.name}>{product.emoji}</span>
                    </div>
                    <button onClick={this.add(product)}>Add</button>
                    <button onClick={this.remove}>Remove</button>
                </div>
                )}
            {/* <div className="product">
                <span role="img" aria-label="ice cream">🍦</span>
            </div>
            <button onClick={this.add}>Add</button>
            <button onClick={this.remove}>Remove</button> */}
        </div>
        )
    }
}

export default Product