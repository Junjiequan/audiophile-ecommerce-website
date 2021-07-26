import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { allReducer } from './reducers';
import { Provider } from 'react-redux';
import { loadState, saveState } from './data/localStorage';


const persistedState = loadState();
const store = createStore(
    allReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(()=>{
  saveState({
    products:store.getState().products
  })
},1000))
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

