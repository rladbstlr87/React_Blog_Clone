import './App.css';
import { useState } from 'react';

function App() {
  const [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '리액트 독학']);
  const [like, setLikes] = useState([0, 0, 0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [선택된글, 선택된글변경] = useState(0);

  const handleSort = () => {
    const orderBy = [...글제목].sort();
    글제목변경(orderBy);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      <div className="list">
        <h4>{ 글제목[0] }
          <span onClick={()=>{
            const copy = [...글제목];
            copy[0] = '여자코트 추천';
            글제목변경(copy);
          }}>
            👍🏻
          </span>
        </h4>
      </div>

      <button onClick={handleSort}>가나다순 정렬</button>

      <div>
        { 글제목.map((title, index) => (
          <div className="list" key={index}>
            <h4 onClick={()=>{
              선택된글변경(index);
              setIsModalOpen(true);
            }}>
              { title } <span onClick={(e)=>{
                e.stopPropagation();
                setLikes(prev=>{
                  const more = [...prev];
                  more[index] += 1;
                  return more;
                });
              }}>👍🏻</span> { like[index] }
            </h4>
            <p>2024년 2월 17일 발행</p>
          </div>
        ))}
      </div>

      { isModalOpen && (
        <Modal
          title={글제목[선택된글]}
          onClose={()=>setIsModalOpen(false)}
        />
      ) }

    </div>
  );
}

function Modal({ title, onClose }){
  return(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e)=>e.stopPropagation()}>
        <h4>{ title }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  )
}

export default App;
