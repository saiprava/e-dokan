import React , {Component}from 'react';
import './ShopHats.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {connect} from 'react-redux';
import {addFavorites,removeFavorites,addCart,removeCart} from '../../../../Redux/Cart/cart.action';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';



class ShopHats extends Component{
    constructor(props){
        super(props);
        this.state = {
            changeIcon : false,
            name: props.itemlist.name,
            imgUrl : props.itemlist.imageUrl,
            price: props.itemlist.price,
            id: props.itemlist.id,
            count: 0,
            item: props.itemlist,
            cart: false
        }
    }
    favouriteHandler = () => {
        this.setState({changeIcon: !this.state.changeIcon})
        if(!this.state.changeIcon){
            this.props.addFavorites(this.state.item);
        }
        else{
            this.props.removeFavorites(this.state.id);
        }
    }
    cartHandler = () => {
        this.setState({cart: !this.state.cart})
        if(!this.state.cart){
            this.props.addCart(this.state.item);
        }
        else {
            this.props.removeCart(this.state.id);
        }
    }
    render(){
        
    return (
        <div className="Products">
        <div className="Shop">
                 <img alt= {this.state.name} src={this.state.imgUrl}/>
                 <div className="Tags">
                 <h1>{this.state.name}</h1> 
                 
                 <IconButton
                    onClick={this.favouriteHandler}>
                    {this.state.changeIcon ? <FavoriteIcon color="secondary" />:<FavoriteBorderIcon />}
                    </IconButton>
                    
                <h2>Rs.{this.state.price}</h2>
                
                 </div>
                 {this.state.cart ?<button type="button" className="Button" onClick={this.cartHandler}> <RemoveShoppingCartIcon className="Icon" fontSize="small"/>REMOVE
                     </button>:<button type="button" className="Button" onClick={this.cartHandler}> <AddShoppingCartIcon className="Icon" fontSize="small"/>ADD TO CART
                     </button> }
                 
        </div>
        </div>
    );
    }
}

const mapDispatchToProps = dispatch => ({
    addFavorites : item => dispatch(addFavorites(item)),
    removeFavorites: id => dispatch(removeFavorites(id)),
    addCart: item => dispatch(addCart(item)),
    removeCart : id => dispatch(removeCart(id))
})

export default connect(null,mapDispatchToProps)(ShopHats);