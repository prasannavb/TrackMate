import Home from "./Home/Home";
//Dependecny
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Login/Login";
const App=()=>
{
  return(
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login/>}/>
        <Route index path="/Home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;