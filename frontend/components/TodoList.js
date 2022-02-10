import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <div id="todos">
        <h2>Todo</h2>

        {this.props.todos.reduce((acc, td) => {
          if (this.props.displayCompleted || !td.completed)
            return acc.concat(
              <Todo
                key={td.id}
                handleToggle={this.props.handleToggle}
                todo={td}
              />
            );
          return acc;
        }, [])}
      </div>
    );
  }
}
