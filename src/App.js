import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  //버튼 스타일
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRedius: "50%",
    cursor: "pointer",
    float: "right",
  };

  //리스트 스타일
  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  // 삭제 함수
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  // 할일 입력 input
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // 폼 submit
  const handleSubmit = (e) => {
    // form 안에 input을 전송할 때 페이지 리로드 막아준다.
    e.preventDefault();

    // 새로운 할일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    // 원래 있던 할 일에 새로운 할 일 더해주기
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        {todoData.map((data) => (
          <div style={getStyle(data.completed)} key={data.id}>
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => handleCompleteChange(data.id)}
            />
            {data.title}
            <button style={btnStyle} onClick={() => handleClick(data.id)}>
              X
            </button>
          </div>
        ))}
        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    </div>
  );
}
