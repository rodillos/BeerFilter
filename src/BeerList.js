import React from 'react';
import NoResults from './NoResults';

const getFullBeer = (id) =>{{fetch('https://api.punkapi.com/v2/beers/'+ id)
	.then((response) => {
    	return response.json()
    })
    .then((recurso) => {
    	console.log(recurso)
    })}
}


class BeerList extends React.Component{

    render(){

        const beers = this.props.beer;
            debugger;
        const beerListItems = beers ? beers.map((beer) =>
            <div class="col-6">
                <image src={beer.image} />
                <strong>{beer.name}</strong>
                <small>{beer.alc + beer.ibu + beer.ebc}</small>
                <button onClick={getFullBeer(beer.id)}>Full info</button>
            </div>) : '';
    
        return(
            <div class="container">
                {beerListItems.size > 0 ? 
                    beerListItems
                    :
                    <NoResults />   
                }
            </div>)}     
}

export default BeerList;