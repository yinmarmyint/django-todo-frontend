import React from "react";
import { Form, Button } from "rsuite";
import Field from "../../../components/fields/Field";
import ToggleField from "../../../components/fields/ToogleField";

const TodoForm = props => {
  const { initialValues, onClose, onFormSubmit } = props;

  return (
    <Form fluid onSubmit={props.handleSubmit(onFormSubmit)}>
      <Field
        name="title"
        id="title"
        label="Enter Title"
        type="text"
        isRequired
      />
      <Field
        name="description"
        id="description"
        label="Enter Description"
        type="text"
        isRequired
      />

      <ToggleField name="completed" label="completed" id="completed" />

      <div className="d-flex justify-content-end mt-2">
        <Button
          onClick={() => {
            onClose();
            props.reset();
          }}
          appearance="subtle"
          className="mr-2"
        >
          Cancel
        </Button>
        <Button color="cyan" type="submit">
          {initialValues ? <>Update</> : <>Create</>}
        </Button>
      </div>
    </Form>
  );
};

export default TodoForm;
