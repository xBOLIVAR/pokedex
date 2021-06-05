import React from 'react'
import { Route, Switch } from 'react-router'
import MainLogin from "./login/mainLogin";
import MoreStatsByType from "./GetPokemons/byType/moreStats"
import CardWithMoreStats from "./GetPokemons/ByName/moreStats"
import PageNotFound from "./error/notFound";
import {Main} from "./GetPokemons/main"

export default function Routes () {

    return (
            <Switch>
                <Route path="/pokedex/name/:id" component={CardWithMoreStats} />
                <Route path="/pokedex/type/:id" component={MoreStatsByType} />
                <Route path="/pokedex" component={Main} />
                <Route path="/" component={MainLogin} />
                <Route path="*" component={PageNotFound} />
            </Switch>
    )
}