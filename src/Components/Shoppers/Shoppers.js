import React , { Component } from 'react';
import Menu from '../../Containers/Menu/Menu';
import Preview from '../../Containers/Preview/Preview';
import Pre from '../../Containers/Preview_2/Pre';

class Shoppers extends Component{
    
    render(){
        

        return(
            <div>
                <Menu/>
                <Preview/>
                <Pre/>
            </div>
        );
    }
}

export default Shoppers;