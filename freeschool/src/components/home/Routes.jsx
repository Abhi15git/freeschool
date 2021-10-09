import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Api } from "../context/ContextApi";
import TutorBoth from "../LoginAndSignup/TutorBoth";
import StudentBoth from "../LoginAndSignup/StudentBoth";
import CreateSession from "./CreateSession";
import Home from "./Home";
import HomeNav from "./Navbars/HomeNav";
import TutorNav from "./Navbars/TutorNav";
import TutorHome from "./TutorHome";
import NotFound from "./NotFound";

const Routes = () => {
  const { auth, setAuth, setUser } = useContext(Api);
  useEffect(() => {
      
    if (!auth) {
      let data = localStorage.getItem("sessionData");
      if (data) {
        setAuth(JSON.parse(data).auth);
        setUser(JSON.parse(data).user);
      }
    }
  }, []);
  console.log(auth,'from routes')
  return (
    <div>
      <BrowserRouter>
        {!auth && <HomeNav />}
        {auth === "tutor" && <TutorNav />}
        <Switch>
            {!auth && <Route exact path="/" component={Home} />}
            {auth === "tutor" && <Route exact path="/" component={TutorHome} />}
            <Route exact path="/createsession" component={CreateSession} />
            <Route exact path="/tutorsignin" component={TutorBoth} />
            <Route exact path="/studentsignin" component={StudentBoth} />
            <Route component={NotFound}/>
        
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
