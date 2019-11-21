import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routers/MainRouter';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
