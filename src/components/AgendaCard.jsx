import React from 'react';
import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';

import styles from './styles/agendaCard.module.css';

const FormButton = styled.button`
    background: ${props => props.mode == "delete" ? "red" : "blue"};
    color: white;
    margin-right: 10px;
`

const FormButtonBootstrap = styled(Button)`
    background: ${props => props.mode == "delete" ? "red" : "blue"};
    color: white;
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
            <div id={styles.agendaCard}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h3>{this.props.title || "No Data"}</h3></Card.Title>
                        <Card.Text>
                            <p>{this.props.date} | {this.props.time}</p>
                            <p>{this.props.desc}</p>
                        </Card.Text>
                        <FormButtonBootstrap mode="delete" onClick={this.handleAgendaDelete} variant="danger">Delete</FormButtonBootstrap>

                        <FormButtonBootstrap onClick={this.handleAgendaUpdate} variant="secondary">Update</FormButtonBootstrap>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default AgendaCard;