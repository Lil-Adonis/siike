import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Lower from './components/Lower'
import GetList from './components/GetList';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Lower/>
     <GetList/>
    </div>
  );
}

export default App;
