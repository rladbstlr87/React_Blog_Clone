// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // let post = '부평 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '리액트 독학']);
  let [like, setLikes] = useState([0, 0, 0]);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>클로그임</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] }
          <span onClick={()=>{
            let copy = [...글제목];
            copy[0] = '여자코트 추천';
            글제목변경(copy);
          }}>
            👍🏻
          </span>
        </h4>
      </div>
      <div>
        { 글제목.map((title, index) => (
          <div className="list" key={index}>
            <h4>{ title } <span onClick={()=>{
              setLikes(prev=>{
                const more = [...prev];
                more[index] += 1;
                return more;
              });
            }}>👍🏻</span> { like[index] }</h4>
            <p>2024년 2월 17일 발행</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
