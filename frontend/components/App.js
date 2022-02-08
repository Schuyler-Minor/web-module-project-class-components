import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import axios from "axios";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          name: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
      ],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9000/api/todos")
      .then((res) => {
        this.setState({ ...this.state, todos: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleAdd = (name) => {
    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false,
    };
    axios
      .post("http://localhost:9000/api/todos", newTodo)
      .then((res) => {
        console.log(res.data);
        this.setState({
          ...this.state,
          todos: [...this.state.todos, res.data.data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };

  handleToggle = (clickedId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h2>Todo</h2>
        <TodoList handleToggle={this.handleToggle} todos={todos} />
        <Form handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}
