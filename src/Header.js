import React from 'react';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Body from './Body';

//const showMeTheBeer = (filter , param) => {fetch('https://api.punkapi.com/v2/beers')

function getFullBeer(beer){
    this.proptypes.beer = String;
    const fullBeer = () => {fetch('https://api.punkapi.com/v2/beers/'+ beer)
    .then((response) => {
        return response.json()
    })}
    return(
        <div>
            Esta es tu birra mostro
            {fullBeer}
        </div>
    )
}

class Header extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            filter :'',
            param : '',
            beerDataArray: []
        }
    }

    render(){
        const showMeTheBeer = () => {
            const {filter, param} = this.state;
            const filterParams = (filter != '' && param != '') ? (filter +'='+ param) : ''; 
            let url = 'https://api.punkapi.com/v2/beers?' + filterParams; 
            fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((recurso) => {
                console.log(recurso)
                this.setState({beerDataArray :recurso });
            })}
        
        const setFilter = (event) => {
            this.setState({filter : event.target.value});
        }

        const setParam = (event) => {
            this.setState({param : event.target.value});
        }

        return(
            <div>
                <nav>
                    <div className="container">
                        <b>Beer Finder</b>
                        <div className="collapse navbar-collapse" id="navcol-1" style={{width: '75%'}}>
                            <i style={{marginRight: '8px'}} />
                            <input type="search" style={{width: '479px', marginRight: '10%'}} onChange={setParam}/>
                            <Select
                                labelId="Filter"
                                id="filter"
                                value={this.props.filter}
                                displayEmpty
                                onChange= {setFilter} >
                                <MenuItem default>Filter</MenuItem>
                                <MenuItem value={'abv_gt'}>ALC %</MenuItem>
                                <MenuItem value={'ibu_gt'}>IBU %</MenuItem>
                                <MenuItem value={'ebc_gt'}>EBC </MenuItem>
                            </Select>
                            <Button color="primary" onClick={showMeTheBeer}> Find! </Button>
                        </div>
                    </div>
                </nav>
                <div>
                    <Body beer={this.state.beerDataArray} />
                </div>
            </div>)
    }
}

export default Header;