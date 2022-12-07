import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';
import Counter from './components/counter/counter';
import notesContainer from './components/Stock/notesContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Les damos la bienvenida a la tienda Online' />
      <Counter initial={0} stock={15} />
      <notesContainer />
    </div>

  );
}

export default App;
