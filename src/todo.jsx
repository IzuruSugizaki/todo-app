import { useState } from "react";
import "./todo.css";

export default function StateTodo() {
//Todo項目idの最大値を管理するためのstate
const [maxId, setMaxId] = useState(1);
//Todo項目のリストを管理するためのstate
const [title, setTitle] = useState("");
const [todos, setTodos] = useState([]);

//テキストボックスへの入力値をstateに反映
const handleChangeTitle = (e) => {
  setTitle(e.target.value);
};

//Todoを追加する関数
const handleClickAdd = () => {
  //新しいTodo項目を追加
  setTodos([
    ...todos,
    {
      id: maxId,
      title: title,
      created: new Date(),
      isDone: false,
    }
  ]);
  //Todo項目idの最大値を更新
  setMaxId(id => id + 1);
};
//Todo項目の済み/未済みを切り替える関数
const handleDone = e => {
  setTodos(todos.map(item => {
    if(item.id === Number(e.target.dataset.id)) {
      return {
        ...item,
        isDone: true
      };
    } else {
      return item;
    }
  }));
}
  //Todoを削除する関数
const handleRemove = e => {
  setTodos(todos.filter(item => item.id !== Number(e.target.dataset.id)));
};

//表示をする
return (
  <div>
    <label>
      やること：<input type="text" name="title" value={title} onChange={handleChangeTitle} />
    </label>
    <button type="button" onClick={handleClickAdd}>追加</button>
    <hr />
    <ul>
      {todos.map(item => (
        <li key={item.id} className={item.isDone ? "done" : ""}>
          {item.title}
          <button type="button" onClick={handleDone} data-id={item.id}>完了</button>
          <button type="button" onClick={handleRemove} data-id={item.id}>削除</button>
          </li>
      ))}
    </ul>
  </div>
)
}
