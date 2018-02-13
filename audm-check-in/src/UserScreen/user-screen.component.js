import React, { Component } from 'react';

class UserScreen extends Component {
    constructor(props) {
        super(props);
        var user = props.nameList.find((userToFind) => userToFind.ID === props.match.params.id);
        console.log(user);
        this.state = {
            selectedUser: user,
        };
    }
    render() {
        return (
            <p> UserScreen for user: {JSON.stringify(this.state.selectedUser ? this.state.selectedUser : "Loading...")}</p>
        );
    }
}

export default UserScreen;