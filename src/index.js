import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login/Login';
import NewsDetail from './pages/News_Details/NewsDetails';
import Competition from './pages/Competition/Competition';
import Conference from './pages/Conference/Conference';
import Seminar from './pages/Seminar/Seminar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Login",
    element: <Login/>,
  },
  {
    path: "NewsDetails",
    element: <NewsDetail/>,
  },
  {
    path: "Competition",
    element: <Competition/>,
  },
  {
    path: "Conference",
    element: <Conference/>,
  },
  {
    path: "Seminar",
    element: <Seminar/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
