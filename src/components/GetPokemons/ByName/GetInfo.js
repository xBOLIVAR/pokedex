import React, { useEffect, useState } from 'react';
import axios from "axios";
import CardPokeName from "./cards";
import {useForm} from "react-hook-form";


export default function SearchPokeByName () {
    // -----------------------------------------------------------
    //                  UseState section

    const [pokemonUrl, setPokemonUrl] = useState("");
    const [data, setData] = useState("");

    // ------------------------------------------------------------

    // -----------------------------------------------------------
    //                  useForm Section

    let { handleSubmit, register, reset } = useForm();  

    const handleInputName = (data) => {
        setPokemonUrl(data.pokeName);
        reset(
            {pokeName:""}
        );
    }

    // ------------------------------------------------------------

    // -----------------------------------------------------------
    //                  useEffect Section

    useEffect(() => {
        if (pokemonUrl) {
            const consumePokeByName = async () => {
                let response = await  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonUrl.toLowerCase()}`);
                setData(response.data);
            };

            consumePokeByName();
        }
    }, [pokemonUrl])

    // ------------------------------------------------------------

    return (
        <div className="container__name">
                <h5>You can view a Pokemon searching by name or Id</h5>
                <form onSubmit={handleSubmit(handleInputName)}>
                    <input
                    className="form-control"
                    {...register("pokeName", {required: true})}
                    placeholder="Name of the pokemon"/>
                    <button className="container__name--button btn btn-danger" type="submit">                       
                             Search
                        </button>
                </form>
            <div>
                {data && <CardPokeName data={data}/>}
            </div>
        </div>    
    )
}
