import React from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './Components/Components/Layout/Layout';


function App() {
  return (
    <div className="App">
      <Layout>
      <BurgerBuilder />
      </Layout>
</div>
  );
}

export default App;
