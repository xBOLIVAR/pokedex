import React, { useEffect, useState } from 'react'
import axios from "axios";
import Encounters from "../ByName/encounters";
import { Route, Switch, useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

export default function MoreStatsByType () {
    let [moreStats, setMoreStats] = useState("");
    
    let { path, url } = useRouteMatch();
    let { id } = useParams();

    useEffect(() => {
        const getMoreStats = async () => {
            let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setMoreStats(response.data);
        }
        getMoreStats();
    }, [id])
    

  const PokeStats = () => {
      let dataEncounters = moreStats.location_area_encounters;

    const AbilitesData = () => {
        return moreStats.abilities.map((element, index) => {
            return (
                    <p key={element.ability.name + index}>
                        {element.ability.name}
                    </p>
            )
        })
    }

    return (
        <div>
            <div>
                <p>
                    #{moreStats.order}
                </p>
                <p>
                    Weight: {moreStats.weight}
                </p>
                <p>
                    Height: {moreStats.height} Mt
                </p>
                <p>Abilities: </p>
                <AbilitesData />
            </div>
            <Switch>
                <Route path={`${path}/encounters`}>
                    <Encounters urlEncounter={dataEncounters} />
                </Route>   
            </Switch> 
            
            <Link to={`${url}/encounters`}>Encounters</Link>
          
        </div>         
    )
  }  

    return (
        <div>
        { moreStats && <PokeStats /> }
        </div>
    )
}
