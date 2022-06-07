import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div>
      <p>完了のTodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
