import '../App.css';
import React, {useState} from 'react';
import Searchbar from './Searchbar'
import Card from './card';


function App() {


  const [pokemon, setPokemon] = useState({name: "Search result will be displayed Here", index:"", sprites: {front_default: ""}, weight: "", height: "", stats: [], abilities: []});

  const search = async (e) => {
    var str = e.target.getAttribute("data");
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const endpoint = `${url}${str}`;

   
    await fetch(endpoint, {
      method: 'GET',
    }).then(response => {
      if(response.ok){
        return response.json();  
      }
    }, networkError => {
      console.log(networkError.message);
    }).then(async jsonResponse => {
      return await setPokemon(jsonResponse ? jsonResponse : {name: "This pokemon does not exist", index:"", sprites: {front_default: ""}, weight: "", height: "", stats: [], abilities: []});
    })

  }


  return (
    <div className="App">
      <div className="search-cont">
        <Searchbar search={search}/>
      </div>
      <div className='other-cont'>
        <Card title={pokemon.name} index={pokemon.id} sprite={pokemon.sprites.front_default} weight={pokemon.weight} height={pokemon.height} stats={pokemon.stats} abilities={pokemon.abilities}/>
      </div>
    </div>
  );
}

export default App;
