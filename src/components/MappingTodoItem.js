import React from 'react';
import { Button } from 'antd';


//매핑 메소드
//props로 부모의 state를 받았기 때문에 this.~~ 를 사용할 필요가 없다.
export default (props) => {
  const { todo, index, handleCheckUpdate, handleEdit, handleRemove } = props;
  return (
    <li>
      할일: {todo.value}<br />
      완료 <input type="checkbox" defaultChecked={todo.checkBox} onClick={() => { handleCheckUpdate(index) }} /><br />
      <Button onClick={() => { handleEdit(index) }}>수정</Button>
      <Button type="danger" disabled={!todo.checkBox} onClick={() => { handleRemove(index) }}>삭제</Button>
    </li>
  )
}