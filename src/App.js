import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Homepage from './Pages/Homepage/HomePage.jsx';
import ShopPage from "./Pages/Shop/Shop.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path='/' element={<Homepage />} />

          <Route exact path='/shop' element={<ShopPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
