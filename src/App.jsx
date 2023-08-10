import { Routes , Route , Outlet} from "react-router-dom";
import Home from "./routes/home/home.component";

const Navigation = () =>
{
  return (
    <div>
      <div>
        <h1>I am navigation bar</h1>
      </div>
      <Outlet />
    </div>
    
  );
}

const Shop = () =>( <h2>I AM SHOP PAGE</h2>)

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Navigation />}> 

          <Route index = {true} element={<Home />} />
          <Route path="shop" element={<Shop/>}/>
      </Route>
          
    </Routes>
  )
};

export default App;
