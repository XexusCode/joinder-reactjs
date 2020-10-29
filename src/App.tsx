import React from 'react';
import './App.css';
import {AppRouter} from "./routing/AppRouter";
import { Provider } from "react-redux";
import {store} from "./redux/store/store.js";

 const App: React.FC = () => {

     return (
      <Provider store={store}>
        <AppRouter  />
      </Provider>
        );
};

export default App;
