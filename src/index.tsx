import React from 'react';
import ReactDOM from 'react-dom';
import GameApp from './GameApp';
import GlobalStore from "./store/GlobalStore"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStore>
    <GameApp />
    </GlobalStore>
  </React.StrictMode>,
  document.getElementById('root')
);
