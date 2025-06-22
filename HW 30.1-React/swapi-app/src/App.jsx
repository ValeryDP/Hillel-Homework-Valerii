import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFromUrl, clearData } from './features/swapiSlice';
import './App.css';

function App() {
  const [url, setUrl] = useState('https://swapi.tech/api/people/1');
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.swapi);

  const handleFetch = () => {
    dispatch(fetchFromUrl(url));
  };

  const handleClear = () => {
    dispatch(clearData());
    setUrl('');
  };

  return (
    <div className="app-container">
      <h1>SWAPI</h1>
      <input
        type="text"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="Enter SWAPI URL"
      />
      <button onClick={handleFetch}>Get info</button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {data && (
        <pre className="json-output">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}

      <footer>
        <button onClick={handleClear}>Clear</button>
      </footer>
    </div>
  );
}

export default App;
