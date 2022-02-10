import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        {/* {" "} */}
        <form id="todoForm" onSubmit={this.props.handleSubmit}>
          <input
            value={this.props.todoNameInput}
            onChange={this.props.handleChange}
            type="text"
            placeholder="type text"
          />
          <button onClick={this.props.handleSubmit}>Add</button>
        </form>
        <button onClick={this.props.toggleDisplayCompleteds}>
          {this.props.displayCompleted ? "Hide" : "Show"} Clear
        </button>
      </div>
    );
  }
}
