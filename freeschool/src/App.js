import "./App.css";
import Routes from "./components/home/Routes";
import StudentBoth from "./components/LoginAndSignup/StudentBoth";
import { useState } from "react";

import TutorBoth from "./components/LoginAndSignup/TutorBoth";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="App">
      {/* <Routes /> */}
      <StudentBoth />
      {/* <TutorBoth /> */}
    </div>
  );
}

export default App;
