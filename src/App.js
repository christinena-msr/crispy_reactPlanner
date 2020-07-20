import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Week from './components/Week';
import Container from './components/Container';

function App() {
  return (
    <div>
      <nav>
        <button>View Archive</button>
        <button>Edit Current</button>
        <button>Create New</button>
      </nav>
      <Header />
      <section>
        <Container>
          {/* day comp */}
          <Week />
          {/* column 1 */}
          <div className="time">
            9am
          </div>
          {/* column 2 */}
          <div className="text">
            <input type="textarea"></input>
          </div>
          {/* column 3 */}
          <div className="save">
            <button>save</button>
          </div>
          </Container>
      </section>
    </div>
  );
}

export default App;
