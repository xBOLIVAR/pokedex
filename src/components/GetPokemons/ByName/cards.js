import React from 'react';
import CardWithMoreStats from "../ByName/moreStats"
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

export default function CardPokeName ({data}) {

    let { url } = useRouteMatch();

    let {name, types, stats, sprites, id} = data;

   const PokemonType = () => {
       return (
        <>
        <p>{types[0].type.name}</p>
        </>
       );
   } 

   const PokemonTypes = () => {
       return (
        <>
        {types.map((element, index) => {
            return (
                <>
                <p key={element.type.name + index} >{element.type.name}</p>
                </>
            );
        })}
        </>
       );
   }

    return (
            <div className="name">
                <div className="name__poke-card">
                    <div>
                            <div className="img-type">
                                <div className=" img-type__circle">
                                    <img src={sprites.front_default} alt={name} />
                                </div>
                                <h5>{name}</h5>
                            </div>

                            <div className="basic-stats">
                                <div className="name__poke-card-info" >
                                    <p>Type: </p>
                                    {types.length < 2 ? <PokemonType /> : <PokemonTypes />}
                                </div>
                            
                                <div>
                                    <p>HP: {stats[0].base_stat}</p>
                                    <p>Attack: {stats[1].base_stat}</p>
                                    <p>Defense: {stats[2].base_stat}</p>
                                    <p>Spd: {stats[5].base_stat}</p>
                                </div>
                            </div>

                    </div>
                  
                    <div className="name__total">
                        <button className="btn btn-outline-danger">
                            <Link to={`${url}/${id}`} className="name__total-text">Stats</Link>
                        </button>

                    </div>
  
                </div>
            </div>
    );
}
