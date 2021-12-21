import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './Pages/Homepage/HomePage.jsx';
import ShopPage from "./Pages/Shop/Shop.jsx";


const Hats = () => {
  return(
    <div>
      Hats content
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />} />

          <Route exact path='/shop' element={<ShopPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
