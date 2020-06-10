import React, { Component } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput.js";
import UserInput from "./UserInput/UserInput.js";

class App extends Component {
  state = {
    inputString: "",
  };

  changeTextHandler = (event) => {
    this.setState({
      inputString: event.target.value,
      length: event.target.value.length,
    });
  };

  deleteLetterHandler = (letterIndex) => {
    const letters = [...this.state.inputString];
    letters.splice(letterIndex, 1);
    this.setState({ inputString: letters });
  };

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.changeTextHandler}></input>
        <p>{this.state.length}</p>
        <UserOutput length={this.state.length} />
        <div>
          {[...this.state.inputString].map((letter, index) => {
            return (
              <UserInput
                text={letter}
                key={index}
                click={() => this.deleteLetterHandler(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
