import React, { createContext, useContext, useCallback, useState } from 'react';

const MyContext = createContext();

const MyComponent = () => {
  const { value, setValue } = useContext(MyContext);
  const memoizedCallback = useCallback(() => {
    console.log('Value:', value);
  }, [value]); // Add value as a dependency

  return (
    <React.Fragment>
      <p>Context Value: {value}</p>
      <button onClick={memoizedCallback}>Log Value</button>
      <button onClick={() => setValue(prevValue => prevValue + 1)}>Update Value</button>
    </React.Fragment>
  );
};

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <MyContext.Provider value={{ value, setValue }}>
      <MyComponent />
    </MyContext.Provider>
  );
};
export default App;