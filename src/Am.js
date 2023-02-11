import React from 'react';

function App() {
    let date = new Date();
    let hours = date.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
  
  return (
    <div>
      <h1>The current time is:</h1>
      <p>{ampm}</p>
    </div>
  );
}

export default App;
