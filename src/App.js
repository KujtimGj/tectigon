import Functionality from "./Gets/funct.js";
import Home from "./home/home.js"
import Nav from "./nav/nav.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Post from "./Post/post.js"


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/home" element={<Home />} />
          <Route path="/funct" element={<Functionality />} />
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
