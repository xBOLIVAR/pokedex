import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Encounters ({urlEncounter}) {

    let [locations, setLocations] = useState([]);
    let [ pokeLength, setPokeLength ] = useState(0);
    let [initialPoke, setInitialPoke] = useState(0);
    let [ultimatePoke, setUltimatePoke] = useState(4);


    useEffect(() => {
        if (urlEncounter) {
            const getDataEncounter = async () => {
                let response = await axios.get(`${urlEncounter}`);
                setLocations(response.data.slice(initialPoke,ultimatePoke));
                setPokeLength(response.data.length);
                console.log(initialPoke)
                console.log(locations)
            }
            getDataEncounter();
        }
    }, [urlEncounter, initialPoke])

    const AllLocations = () => {
        return locations.map((element, index) => {
            return (
                <p key={element.location_area.name + index}>
                    {element.location_area.name}
                </p>
            )
        })
    }

    return (
        <div>
            <h4>Locations:</h4>
            <AllLocations />
            <button onClick={()=>{
                if (initialPoke >= 4 ) {
                setInitialPoke(initialPoke - 4);
                setUltimatePoke(ultimatePoke - 4);
                }
            }}>
                Previous
            </button>
            <button onClick={()=>{
                  if (locations[0] !== undefined ) {
                    setInitialPoke(initialPoke + 4);
                    setUltimatePoke(ultimatePoke + 4);
                  }
            }}>
                Next
            </button>
        </div>
    )
}
