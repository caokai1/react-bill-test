import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
// import App from './App';
import { RouterProvider } from 'react-router-dom';
import route from '@/router';
import { Provider } from 'react-redux';
import store from '@/store'
import '@/theme.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
);
