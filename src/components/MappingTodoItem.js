import React from 'react';

export default (props)=>{
  const { todo, index, handleCheckUpdate } = props;
  return(
    <li>
      할일: {todo.value}<br />
      완료 <input type="checkbox" defaultChecked={todo.checkBox} onClick={() => {handleCheckUpdate(index)}} /><br />
      <button>수정</button>
      <button>삭제</button>
    </li>
  )
}