import React, { useContext } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { Api } from '../context/ContextApi'
import CreateSession from './CreateSession'
import Home from './Home'
import HomeNav from './Navbars/HomeNav'
import TutorNav from './Navbars/TutorNav'
import TutorHome from './TutorHome'

const Routes = () => {
    const {auth} = useContext(Api)
    console.log(auth)
    return (
        <div>
        <BrowserRouter>
        {!auth && <HomeNav/>}
        {auth==='tutor' && <TutorNav/>}
        <Switch >
            <div >
            {
                !auth && <Route exact path="/" component={Home}/>
            }
            {
                auth==="tutor" && <Route exact path="/" component={TutorHome}/>
            }
            <Route exact path="/createsession" component={CreateSession}/>
            </div>
        </Switch>
        </BrowserRouter>
    </div>
    )
}

export default Routes


