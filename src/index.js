import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todoApp from "./reducers";
import { addTodo, removeTodo } from "./actions";

const store = createStore(todoApp);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "default" };
  }
  clickAdd() {
    let inputEl = document.getElementById("todoInput");
    console.log(inputEl.value);
    store.dispatch(addTodo(inputEl.value));
    inputEl.value = "";
    console.log(store.getState());
  }
  clickRemove() {
    let inputEl = document.getElementById("todoInput");
    store.dispatch(removeTodo(inputEl.value));
    inputEl.value = "";
    console.log(store.getState());
  }
  changeInput(e) {
    var newInput = e.target.value;
    this.setState({
      value: newInput
    });
    console.log(this.state.value);
  }
  render() {
    return (
      <Provider store={store}>
        <input
          type="text"
          name="todoText"
          id="todoInput"
          onChange={this.changeInput}
        />
        <button onClick={this.clickAdd}>Add to TodoList</button>
        <button onClick={this.clickRemove}>Add to TodoList</button>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
