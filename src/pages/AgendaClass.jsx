import React from 'react';
import { Button, Form } from 'react-bootstrap';
import AgendaAddForm from '../components/AgendaAddForm';
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

    deleteAgenda = (id) => {
        this.setState((state, props) => {
            // kalo mau delete array state, copy dulu state ke variable baru
            let newAgendas = [...state.agendas];
            newAgendas.splice(id, 1);
            return {
                agendas: newAgendas,
                currentBalance: props.currentBalance
            }
        });
    }

    addAgenda = (agenda) => {
        alert("Adding agenda...");
        console.log(agenda);
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
                    <AgendaAddForm 
                        funcAddAgenda={this.addAgenda}
                    />
                </div>
                <div id="showAgenda">
                    <h2>{this.state.agendaCollection}</h2>
                    {
                        this.state.agendas.map((agenda, index) => (
                            <AgendaCard
                                id={index}
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