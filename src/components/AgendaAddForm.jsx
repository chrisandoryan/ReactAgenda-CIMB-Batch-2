import { Button, Form } from "react-bootstrap";
import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./styles/agenda-form.css";

import { convertToDate, convertToTime } from "../utils/dateHelper";

class AgendaAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agendaTitle: "",
            agendaDesc: "",
            agendaDate: "",
            agendaTime: "",
            datePickerDate: ""
        }
    }

    handleAddAgenda = (e) => {
        e.preventDefault(); // mencegah form dikirim menggunakan http

        // validasi...
        if (this.state.agendaTitle == "") {
            alert("Title cannot be empty!");
            return;
        }
        if (this.state.agendaDesc == "") {
            alert("Desc cannot be empty!");
            return;
        }
        // reformat... ex: 2021-07-15 => 15 July 2021
        let agenda = {
            agendaTitle: this.state.agendaTitle,
            agendaDesc: this.state.agendaDesc,
            agendaDate: this.state.agendaDate,
            agendaTime: this.state.agendaTime
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

    handleAgendaDateInput = (dateString) => {        
        let agendaDate = convertToDate(dateString);
        let agendaTime = convertToTime(dateString);

        this.setState({
            agendaDate: agendaDate,
            agendaTime: agendaTime,
            datePickerDate: dateString
        })
        
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
                    <Form.Label class="label" id="dateInputLabel">Agenda Date</Form.Label>
                    <div>
                        <DatePicker
                            id="datePickerInput"
                            wrapperClassName="datePickerWrapper"
                            dateFormat="dd MMMM yyyy HH:mm"
                            selected={this.state.datePickerDate}
                            showTimeSelect
                            onChange={this.handleAgendaDateInput}
                        />
                    </div>
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