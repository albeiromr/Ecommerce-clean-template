import React from 'react';
import './App.scss';
import { BrowserRouter as Router} from "react-router-dom";
import MainContainer from './routes/MainContainer/MainContainer';
import MainNavContextProvider from './context/Main nav context/MainNavContext';
import ProductGridContextProvider from './context/Product grid context/ProductGridContext';
import ProductDetailsContextProvider from './context/Product details context/ProductDetailsContext';
import ShoppingCartContextProvider from './context/Shopping cart context/ShoppingCartContext';


function App() {

  return (
    <Router >

    <div className="App">
      <ShoppingCartContextProvider>
      <ProductDetailsContextProvider>
      <ProductGridContextProvider>
      <MainNavContextProvider>

      <MainContainer />

      </MainNavContextProvider>
      </ProductGridContextProvider>
      </ProductDetailsContextProvider>
      </ShoppingCartContextProvider>
      
    </div>

    </Router>
  )
};

export default App;
