import React from 'react';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import GalleryContainer from './components/Gallery/GalleryContainer';


function App() {
  return (
    <div>
      <Header />
      <main>
        <GalleryContainer />
      </main>
    </div>
  );
}

export default App;
