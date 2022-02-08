import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo</h2>
        <ul>
          <li>Walk the dog</li>
          <li>Take out the trash</li>
          <li>Workout</li>
        </ul>
        <form>
          <input />
          <button>Add</button>
        </form>
        <button>Clear</button>
      </div>
    );
  }
}
