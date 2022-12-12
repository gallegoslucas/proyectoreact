import React from 'react';
import './App.css';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import CartView from './components/CartView/CartView';
import testDatabase from './Services/firestore';
import Finalizar from './components/finalizar/Finalizar';
import Footer from './components/Footer/Footer';

function App() {
  testDatabase()
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:idCategory" element={<ItemListContainer />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/Cart" element={<CartView />} />
            <Route path="/Finalizar/:idOrder" element={<Finalizar />} />
            <Route path="*" element={<h1>Error 404: Esta Pagina no existe.</h1>} />
            </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
