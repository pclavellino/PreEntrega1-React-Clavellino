import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div >
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greetings={"Bienvenido a la nuestra Tienda Online"} />
        <ItemCount stock={10} initial={1} onAdd={(cantidad) => {console.log("Agregaste ", {cantidad})}}></ItemCount>
      </main>
    </div>
  );
}

export default App;
