import React , {Component} from 'react';
//import { addFavorites } from '../../../Redux/Cart/cart.action';
import {connect} from 'react-redux';
import './Favorites.css';

class Favorites extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: this.props.favorites
        }
    }
    render(){
        return(
            <div className="Fav">
               { this.state.items === [] ?
                    <h1>No items added!!</h1> :
                    this.state.items.map((item) => {
                        return(
                            <div key={item.id} className="Favv">
                            <img src={item.imageUrl} alt={item.name}/>
                            <div className="Favvv">
                        <h1>{item.name}</h1>
                        
                        </div>
                        </div>
                        );
                    })
                }
            </div>
            
        );
    }
}
const mapStateToProps = ({cart}) =>({
    favorites : cart.favorites
})

export default connect(mapStateToProps)(Favorites);