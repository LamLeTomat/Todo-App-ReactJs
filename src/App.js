import React, { useCallback, useState } from 'react';
import TodoList from './components/TodoList';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import {v4} from 'uuid';


function App() {
  //Nội dung người dùng nhập vào Input
  const onTextInputChange = useCallback((e) => {
  setTextInput(e.target.value);
  }, []);

  const onAddButtonClick = (e) => {
    //Thêm text input vào danh sách todo list
    //C1: Truyền trực tiếp vào setTodoList
    // setTodoList([{name: 'Item 1'}]);
  
    setTodoList([
      {id: v4(), name: textInput, isCompleted: false},
      ...todoList, 
      

    ]);

    setTextInput("");
  };

  const onCheckBtnClick = useCallback((id) => {
    setTodoList(prevState => 
      prevState.map(todo => 
        todo.id ===id ? {...todo, isComplete: true} : todo))
  },[]);
  // state, props
  // React Hook useState: Nhận vào 1 tham số làm giá trị khởi tạo
  const[todoList, setTodoList] = useState([]); //useState trả về 1 array với 2 element; 1 biến để lưu trữ state, 1 method để update
  //THêm 1 state để lưu trữ giá trị vừa nhập, giá trị mặc định là empty string
  const[textInput, setTextInput] = useState("");

  return (
    <div>
      <h3>Danh sách cần làm</h3>
      <Textfield 
      name="add-todo" 
      aria-label="default text field" 
      placeholder="Thêm việc làm" 
      elemAfterInput={
        <Button isDisabled={!textInput} appearance='primary' onClick={onAddButtonClick}>Thêm</Button>
      }
      css={{padding: '2px 4px 2px'}}
      value={textInput}
      onChange = {onTextInputChange}
      />
      <TodoList todoList={todoList} onCheckBtnClick={onAddButtonClick} />
    </div>
  );
}

export default App;
