import './App.css';
import NavBar from  './components/NavBarFolder/NavBar';
import ItemListContainer from './components/GreetingContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category:id" element={<ItemListContainer/>}/>
          <Route path="*" element={<h2>Error 404: Page not found</h2>}/>
        </Routes>
      </BrowserRouter>
      </div>



  );
}

export default App;