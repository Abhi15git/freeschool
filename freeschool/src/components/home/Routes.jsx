import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Api } from '../context/ContextApi'
import Home from './Home'
import HomeNav from './Navbars/HomeNav'
import DonationPage from "../DonationPage/DonationPage";
import PaymentPage from '../DonationPage/PaymentPage'


const Routes = () => {
    const { auth } = useContext(Api)
    console.log(auth)
    return (
        <div>
            <BrowserRouter>
                {/* <HomeNav /> */}
                <Switch>
                    {
                        !auth && <Route exact path="/" component={Home} />
                    }
                    <Route exact path="/donation">
                        <DonationPage />
                    </Route>
                    <Route path="/donation/:id">
                        <PaymentPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes


