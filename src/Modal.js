import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      alert("Modal is open!");
    }
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
    // if (!this.props.isOpen) return null;
    return (
      <div
        className="backdrop"
        style={{ display: this.props.isOpen ? "block" : "none" }}
        onClick={this.props.handleBackDrop}
      >
        <div className="modal">
          <button onClick={this.props.onClose}>x</button>
          <p>Lorem</p>
        </div>
      </div>
    );
  }
}

export default Modal;
