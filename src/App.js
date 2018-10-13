import React, { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoList: [
        {
          value: "value 기본값",
          checkBox: true
        },
      ]
    };
    this.todoInput = React.createRef();
    this.handleMaping = this.handleMaping.bind(this);
  };

  handleMaping(todo,index){
    return(
      <li key={`${todo.value}`}>
      할일: {todo.value}<br/>
      완료: <input type="checkbox" defaultChecked={todo.checkBox}></input><br/>
      수정:<br/>
      삭제:
      </li>

    )

  }


  render() {
    const { todoList } = this.state;
    return (
      <div>
      <input type="text" name="todo" placeholder="todo를 입력하세요!" ref={this.todoInput} />
      <button>Submit</button>

      <ul>
      {
        todoList.map(this.handleMaping)
      }
      </ul>
      </div>
    );
  }
}



export default App;
