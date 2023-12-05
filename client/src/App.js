// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import About from './components/About';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Boy from './components/Boy';
import Girl from './components/Girl';
import Categorie from "./components/Categorie"
import Information from './components/Information';



function App() {
  
 
  
  

  return (
    <div className="App">
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Boy' element={<Boy/>}></Route>
      <Route path='/Girl' element={<Girl/>}></Route>
      <Route path='/Categorie' element={<Categorie/>}></Route>
      <Route path='/Information' element={<Information/>}></Route>
     </Routes>
     </BrowserRouter>

     

    </div>

    
  );
}

export default App;
