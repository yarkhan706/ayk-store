import { Routes , Route } from "react-router-dom";
import Home from "./routes/home/home.component";

const Shop = () =>( <h2>I AM SHOP PAGE</h2>)

const App = () => {
  return(
    <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="shop" element={<Shop/>}/>
          </Route>
    </Routes>
  )
};

export default App;
