import React from 'react';
import { Theme } from './components/styles/Theme';
import { GalleryContainer } from './components/Gallery/GalleryContainer';

function App() {
  return (
    <div className="App">
      <Theme>
        <GalleryContainer />
      </Theme>
    </div>
  );
}

export default App;
