//Components
import Home from "./Home/Home";
import Login from "./Login/Login";
import Error from "./Error/Error";

//Dependency
import { BrowserRouter,Routes,Route } from "react-router-dom";
const App=()=>
{
  return(
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login/>}/>
        <Route  path="/Home" element={<Home/>}/>
        <Route  path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;