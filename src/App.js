import Functionality from "./functionality/funct.js";
import Home from "./home/home.js"
import Nav from "./nav/nav.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/funct" element={<Functionality/>}/>
        </Routes>

      </BrowserRouter>



      {/* <Nav />
      <div className="body">
        <Functionality/>
        <Home />
      </div> */}
    </div>
  );
}

export default App;
