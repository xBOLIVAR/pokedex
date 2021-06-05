import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function MainLogin() {
    const [name, setName] = useState("");
    const { handleSubmit, register } = useForm();

    const submit = (data) => {
        setName(data.name)
    }


    return (
            <div className="container__login">
                <h1>Pokedex</h1>
                <form onSubmit={handleSubmit(submit)}>
                    <input 
                    type="text"
                    {...register("name", {required: true})}
                     placeholder="trainer"/>

                        <button type="submit" className="btn btn-outline-dark"> 
                        Register
                        </button>
                </form>

                <div className="container__button">

                    { name &&
                        <button className="btn btn-dark">
                            <Link to="/pokedex" replace className="container-login__button" >
                                Login
                            </Link>
                        </button>
                    }
                </div>
            
            </div>
    )
}
