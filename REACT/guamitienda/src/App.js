import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import CartWidget from './components/Navbar/CartWidget/CartWidget';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <Navbar>

      </Navbar>
      <CartWidget />
      <ItemListContainer greeting='Les damos la bienvenida a la tienda Online' />
    </div>
  );
}

export default App;
