import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelte } = props;
  return (
    <div>
      <p>未完了のTodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelte(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
