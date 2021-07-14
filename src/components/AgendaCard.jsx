import React from 'react';

class AgendaCard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.funcDeleteAgenda();
    }

    // Tips formatting: CTRL + A, CTRL + K + F
    render() {
        return (
            <div id={`agendaCard-${this.props.title}`}>
                <hr></hr>
                <h3>{this.props.title || "No Data"}</h3>
                <p>{this.props.date} | {this.props.time}</p>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}

export default AgendaCard;