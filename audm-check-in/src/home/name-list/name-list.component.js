import React, { Component } from 'react';
import Dialog from "material-ui/Dialog";
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class NameList extends Component {
    state = {
        selected: {},
        showDialog: false
    }
    handlePersonClick = (person) => {
        console.log(person);
        this.setState({selected: person, showDialog: true});
    }
    listOfNames = this.props.source.map(item => 
        {
        return (item.Name.toLowerCase().indexOf(this.props.name.toLowerCase()) >= 0 ?
            <li onClick={() => this.handlePersonClick(item)} key={item.ID}>{item.Name} - {item.Organization}</li>
            :
            "");
        }
    );
        
    onSuccess = () => {
        this.setState({showDialog: false});
        this.props.onPicked(this.state.selected);
    }

    render() {
        const actions = [
            <FlatButton
                label="No"
                secondary={true}
                onClick={() => this.setState({selected: {}, showDialog: false})}
            />,
            <RaisedButton 
                label="Yes!"
                primary={true}
                onClick={this.onSuccess}
            />

        ]
        return (
            <section className="block-list">
                <header>Will the real {this.props.name} please stand up?</header>
                <Dialog
                    title={"Hey, " + this.state.selected.Name + "!"}
                    open={this.state.showDialog} 
                    modal={true}
                    actions={actions}
                >
                <p> Is this you? </p>
                <p> <strong>{this.state.selected.Email}</strong></p>
                </Dialog>
                <ul>
                    {this.listOfNames}
                </ul>
            </section>
        );
    }
}

export default NameList;