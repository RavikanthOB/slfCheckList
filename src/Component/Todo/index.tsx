import React from "react";
import { TodoProps } from "../TodoTypes";
import TodoItem from "./TodoItem";

function Todo({ list, onChange, currentUser }: TodoProps) {
  const updatelist = (id: string) => {
    let newlist = [...list];
    let index = newlist.findIndex((item) => item.Id == id);
    if (index > -1) {
      newlist[index].isSelected = !newlist[index].isSelected;
      newlist[index].updateBy = currentUser;
      onChange(newlist);
    }
  };
  return (
    <div>
      {list.map((item) => (
        <TodoItem onClick={updatelist} item={item} />
      ))}
    </div>
  );
}

export default Todo;
