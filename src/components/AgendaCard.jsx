import React from 'react';
import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';

const CustomCardButton = styled(Button)`
    background: ${props => props.delete ? "red" : "green"};
    color: "white";
    margin-right: 10px;
`
class AgendaCard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    handleAgendaDelete = () => {
        this.props.funcDeleteAgenda(this.props.id);
    }

    handleAgendaUpdate = () => {
        this.props.funcUpdateAgenda();
    }

    // Tips formatting: CTRL + A, CTRL + K + F
    render() {
        return (
            <div id={`agendaCard-${this.props.title}`}>
                <Card id="agendaCard">
                    <Card.Body>
                        <Card.Title>{this.props.title || "No Data"}</Card.Title>
                        <Card.Text>
                            {this.props.desc}
                            <p>{this.props.date} | {this.props.time}</p>
                        </Card.Text>
                        <CustomCardButton delete onClick={this.handleAgendaDelete}>Delete</CustomCardButton>
                        <CustomCardButton onClick={this.handleAgendaUpdate}>Update</CustomCardButton>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default AgendaCard;