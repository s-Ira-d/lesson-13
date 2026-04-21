import "./App.css";
import React, { Component } from "react";
import Modal from "./Modal.js";

class App extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({
      isOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.openModal}>Open</button>
        {this.state.isOpen && (
          <Modal isOpen={this.state.isOpen} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
