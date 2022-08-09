import React from "react";

const List = ({ todoData, setTodoData }) => {
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
    <div>
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
    </div>
  );
};

export default List;
