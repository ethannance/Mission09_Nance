import React from 'react';
import './App.css';
import { StringLiteral } from 'typescript';

interface BandBlah {
  name: string;
  members: String;
  formed: number;
}

const bandNames = [
  {
    name: 'band 1',
    members: 'member 1, member 2, member 3',
    formed: 1979,
  },
  {
    name: 'band 2',
    members: 'member 1, member 2, member 3',
    formed: 2004,
  },
  {
    name: 'band 3',
    members: 'member 1, member 2, member 3',
    formed: 1966,
  },
  {
    name: 'band 4',
    members: 'member 1, member 2, member 3',
    formed: 1987,
  },
];

function Welcome() {
  return <h1>The best bands</h1>;
}

class Band extends React.Component<BandBlah> {
  render() {
    const bandNames = this.props;

    return (
      <div>
        <img />
        <h2>{bandNames.name}</h2>
        <h3>Members: {bandNames.members}</h3>
        <h3>Formed: {bandNames.formed}</h3>
      </div>
    );
  }
}

function BandList() {
  return (
    <div>
      {bandNames.map((bandNum) => (
        <Band {...bandNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <BandList />
    </div>
  );
}

export default App;
