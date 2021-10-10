import { useContext } from "react";
import "./App.css";
import { Api } from "./components/context/ContextApi";
import Loader from "./components/home/Loader";
import Routes from "./components/home/Routes";
function App() {

  
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
