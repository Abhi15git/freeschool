import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Api } from "../context/ContextApi";
import TutorBoth from "../LoginAndSignup/TutorBoth";
import StudentBoth from "../LoginAndSignup/StudentBoth";
import CreateSession from "./CreateSession";
import Home from "./Home";
import HomeNav from "./Navbars/HomeNav";
import TutorNav from "./Navbars/TutorNav";
import NotFound from "./NotFound";
import TutorLive from "./TutorLive";
import { Student } from "../studentPage/student";
import StudentNav from "./Navbars/StudentNav";
import { TutorsList } from "../tutorsList/tutorsList";
import Chat from "../Chat/Chat";

import DonationPage from "../DonationPage/DonationPage";
import PaymentPage from "../DonationPage/PaymentPage/PaymentPage";
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
  console.log(auth, "from routes");
  return (
    <div>
      <BrowserRouter>
        {!auth && <HomeNav />}
        {auth === "teacher" && <TutorNav />}
        {auth === "student" && <StudentNav />}
        <Switch>
          {!auth && <Route exact path="/" component={Home} />}
          {auth === "teacher" && <Route exact path="/" component={TutorLive} />}
          {auth === "student" && <Route exact path="/" component={Student} />}
          <Route exact path="/tutordashboard/createsession" component={CreateSession} />
          <Route exact path="/tutordashboard/livesession" component={TutorLive} />
          <Route exact path="/liveclasses" component={Student} />
          <Route exact path="/tutorsignin" component={TutorBoth} />
          <Route exact path="/studentsignin" component={StudentBoth} />
          <Route exact path="/studentdashboard/liveclasses" component={Student} />
          <Route exact path="/tutorslist" component={TutorsList} />
          <Route exact path="/studentdashboard/tutorslist" component={TutorsList} />
          <Route exact path="/donation">
            <DonationPage />
          </Route>
          <Route path="/donation/:id">
            <PaymentPage />
          </Route>
          <Route exact path="/chatroom" component={Chat} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
