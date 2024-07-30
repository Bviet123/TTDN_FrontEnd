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
import Account from './pages/Admin/Account/Account';
import AddAccount from './pages/Admin/Account/AddAccount/AddAccount';
import LoginAdmin from './pages/Admin/Admin-Login/AdminLogin';
import UserInfo from './pages/User/User_Info/UserInfo';
import UserEditor from './pages/User/User_DocumentEditor/UserEditor';
import AdminEditor from './pages/Admin/Admin-Editor/AdminEditor';
import EventDetail from './pages/EventDetails/EventDetails';
import EditAccount from './pages/Admin/Account/UpdateAccount/UpdateAccount';
import AdminAddNewsEditor from './pages/Admin/Admin-News/AddNews/AdminAddNews';
import AdminNews from './pages/Admin/Admin-News/AdminNews';
import UserColection from './pages/User/User_EditorColection/EditorColection';
import NewsColection from './pages/User/User_NewsColection/NewsColection';
import AdminAddNews from './pages/Admin/Admin-News/AddNews/AdminAddNews';
import SliderEdit from './pages/Admin/SliderEdit/SliderEdit';
import EventList from './pages/Admin/EventList/EventList';
import UpdateEditor from './pages/Admin/Admin-Editor/UpdateEditor/UpdateEditor';
import UpdateNews from './pages/Admin/Admin-News/UpdateNews/UpdateNews';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "NewsDetails",
    element: <NewsDetail />,
  },
  {
    path: "Competition",
    element: <Competition />,
  },
  {
    path: "Conference",
    element: <Conference />,
  },
  {
    path: "Seminar",
    element: <Seminar />,
  },
  {
    path: "Admin",
    element: <Account />,
  },
  {
    path: "AddAccount",
    element: <AddAccount />
  },
  {
    path: "LoginAdmin",
    element: <LoginAdmin />
  },
  {
    path: "UserInfo",
    element: <UserInfo />
  },

  {
    path: "UserEditor",
    element: <UserEditor />
  },
  {
    path: "AdminEditor",
    element: <AdminEditor />
  },

  {
    path: "EventDetails",
    element: <EventDetail />
  },
  {
    path: "EditAccount",
    element: <EditAccount />
  },
  {
    path: "AdminNewsEditor",
    element: <AdminAddNewsEditor />
  },
  {
    path: "AdminNews",
    element: <AdminNews />
  },
  {
    path: "UserColection",
    element: <UserColection />
  },
  {
    path: "NewsColection",
    element: <NewsColection />
  },
  {
    path: "AdminAddNews",
    element: <AdminAddNews/>
  },
  {
    path: "SliderEdit",
    element: <SliderEdit/>
  },
  {
    path: "EventList",
    element: <EventList/>
  },
  {
    path: "UpdateEditor",
    element: <UpdateEditor/>
  },
  {
    path: "UpdateNews",
    element: <UpdateNews/>
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
