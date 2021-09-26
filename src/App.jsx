import React from 'react';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';

import './styles.scss';

function App() {
  return (
    <>
      <div className="navbar">
        <DarkModeToggle />
      </div>
    </>
  );
}

export default App;
