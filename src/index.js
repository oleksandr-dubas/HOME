import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material';
import {Provider} from './context/Context';

import './index.css';
import App from './App';
import Home from './components/home/Home';
import ModelResult from './components/results/ModelResult';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/model/:id',
        element: <ModelResult/>,
    },
    {
        path: '*',
        element: <Navigate to="/"/>,
    },
]);

const theme = createTheme({
    palette: {
        primary: {
            light: '#d9faff',
            main: '#00204a',
            dark: '#000a17',
            contrastText: '#fff',
        },
        error: {
            main: '#d64c63',
        },
        // action: {
        //     disabledBackground: '#00204a',
        // }
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <Provider>
            <App>
                <RouterProvider router={router}/>
            </App>
        </Provider>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
