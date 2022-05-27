import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../api/actions/usersAction";

import "../../assets/css/pages/movie.css";

const mapStateToProps = (state) => ({ users: state.users });

class users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users } = this.props.users;
    console.log(this.props.users);

    return (
      <div className="tes">
        {users.map((u) => (
          <React.Fragment key={u.id}>
            <div className="cards d-flex flex-column">
              <h6>{u.name}</h6>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, { getUsers })(users);
