import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Provider function takes 1 attribute: the store
import { ConfigureStore } from './redux/configureStore';
import Main from './components/MainComponent.js';
import './App.css';

const store = ConfigureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>      
        </BrowserRouter>      
      </Provider>
    );    
  }
}

export default App;
