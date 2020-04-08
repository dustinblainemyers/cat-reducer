import React from "react";
import { connect } from "react-redux";
import individualCat from "./individualCat";
import ModifyName from './ModifyName'
import ModifyActivity from './catList'



const catList = () => (
  // <ul className="todo-list">
  //   {todos && todos.length
  //     ? todos.map((todo, index) => {
  //         return <individualCat key={`todo-${todo.id}`} todo={todo} />;
  //       })
  //     : "No todos, yay!"}
  // </ul>

  <>
  <ModifyName/>
  <ModifyActivity/>
   <individualCat/>

 </>

);
// const mapStateToProps = state => {
//   const { byIds, allIds } = state.todos || {};
//   const todos =
//     allIds && state.todos.allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { todos };
// };


// export default TodoList;
export default catList;