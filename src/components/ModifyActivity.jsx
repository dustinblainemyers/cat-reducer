import React from "react";
import { connect } from "react-redux";
import { setName, setActivity } from "../redux/actions";

class ModifyActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" ,
                   activity: ""

                           };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.setActivity(this.state.input);
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
          Change Name
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { setActivity }
)(ModifyActivity);
