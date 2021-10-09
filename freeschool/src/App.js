import "./App.css";
import Routes from "./components/home/Routes";

import { useState } from "react";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
