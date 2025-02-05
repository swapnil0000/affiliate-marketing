import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Home from "./Screens/Home";
function App() {
  return (
     <BrowserRouter>
        <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/home" element={<Home/>}/>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
