import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [greet, setGreet] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setGreet(`Hello, ${name}! 👋`);
    } else {
      setGreet('Please enter your name.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Welcome!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Greet Me</button>
      </form>
      {greet && <p style={styles.greeting}>{greet}</p>}
    </div>
  );
}

const styles = {
  container: {
    marginTop: '100px',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  greeting: {
    marginTop: '20px',
    fontSize: '20px',
    color: 'green',
  },
};

export default App;
