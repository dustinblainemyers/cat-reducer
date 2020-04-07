import React from "react";
import { connect } from "react-redux";
import { setName, setActivity } from "../redux/actions";

class ModifyName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" ,
                   name: ""

                           };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.setName(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { setName }
)(ModifyName);
