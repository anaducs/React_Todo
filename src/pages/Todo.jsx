import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "./Todo.module.css";
import List from "../components/List";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const [activeList, setActiveList] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handleTextChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim()) {
      setTodoList([...todoList, input]);
      setInput("");
    }
  };

  const activeHandle = (value) => {
    value = value.target.textContent;
    const updateTodo = todoList.filter((e) => {
      return e != value;
    });
    setTodoList(updateTodo);
    setActiveList([...activeList, value]);
  };

  const completeHandle = (value) => {
    value = value.target.textContent;
    const updateActive = activeList.filter((e) => {
      return e != value;
    });
    setActiveList(updateActive);
    setCompleted([...completed, value]);
  };

  return (
    <div className={styles.todoContainer}>
      <div className={styles.addPortion}>
        <Input
          value={input}
          name="todoAdder"
          onChange={handleTextChange}
          placeholder="Add Item"
        />

        <Button onClick={handleAdd} name="addTodo" value="Add" />
      </div>
      <div className={styles.viewPortion}>
        <div className={styles.pending}>
          <List list={todoList} heading="Todo" onclick={activeHandle} />
        </div>
        <div className={styles.active}>
          <List
            list={activeList}
            heading="In Progress"
            onclick={completeHandle}
          />
        </div>
        <div className={styles.complete}>
          <List list={completed} heading="finished" />
        </div>
      </div>
    </div>
  );
}

export default Todo;
