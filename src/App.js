import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainter from './components/Items/ItemDetailContainer';

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
