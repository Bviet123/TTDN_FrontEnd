import React, { useState } from 'react';
import './App.css';
import Nav from './component-news/NavigationBar/Nav';
import Left from './component-news/LeftContainer/Left';
import Right from './component-news/RightContainer/Right';
import Foot from './component-news/FootContainer/Foot';
import Content from './component-news/ContentContainer/Content';

function App() {

  return (
    <div className="App">
      <Nav/>
      <main className="App-main">
        <div className="container">
          <Left/>
          <Content/>
          <Right/>
        </div>
      </main>
      <Foot/>
    </div>
  );
}

export default App;
