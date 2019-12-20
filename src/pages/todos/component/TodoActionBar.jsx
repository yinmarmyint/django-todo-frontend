import React from "react";
import { IconButton, Icon } from "rsuite";
import TodoCreateModal from "../component/TodoCreateModal";

class TodoActionBar extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div className="d-flex justify-content-end my-3 mr-3">
        <IconButton
          icon={<Icon icon="plus" />}
          color="cyan"
          size="md"
          circle
          className="ml-2"
          onClick={this.toggle}
        />
        <TodoCreateModal isShow={isOpen} onClose={this.toggle} />
      </div>
    );
  }
}

export default TodoActionBar;
