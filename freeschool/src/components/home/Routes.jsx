import React, { useContext } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { Api } from '../context/ContextApi'
import Home from './Home'

const Routes = () => {
    const {auth} = useContext(Api)
    return (
        <div>
        <BrowserRouter>
        <Switch>
            {
                auth==='false' && <Route exact path="/" component={Home}/>
            }
        </Switch>
        </BrowserRouter>
    </div>
    )
}

export default Routes


