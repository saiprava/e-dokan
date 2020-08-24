import React, { Component } from 'react';
import './CartDropdown.css';
import {connect} from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { IconButton } from '@material-ui/core';

class CartDropdown extends Component{
    constructor(props){
        super(props);
        this.state ={
            count: 1,
            items: props.items
        }
    }
    render(){
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    this.state.items.map((item) => {
                        return(
                            <div className="Item">
                                <h1>{item.name}</h1>
                                <h1>Rs.{item.price}</h1>
                                <IconButton onClick = {()=> this.setState({count: this.state.count+1})}><AddIcon fontSize="small"/></IconButton>
                                <h1>{this.state.count}</h1>
                                <IconButton onClick = {() => this.setState({count: this.state.count-1})}><RemoveIcon fontSize="small"/></IconButton>
                            </div>
                        );
                    })
                }
                <button>Go to checkout</button>
            </div>
        </div>
    );
}
}

let mapStateToProps = function mapStateToProps({cart}){
    
    return{
        items : cart.cart
}
}
export default connect(mapStateToProps)(CartDropdown);