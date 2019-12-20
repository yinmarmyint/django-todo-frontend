import React from "react";
import { Modal } from "rsuite";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { getTodos, createTodo } from "../../../services/todo/todoAction";
import TodoForm from "./TodoForm";

const formName = "TodoCreateModal";

const TodoCreateModal = props => {
  const { isShow, onClose } = props;

  const onFormSubmit = data => {
    props.createTodo(data, () => {
      props.getTodos();
      props.onClose();
      props.reset();
    });
  };

  return (
    <Modal show={isShow} onHide={onClose} size="xs">
      <Modal.Header>
        <Modal.Title>Todo List Create</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TodoForm onClose={onClose} onFormSubmit={onFormSubmit} {...props} />
      </Modal.Body>
    </Modal>
  );
};

export default connect(null, { createTodo, getTodos })(
  reduxForm({ form: formName })(TodoCreateModal)
);
