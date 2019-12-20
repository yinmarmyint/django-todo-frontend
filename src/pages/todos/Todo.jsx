import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoTable from "./component/TodoTable";
import { getTodos } from "../../services/todo/todoAction";
import TodoActionBar from "./component/TodoActionBar";

const Todo = props => {
  useEffect(() => {
    const getAllTodos = props.getTodos;
    getAllTodos();
  }, [props.getTodos]);

  return (
    <>
      <TodoActionBar />
      <TodoTable todos={props.todos} />
    </>
  );
};

const mapStateToProps = ({ todo }) => ({
  todos: todo && todo.data,
  isPending: todo && todo.isPending
});

export default connect(mapStateToProps, { getTodos })(Todo);
