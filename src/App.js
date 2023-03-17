import './App.css';

function App() {
  let listStyle = {
    width: '100%',
    padding: '150px',
    display: 'flex',
    flexDirection: 'column'
  }

  let h2Style = {
    width: '100%',
    height: '100px',
    display: 'flex',
    fontSize: '2rem',
    color: '#49494B',
    fontWeight: 'bold'
  }
  
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
        <canvas></canvas>
      </div>
      <div className="App-list">
        <div className="About" style={listStyle}>
          <h2 style={h2Style}>ABOUT</h2>
          <ul>
            <li>2021.02 : 한국폴리텍대학 안성캠퍼스 졸업</li>
            <li>2021.08 : 강림직업전문학교 디지털 디자인 과정 수료</li>
            <li>2022.09 : KIC 캠퍼스 자바(JAVA)기반 백엔드 & AI 빅데이터 분석 양성과정 수료</li>
          </ul>
        </div>
        <div className="Skill" style={listStyle}>
          <h2 style={h2Style}>SKILL</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul>
            <li>React</li>
            <li>Vue.js</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="Projects" style={listStyle}>
          <h2 style={h2Style}>PROJECTS</h2>
        </div>
        <div className="Contact" style={listStyle}>
          <h2 style={h2Style}>CONTACT</h2>
        </div>
      </div>
      <footer className="App-footer">
        <div></div>
      </footer>
    </div>
  );
}

export default App;
