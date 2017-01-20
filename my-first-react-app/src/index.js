import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';

class App extends React.Component {
  render() {
    const users = [
      { _id: 1, name: 'Leia' },
      { _id: 2, name: 'Luke' },
      { _id: 3, name: 'Han' }
    ];

    return (
      <div className="App">
        {users.map(user => <Hello key={user._id} name={user.name} />)}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
