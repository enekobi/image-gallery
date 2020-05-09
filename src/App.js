import React from 'react';
import { Theme } from './styles/Theme';
import { Thumbnail } from './components/thumbnail/Thumbnail';
function App() {
  return (
    <div className="App">
      <Theme>
        <h1>aupa!</h1>
        <Thumbnail
          title="neure titulua"
          src="https://media.giphy.com/media/jQWNT0KxGsBSo5PQvA/giphy.gif"
        ></Thumbnail>
      </Theme>
    </div>
  );
}

export default App;
