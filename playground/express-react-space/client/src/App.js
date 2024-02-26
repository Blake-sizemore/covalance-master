import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch('/')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h5>{message}</h5>
      <h5>{message}</h5>
    </div>
  );
}
export default App;
