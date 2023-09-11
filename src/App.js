import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <div >
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greetings={"Bienvenido a la nuestra Tienda Online"} />
      </main>
    </div>
  );
}

export default App;
