import './about.css'
import React from 'react'

const About = () => {
  return (
    <div className='portfolio__about' id="about">
      <div className='portfolio__about-title'>
        <h1>ABOUT</h1>
      </div>
      <div className='portfolio__about-container'>
        <p>
          안녕하세요! 저는 웹 퍼블리셔 최정은입니다.
          <br/>
          react와 typescript 위주로 개발을 하고 있으며 
          <br/>
          디자인과 기능성 모두 사로잡는 웹 퍼블리셔가 되겠습니다.
        </p>
      </div>
      <div className='portfolio__about-history'>
        <h2>history</h2>
        <ul>
          <li><b>2021.02</b> | 한국폴리텍대학 안성캠퍼스 스마트 소프트웨어과 졸업</li>
          <li><b>2021.08</b> | 강림직업전문학교 디지털 디자인 과정 수료</li>
          <li><b>2022.09</b> | KIC 캠퍼스 자바(JAVA)기반 백엔드 & AI 빅데이터 분석 양성과정 수료</li>
        </ul>
      </div>
      <div className='portfolio__about-license'>
        <h2>license</h2>
        <ul>
          <li><b>2021.07</b> | GTQid(그래픽기술자격인디자인) 1급</li>
          <li><b>2021.07</b> | GTQ 일러스트 1급</li>
          <li><b>2021.08</b> | (국가공인)디지털정보활용능력</li>
        </ul>
      </div>
    </div>
  )
}

export default About