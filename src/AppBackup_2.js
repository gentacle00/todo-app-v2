import React, { Component, Fragment } from 'react';
import MappingTodoItem from './components/MappingTodoItem';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          value: "todoList.value 기본값",
          checkBox: false
        },
      ]
    };
    this.todoInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckUpdate = this.handleCheckUpdate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    // this.handleMaping = this.handleMaping.bind(this); 컴포넌트 분리 흔적
  };


  //추가 메소드
  //스테이트를 받아오고 value를 todotext로 객체화
  //입력된 값을 더해 스테이트에 리턴함
  //ref속성이 HTML 요소에서 사용될 때 ref생성자 에서 생성 된 React.createRef()은
  // 기본 DOM 요소를 current속성으로받습니다.
  handleSubmit() {

    const { todoList } = this.state;
    const todoText = this.todoInput.current.value;

    //입력값 없을때 리턴 없음
    if (!todoText || todoText.trim() === '') return;

    const pushTodoData = {
      value: todoText,
      checkBox: false
    };

    this.setState({
      todoList: [...todoList, pushTodoData]
    });

    this.todoInput.current.value = '';
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
  handleEdit(clickIndex) {
    const { todoList } = this.state;
    const editData = window.prompt("Todo를 수정하세요!");

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

  //삭제 메소드
  //clickIndex를 참조해 checkBox를 확인하고 [!false = true] 체크 안되있으면 리턴 없음
  handleRemove(clickIndex) {
    const { todoList } = this.state;

    if (!todoList[clickIndex].checkBox) return;

    //필터조건 메소드를 적용시켜 해당하는 속성만 걸러 가져온다
    //기존의 index와 클릭index를 비교하는 조건 사용
    this.setState({
      todoList: todoList.filter((todo, todoIndex) => todoIndex !== clickIndex)
    });
  }




  render() {
    const { todoList } = this.state;
    return (
      <Fragment>
        <h2>todo list 입니다.</h2>
        <h3>수정 하고 바인딩 하셨나요?</h3>
        <text>'ul' 태그 안쪽에도 다른 컴포넌트로 보낼 인자를 연결시켜야 함.</text>
        <br></br>
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
                handleEdit={this.handleEdit}
                handleRemove={this.handleRemove}
              />
            ))
          }
        </ul>
      </Fragment>
    );
  }
}



export default App;
