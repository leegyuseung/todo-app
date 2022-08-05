import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  //버튼 스타일
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRedius: "50%",
    cursor: "pointer",
    float: "right",
  };

  //리스트 스타일
  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };

  // data
  todoData = [
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: false,
    },
  ];
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.todoData.map((data) => (
            <div style={this.getStyle()}>
              <input type="checkbox" defaultChecked={false} />
              {data.title}
              <button style={this.btnStyle}>X</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
