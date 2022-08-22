import React, {Component} from 'react';
import "./Product.css";

class Product extends Component{
    state = {
        cart: [],
        total: 0,
    }

    currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }

    getTotal = () =>{
        return this.state.total.toLocaleString("en-US", this.currencyOptions)
    }

    add = () =>{
        this.setState({
            cart: ["ice cream"],
            total: 5,
        })
    }

    render(){
        return(
        <div className="wrapper">
            <div>
                Shopping Cart: {this.state.cart.length},
            </div>
            <div>Total Cost: {this.getTotal()}</div>
            <div className="product">
                <span role="img" aria-label="ice cream">🍦</span>
            </div>
            <button onClick={this.add}>Add</button>
            <button onClick="setState()">Remove</button>
        </div>
        )
    }
}

export default Product