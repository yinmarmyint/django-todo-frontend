import React from "react";
import { Modal } from "rsuite";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { updateTodo, getTodos } from "../../../services/todo/todoAction";
import TodoForm from "./TodoForm";

const formName = "ItemUpdateForm";

const TodoUpdateModal = props => {
  const { isShow, onClose } = props;

  const onFormSubmit = data => {
    props.updateTodo(data.id, data, () => {
      props.getTodos();
      onClose();
      props.reset();
    });
  };

  return (
    <Modal show={isShow} onHide={onClose} size="xs">
      <Modal.Header>
        <Modal.Title>Todo List Update</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TodoForm {...props} onFormSubmit={onFormSubmit} />
      </Modal.Body>
    </Modal>
  );
};

export default connect(null, { updateTodo, getTodos })(
  reduxForm({ form: formName, enableReinitialize: true })(TodoUpdateModal)
);
