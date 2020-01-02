import React from 'react';
import BeerList from './BeerList';

class Body extends React.Component{
    render(){
        return(
            <div>
                {!!this.props.beer ? 
                    <BeerList beer = {this.props.beer}/>
                    :
                    <div> no buscaste nada todavia </div>
                }
            </div>
        )
        }
    
}
export default Body;