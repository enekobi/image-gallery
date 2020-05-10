import React from 'react';
import { Theme } from './components/styles/Theme';
import { GalleryContainer } from './components/Gallery/GalleryContainer';
import { NavigationContainer } from './components/Navigation/NavigationContainer';

function App() {
  return (
    <div className="App">
      <Theme>
        <GalleryContainer />
        <NavigationContainer />
      </Theme>
    </div>
  );
}

export default App;
