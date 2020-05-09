import React from 'react';
import { Theme } from './components/styles/Theme';
import { Gallery } from './components/Pages/Gallery';

function App() {
  return (
    <div className="App">
      <Theme>
        <Gallery />
      </Theme>
    </div>
  );
}

export default App;
