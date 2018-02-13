import React, { Component } from 'react';
import NameList from './name-list/name-list.component';
import TextField from 'material-ui/TextField';
import { Redirect } from 'react-router';

class Home extends Component {
    state = { 
        name: "",
        goToUserScreen: false,
     };

     onPicked = (user) => {
        //send POST to check in user 
        console.log(user);
        this.setState({pickedUser: user, goToUserScreen: true}); 
     }
  render() {
    return (
      <article className="content">
        <h1> Welcome to AUDM! </h1>
        <p>We're excited to have you here! Let's get you signed in and ready for the 
            <strong> best DM day of the year </strong>.</p>
        <div>Hi, my name is 
            <TextField 
                hintText="Slim Shady"
                onChange={(event, value) => this.setState({name: value})}
                value = {this.state.name}
            />
        </div>

        {this.state.name.length >= 3 ? 
            <NameList 
                name={this.state.name}
                source={this.props.nameList}
                onPicked={(user) => this.onPicked(user)}
            /> 
            : 
            ""}
        {this.state.goToUserScreen ?
            <Redirect push to={"/User/" + this.state.pickedUser.ID} />
            :
            ""
        }

      </article>
    );
  }
}

export default Home;
