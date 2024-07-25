import React from 'react';
import '../styles/card.css'

function Card(props){
    return (
    <div className="card">
        <div className="card-content">
            <div className="card-image-container">
                <img alt={props.name} src={props.sprite} className='card-image'/>
            </div>
            <div className="card-info">
                <div className="card-header">
                    <h2 className="card-title">{props.title}</h2>
                    <h3>#{props.index}</h3>
                </div>
                <div className="card-body">
                    <p>Height: {props.height / 10}m</p>
                    <p>Weight: {props.weight / 10}kg</p>
                </div>
                <div className='stats-cont'>
                    <div>
                        <h3>Stats:</h3>
                        <ul>
                            {props.stats.map(states => (
                                <li key={states.stat.name}>{states.stat.name}: {states.base_stat}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Abilities:</h3>
                        <ul>
                            {props.abilities.map(abil => (
                                <li key={abil.ability.name}>{abil.ability.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};


export default Card;