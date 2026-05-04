import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    alert("Modal is open!!");
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackDrop = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="backdrop" onClick={this.handleBackDrop}>
        <div className="modal">
          <button onClick={this.props.onClose}>x</button>
          <p>Lorem</p>
        </div>
      </div>
    );
  }
}

export default Modal;
