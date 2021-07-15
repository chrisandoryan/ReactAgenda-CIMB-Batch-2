import { Button, Form } from "react-bootstrap";
import React from "react";

class AgendaAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agendaTitle: "",
            agendaDesc: "",
            agendaDate: ""
        }
    }

    handleAddAgenda = (e) => {
        e.preventDefault();
        // validasi...
        if (this.state.agendaTitle == "") {
            alert("Title cannot be empty!");
            return;
        }
        // reformat... ex: 2021-07-15 => 15 July 2021
        let agenda = {
            agendaTitle: this.state.agendaTitle,
            agedaDesc: this.state.agendaDesc,
            agendaDate: this.state.agendaDate 
        }
        this.props.funcAddAgenda(agenda);
    }

    handleAgendaTitleInput = (e) => {
        // baca apa yang diinput dan taruh di state
        let title = e.target.value;
        this.setState({
            agendaTitle: title
        });
    }

    handleAgendaDescriptionInput = (e) => {
        let desc = e.target.value;
        this.setState({
            agendaDesc: desc
        });
    }

    handleAgendaDateInput = (e) => {
        let date = e.target.value;
        this.setState({
            agendaDate: date
        });
    }

    render() {
        return (
            <Form onSubmit={this.handleAddAgenda} >
                <Form.Group className="mb-3" controlId="formAgendaTitle">
                    <Form.Label>Agenda Title</Form.Label>
                    <Form.Control 
                        onInput={this.handleAgendaTitleInput} 
                        type="text" 
                        placeholder="What do you want to do?"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAgendaDesc">
                    <Form.Label>Agenda Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        placeholder="Agenda Description"
                        onInput={this.handleAgendaDescriptionInput} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAgendaDate">
                    <Form.Label>Agenda Date</Form.Label>
                    <Form.Control 
                        type="date"
                        onInput={this.handleAgendaDateInput} />
                </Form.Group>

                <Button
                    variant="primary" 
                    type="submit" >
                    Add Agenda
                </Button>
            </Form>
        );
    }
}

export default AgendaAddForm;