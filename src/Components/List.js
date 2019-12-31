import React from "react";

const List = ({ todo }) => {
  const RenderList = () => {
    let listData = todo;
    if (listData !== []) {
      return listData.map((list, index) => <li key={index}>{list.value}</li>);
    }
  };
  return (
    <div>
      <ul>
        <RenderList />
      </ul>
    </div>
  );
};

export default List;
