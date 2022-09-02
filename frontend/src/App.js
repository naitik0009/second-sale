
// import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
// import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";

import HomeScreen from "./screens/homescreen";
import ProductScreen from "./screens/productScreen";


function App() {
  return (
    <div className="App">

<Router>
    <Header />
    <main className="py-3">
        <h1>Welcome to Second Sale</h1>

           <Routes>
               <Route path = "/" element={<HomeScreen/>} exact />
               <Route path = "/product/:id" element={<ProductScreen/>}  />
           </Routes>

    </main>
    <Footer/>
</Router>

    </div>
  );
}

export default App;
