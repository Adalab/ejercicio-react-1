import React, { Component } from 'react';

import Card from './Card';

import profileImage from './images/profile.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card
          image={profileImage}
          imageAlt="Mi foto de perfil"
          name="Alex"
          date="Hoy"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          likes={37}
          />

          <Card
            image={profileImage}
            imageAlt="La foto de otro"
            name="Pepe"
            date="Ayer"
            text="Florem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            likes={12}
            />
      </div>
    );
  }
}

export default App;
