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
        <p>나를 정의하는 하나의 단어</p>
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
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="Projects" style={listStyle}>
          <h2 style={h2Style}>PROJECTS</h2>
          <ul>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="Contact" style={listStyle}>
          <h2 style={h2Style}>CONTACT</h2>
          <ul>
            <li>Email : jthe2817@naver.com</li>
            <li>GitHub : <a href='https://github.com/CJE-cpu'>https://github.com/CJE-cpu</a></li>
            <li>Phone : 010-2969-2394</li>
          </ul>
        </div>
      </div>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;
