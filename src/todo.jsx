import { useState } from "react";

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
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  </div>
)
}
