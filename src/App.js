import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Header from "./components/Header"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/cart" element={<Cart />}>
            </Route>
        </Routes>
       
      </div> 
    </BrowserRouter>
  );
}

export default App;
