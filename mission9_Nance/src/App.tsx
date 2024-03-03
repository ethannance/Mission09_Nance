import React, { useState } from 'react';
import './App.css';

interface SchoolBlah {
  school: string;
  name: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

const schoolData = require('./CollegeBasketballTeams.json');

function Welcome() {
  return (
    <>
      <h1 className="text-center">Welcome!</h1>
      <h2 className="text-center">
        This site includes a list of college basketball team cards and their
        information.
      </h2>
    </>
  );
}

class School extends React.Component<SchoolBlah> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <details className="school-details">
        <summary>{school}</summary>
        <div>
          <p>Mascot Name: {name}</p>
          <p>
            Location: {city}, {state}
          </p>
        </div>
      </details>
    );
  }
}

function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <input
      className="form-control mb-4"
      type="text"
      placeholder="Search for a school..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

function SchoolList() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSchools = schoolData.teams.filter((team: SchoolBlah) =>
    team.school.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <SearchBar onSearch={setSearchQuery} />
      <div>
        {filteredSchools.map((team: SchoolBlah, index: number) => (
          <School key={index} {...team} />
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <SchoolList />
    </div>
  );
}

export default App;
