import React from 'react';
import './App.css';

import Header from './components/Header';
import Showcase from './components/Showcase';
import Worksection from './components/Worksection';
import PainterBio from './components/PainterBio';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Showcase></Showcase> 
      <Worksection></Worksection>  
     <PainterBio></PainterBio>  
    </div>
  );
}

export default App;

