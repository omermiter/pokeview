import React, {useState} from 'react';
import '../styles/Searchbar.css';

function Searchbar(props){
    
    const [value, setValue] = useState("");

    const changeValue = (e) => {
        setValue(e.target.value.toLowerCase());
    };


    return (
        <div className='search-div'>
            <input type='text' placeholder='Enter Pokémon name or ID' className="searchbar-input" onChange={changeValue}/>
            <button className="searchbar-button" onClick={props.search} data={value}>Search</button>
        </div>
    )
};


export default Searchbar;