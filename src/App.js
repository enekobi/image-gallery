import React from 'react';
import { Theme } from './styles/Theme';
import { Thumbnail } from './components/Thumbnail/Thumbnail';
import { Title } from './components/Title/Title';
function App() {
  return (
    <div className="App">
      <Theme>
        <Title
          main="Gamma gallery"
          sub="A responsive image gallery experiment"
        ></Title>
        <Thumbnail
          title="neure titulua"
          src="https://media.giphy.com/media/jQWNT0KxGsBSo5PQvA/giphy.gif"
        ></Thumbnail>
      </Theme>
    </div>
  );
}

export default App;
