import React from 'react';
import { Button } from 'react-bootstrap';

class AgendaCard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    handleAgendaDelete = () => {
        this.props.funcDeleteAgenda(this.props.id);
    }

    // Tips formatting: CTRL + A, CTRL + K + F
    render() {
        return (
            <div id={`agendaCard-${this.props.title}`}>
                <hr></hr>
                <h3>{this.props.title || "No Data"}</h3>
                <p>{this.props.date} | {this.props.time}</p>
                <p>{this.props.desc}</p>
                <Button onClick={this.handleAgendaDelete} variant="danger">Delete</Button>
                <Button variant="secondary">Update</Button>
            </div>
        );
    }
}

export default AgendaCard;