import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, deleteItem, toggleComplete }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todoList.length > 0 ? (
        todoList.map((item, idx) => (
          <TodoItem
            key={idx}
            item={item}
            deleteItem={deleteItem}
            toggleComplete={toggleComplete}
          />
        ))
      ) : (
        <h2>will be here once we get the todoList</h2>
      )}
      <h2>There is no Item to show</h2>
    </div>
  );
};

export default TodoBoard;
