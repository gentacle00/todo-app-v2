import React, { Component, Fragment } from 'react';
import MappingTodoItem from './components/MappingTodoItem';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          value: "value 기본값",
          checkBox: false
        },
      ]
    };
    this.todoInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckUpdate = this.handleCheckUpdate.bind(this);
    // this.handleMaping = this.handleMaping.bind(this);
  };

  //추가 메소드
  //스테이트를 받아오고 value를 todotext로 객체화
  //입력된 값을 더해 스테이트에 리턴함
  //ref속성이 HTML 요소에서 사용될 때 ref생성자 에서 생성 된 React.createRef()은
  // 기본 DOM 요소를 current속성으로받습니다.
  handleSubmit() {

    const { todoList } = this.state;
    const todoText = this.todoInput.current.value;
    console.log(todoText);

  }

  handleChange() {

  }

  //체크박스 메소드
  //체크박스 클릭시 기존의 값과 비교후 반전
  handleCheckUpdate(clickIndex) {
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

  //수정메소드
  handleEdit() {

  }

  //삭제 메소드
  handleDelete() {

  }

  // //매핑 메소드
  // //체크박스, 수정과 삭제는 다른 메소드를 작동함.
  // handleMaping(todo, index) {
  //   return (

  //   )
  // }




  render() {
    const { todoList } = this.state;
    return (
      <Fragment>
        <input type="text" name="todo" placeholder="todo를 입력하세요!" ref={this.todoInput} />
        <button onClick={this.handleSubmit}>추가</button>

        <ul>
          {
            todoList.map((todo, index) => (
              <MappingTodoItem 
                key={`${todo.value}`}
                todo={todo} 
                index={index} 
                handleCheckUpdate={this.handleCheckUpdate} 
              />
            ))
          }
        </ul>
      </Fragment>
    );
  }
}



export default App;
