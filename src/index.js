import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

const initialState = {
  number: 0
}

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case 'plus':
      return {
        ...state,
        number: state.number +1
      };
case 'minus':
  return{
    ...state,
    number: state.number -1
  }
    default:
      return state
  }
}

const store = createStore(reduser)


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
