import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div onClick={this.props.handleToggle(this.props.todo.id)}>
        {this.props.todo.name} {this.props.todo.completed ? " ✔️ " : ""}
      </div>
    );
  }
}

export default Todo;
