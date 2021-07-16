import React from 'react';
import { Button, Card } from 'react-bootstrap';

import styles from './styles/agendaCard.module.css';
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
                        <Button onClick={this.handleAgendaDelete} variant="danger">Delete</Button>
                        <Button onClick={this.handleAgendaUpdate} variant="secondary">Update</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default AgendaCard;