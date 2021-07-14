import React from 'react';
import { Button, Form } from 'react-bootstrap';
import AgendaCard from '../components/AgendaCard';
import Header from '../components/Header';

class AgendaClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agendas: [
                {
                    agendaTitle: "Monthly Meeting Juli 2021",
                    agendaDate: "15 Juli 2021",
                    agendaTime: "17.00",
                    agendaDesc: "Membahas laporan keuangan dan kinerja perusahaan"
                },
                {
                    agendaTitle: "Reuni SMA",
                    agendaDate: "23 Juli 2021",
                    agendaTime: "14.00",
                    agendaDesc: "Kumpul di Zoom meeting"
                },
            ],
            agendaCollection: "Untitled Agenda Collection"
        }
        // this.deleteAgenda = this.deleteAgenda.bind(this);
    }

    deleteAgenda = () => {
        console.log("Deleting agenda...");
        this.setState({
            agendaCollection: "Ryan's Agenda Collection"
        });
    }

    componentDidMount() {
        // alert("componentDidMount() is called!");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
        console.log(this.state);
        // alert("componentDidUpdate() is called!");
    }

    componentWillUnmount() {
        // alert("componentWillUnmount() is called!");
    }

    componentDidCatch() {
        alert("Error Detected!");
    }

    render() {
        return (
            <div>
                <Header />
                <div id="addAgendaForm">
                    <h2>Add New Agenda</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formAgendaTitle">
                            <Form.Label>Agenda Title</Form.Label>
                            <Form.Control type="text" placeholder="What do you want to do?" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAgendaDesc">
                            <Form.Label>Agenda Description</Form.Label>
                            <Form.Control as="textarea" placeholder="Agenda Description" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAgendaDate">
                            <Form.Label>Agenda Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Add Agenda
                        </Button>
                    </Form>
                </div>
                <div id="showAgenda">
                    <h2>{this.state.agendaCollection}</h2>
                    {
                        this.state.agendas.map((agenda) => (
                            <AgendaCard
                                title={agenda.agendaTitle}
                                date={agenda.agendaDate}
                                time={agenda.agendaTime}
                                desc={agenda.agendaDesc}
                                funcDeleteAgenda={this.deleteAgenda} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

// Agar class bisa digunakan di .js lain
export default AgendaClass;