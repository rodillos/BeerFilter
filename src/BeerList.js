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
        const beerListItems = beers.map((beer) =>
            <tr key={beer.id}>  
                <td> <strong>{beer.name}</strong> </td>
                <td>
                    <small>{beer.abv}</small>
                </td>
                <td>
                    <small>{beer.ibu}</small>
                </td>
                <td>
                    <small>{beer.ebc}</small>
                </td>
                <td>
                    <img src={beer.image_url} alt={beer.name + " image"} style={{width:'10%', height:'19.9%'}}/>
                </td>
                <td>
                    <button onClick={getFullBeer(beer.id)}>Full info</button>
                </td>
            </tr>);
    
        const columns = ['name', 'abv', 'ibu','ebc','image','more']

        return(
            <div class="container">
                {beerListItems.length > 0 ?
                <table>
                    <thead >
                        <tr style={{backgroundColor: "grey"}}>
                            {columns.map((col) => 
                                <th>{col}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {beerListItems}
                    </tbody>
                </table>
                    :
                    <NoResults />   
                }
            </div>)}     
}

export default BeerList;