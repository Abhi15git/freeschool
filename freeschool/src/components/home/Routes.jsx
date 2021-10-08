import React, { useContext } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { Api } from '../context/ContextApi'
import Home from './Home'
import HomeNav from './Navbars/HomeNav'

const Routes = () => {
    const {auth} = useContext(Api)
    console.log(auth)
    return (
        <div>
        <BrowserRouter>
        <HomeNav/>
        <Switch>
            {
                !auth && <Route exact path="/" component={Home}/>
            }
        </Switch>
        </BrowserRouter>
    </div>
    )
}

export default Routes


