import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {

  return (
    <div>
        <CartProvider>
          <BrowserRouter>
            <header>
              <NavBar />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<h1>"Error 404. Página no encontrada"</h1>}/>
              </Routes>
            </main>
          </BrowserRouter> 
        </CartProvider>
    </div> 
  );
}

export default App;
