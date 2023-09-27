import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainter from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer/>
        <ItemDetailContainter/>
      </main>
    </div>
  );
}

export default App;
