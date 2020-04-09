import React from 'react';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Gallery />
      </main>
    </div>
  );
}

export default App;
