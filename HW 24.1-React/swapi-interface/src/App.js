import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Star Wars API Interface</h1>

      <div className="row mb-4">
        <div className="col-md-6">
          <label htmlFor="categorySelect" className="form-label">
            Choose Category:
          </label>
          <select id="categorySelect" className="form-select">
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
            <option value="films">Films</option>
            <option value="species">Species</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="searchInput" className="form-label">
            Search by Name/ID:
          </label>
          <input
            type="text"
            id="searchInput"
            className="form-control"
            placeholder="Enter name or ID..."
          />
        </div>
      </div>

      <div className="d-grid mb-4">
        <button className="btn btn-primary">Search</button>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Result Title</h5>
          <p className="card-text">Result details will appear here...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
