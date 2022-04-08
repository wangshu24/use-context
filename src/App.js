import Counter from './Counter'
import React from 'react'

export const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value={{backgroundColor: 'red'}}>
      <div className="App">
        <Counter count={0}/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
