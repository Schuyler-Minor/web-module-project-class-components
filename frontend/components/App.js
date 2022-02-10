import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import axios from "axios";

const URL = " http://localhost:9000/api/todos";

export default class App extends React.Component {
  state = {
    todos: [],
    error: "",
    todoNameInput: "",
    displayCompleted: true,
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ ...this.state, todoNameInput: value });
  };

  componentDidMount() {
    this.fetchAllTodos();
  }

  fetchAllTodos = () => {
    axios
      .get(URL)
      .then((res) => {
        this.setState({ ...this.state, todos: res.data.data });
      })
      .catch((err) => {
        this.setState({ ...this.state, error: err.res.data.message });
      });
  };

  resetForm = () => this.setState({ ...this.state, todoNameInput: "" });
  setAxiosResponseError = (err) =>
    this.setState({ ...this.state, error: err.res.data.message });
  postNewTodo = () => {
    axios
      .post(URL, { name: this.state.todoNameInput })
      .then((res) => {
        this.setState({
          ...this.state,
          todos: this.state.todos.concat(res.data.data),
        });
        this.resetForm();
      })
      .catch((err) => {
        this.setState({ ...this.state, error: err.res.data.message });
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.postNewTodo();
  };

  handleToggle = (id) => (event) => {
    axios
      .patch(`${URL}/${id}`)
      .then((res) => {
        this.setState({
          ...this.state,
          todos: this.state.todos.map((td) => {
            if (td.id !== id) return td;
            return res.data.data;
          }),
        });
      })
      .catch(this.setAxiosResponseError);
  };

  toggleDisplayCompleteds = () => {
    this.setState({
      ...this.state,
      displayCompleted: !this.state.displayCompleted,
    });
  };
  render() {
    const { todos } = this.state;

    return (
      <div>
        <div id="error">Error: {this.state.error}</div>
        <TodoList
          todos={this.state.todos}
          displayCompleted={this.state.displayCompleted}
          handleToggle={this.handleToggle}
        />
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          toggleDisplayCompleteds={this.toggleDisplayCompleteds}
          todoNameInput={this.state.todoNameInput}
          displayCompleted={this.state.displayCompleted}
        />
      </div>
    );
  }
}
