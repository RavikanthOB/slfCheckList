import React, { useState } from "react";
import Todo from "./Todo";
import { todoItem } from "./TodoTypes";

export default {
  title: "Todo Demo",
};

const list: todoItem[] = [
  {
    Id: "1",
    name: "online maker",
    isSelected: true,
    updateBy: {
      name: "ravan",
      profilePic: "",
    },
  },
  {
    Id: "2",
    name: " 2nd online maker",
    isSelected: false,
    updateBy: {
      name: "ravan",
      profilePic: "",
    },
  },
  {
    Id: "3",
    name: "3rd online maker",
    isSelected: false,
    updateBy: {
      name: "ravan",
      profilePic: "",
    },
  },
];

const storyBookUser = {
  name: "storyBook",
  profilePic: "",
};
export const TodoList = () => {
  const [localList, setList] = useState(list);

  const onChange = (list: todoItem[]) => {
    setList(list);
  };
  return (
    <Todo list={localList} onChange={onChange} currentUser={storyBookUser} />
  );
};
