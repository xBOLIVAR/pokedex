import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import CardsPokeByType from "./cards";

export default function GetPokeByType () {
    // -----------------------------------------------------------------------------------------------------
    //                              useState Section

    let [pokeType, setPokeType] = useState("");
    let [pokeData, setPokeData] = useState([]);
    let [ pokeLength, setPokeLength ] = useState(0);
    let [initialPoke, setInitialPoke] = useState(0);
    let [ultimatePoke, setUltimatePoke] = useState(4);

    // -----------------------------------------------------------------------------------------------------
    //                              useEffect Section

    useEffect( () => {
        if (pokeType) {
        const getPokeTypeData = async () => {
                let response = await axios.get(`https://pokeapi.co/api/v2/type/${pokeType.toLowerCase()}`);
                setPokeData(response.data.pokemon.slice(initialPoke,ultimatePoke));
                setPokeLength(response.data.pokemon.length);
            }
            getPokeTypeData();
        }
    }, [pokeType, initialPoke])

    // -----------------------------------------------------------------------------------------------------
    //                              useForm Section

    let {handleSubmit, register} = useForm();

    const handleGetType = (data) => {
        setPokeType(data.type);
    }
   
    // -----------------------------------------------------------------------------------------------------

    return (
    <div className="options">
            <div className="options__info">
                    <h5>You can view many Pokemons searching by type</h5>
                    <form onSubmit={handleSubmit(handleGetType)}>
                    <select {...register("type", {required: true})} className="" >
                        <option>normal</option>
                        <option>fighting</option>
                        <option>flying</option>
                        <option>poison</option>
                        <option>ground</option>
                        <option>rock</option>
                        <option>bug</option>
                        <option>ghost</option>
                        <option>steel</option>
                        <option>fire</option>
                        <option>water</option>
                        <option>grass</option>
                        <option>electric</option>
                        <option>psychic</option>
                        <option>ice</option>
                        <option>dragon</option>
                        <option>dark</option>
                        <option>fairy</option>
                    </select>
                    <div className="d-flex justify-content-center">
                        <button className="button-options btn btn-primary" type="submit">Search</button>
                    </div>
                </form>
           </div>   

            <div className="options__buttons">
                <button onClick={() => {
                                if ( initialPoke >= 4 ) {
                                    setInitialPoke(initialPoke - 4);
                                    setUltimatePoke(ultimatePoke - 4);
                                }
                            }} className="btn btn-danger">Previous</button>
                            <button onClick={()=> {
                                if (initialPoke <= pokeLength ) {
                                setInitialPoke(initialPoke + 4);
                                setUltimatePoke(ultimatePoke + 4);   
                                } 
                            }} className="btn btn-danger">Next</button>
            </div>


           <div className="container-cardPokemon">
                {pokeData && pokeData.map((element, index)=> (
                    <CardsPokeByType key={element.pokemon.name + index} data={element.pokemon.url}/>                    
                ))}    
           </div>  
    </div>                
    )
}
