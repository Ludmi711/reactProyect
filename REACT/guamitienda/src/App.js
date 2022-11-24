import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <Navbar />

      <ItemListContainer greeting='Les damos la bienvenida a la tienda Online' />
    </div>
  );
}

export default App;
