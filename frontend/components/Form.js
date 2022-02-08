import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAdd(this.state.input);
  };
  handleChange = (event) => {
    this.setState({ ...this.state, input: event.target.value });
  };
  render() {
    return (
      <form>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="type text"
        />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}
