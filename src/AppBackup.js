import React, { Component } from 'react';
import { Button } from 'antd';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          value: "todoList.value 기본값",
          checkBox: false
        }
      ]
    };
    this.todoInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckUpdate = this.handleCheckUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { todoList } = this.state;

    const todoText = this.todoInput.current.value;

    if (todoText.length < 1) return;

    const pushTodoData = {
      value: todoText,
      checkBox: false
    };

    this.setState({
      todoList: [...todoList, pushTodoData]
    });

    this.todoInput.current.value = '';
    // todoList = [{k:id,v:text,cb:f}]
  }

  handleCheckUpdate(clickIndex) {
    //체크박스 변환
    const { todoList } = this.state;

    this.setState({
      todoList: todoList.map(
        (todo, todoIndex) => {
          todo.checkBox = clickIndex === todoIndex ? !todo.checkBox : todo.checkBox;
          return todo;
        }
      )
    });
  }

  handleRemove(clickIndex) {
    //삭제
    const { todoList } = this.state;

    if (!todoList[clickIndex].checkBox) return;

    this.setState({
      todoList: todoList.filter((todo, todoIndex) => todoIndex !== clickIndex)
    });
  }

  handleEdit(clickIndex) {
    //수정
    //입력이 있으면 수정하고 없거나 취소일 경우 변화하지않음.
    const { todoList } = this.state;
    const editData = window.prompt("change Todo!");

    try {
      if (!!editData && editData.trim() !== '') {
        this.setState({
          todoList: todoList.map(
            (todo, todoIndex) => {
              todo.value = clickIndex === todoIndex ? editData : todo.value;
              return todo;
            }
          )
        })
      }
    } catch (e) {
      alert(e)
    }
  }

  render() {
    const { todoList } = this.state;
    return (
      <div className="App">
        <input type="text" name="todo" placeholder="할 일을 추가하세요" ref={this.todoInput} />
        <Button type="primary">추가</Button>
        <ul>
          {
            todoList.map((todo, index) => {
              return (
                <li key={`${todo.value}${index}`}>
                  할일 : {todo.value}
                  <br></br>
                  완료 <input type="checkbox" defaultChecked={todo.checkBox} onClick={() => {
                    this.handleCheckUpdate(index)
                  }} />
                  <button type="button" onClick={() => {
                    this.handleEdit(index)
                  }}>수정</button>
                  <button type="button" onClick={() => {
                    this.handleRemove(index)
                  }}>삭제</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}



export default App;
