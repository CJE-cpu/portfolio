import './App.css';
import List from './list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
          <ul>
            <li>about</li>
            <li>skill</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
        </div>
      </header>
      <div className='profile'>

      </div>
      <div className="App-list">
        <List name="ABOUT"/>
        <List name="SKILL"/>
        <List name="PROJECTS"/>
        <List name="CONTACT"/>
      </div>
      <footer className="App-footer">
        <div></div>
      </footer>
    </div>
  );
}

export default App;
