import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { HomeRouts } from './Routes';

const App = () => {
  return (
    <Provider store={store}>
      <HomeRouts/>
    </Provider>
  );
}

export default App;
