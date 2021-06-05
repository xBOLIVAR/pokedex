import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound () {
    return (
        <div>
            <h2>Page not found</h2>
            <Link to="/pokedex">
                Back to the Pokedex
            </Link>
        </div>
    )
}
