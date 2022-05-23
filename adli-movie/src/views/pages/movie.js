import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../api/actions/usersAction";

const mapStateToProps = (state) => ({ users: state.users });

class users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users } = this.props.users;
    console.log(this.props.users);

    return (
      <div>
        {users.map((u) => (
          <React.Fragment key={u.id}>
            <h6>{u.name}</h6>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, { getUsers })(users);
