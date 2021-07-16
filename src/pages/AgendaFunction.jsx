import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import AgendaAddForm from "../components/AgendaAddForm";
import AgendaCard from "../components/AgendaCard";
import Header from "../components/Header";

import styles from "./styles/agendaPage.module.css";

const SectionDiv = styled.div`
    margin-top: 1.5rem;
`

function AgendaFunction(props) {
    const [agendas, setAgendas] = useState([
        {
            agendaTitle: "Reuni Playgroup",
            agendaDesc: "via Zoom Meeting juga",
            agendaDate: "07 July 2021",
            agendaTime: "17.00",
        },
        {
            agendaTitle: "Monthly Report (DONE)",
            agendaDesc: "Sertakan surat ijin naik jabatan",
            agendaDate: "09 July 2021",
            agendaTime: "18.00"
        },
    ]);

    const [agendaCollection, setAgendaCollection] = useState("Functional Agenda Collection");
    const [modalShow, setModalShow] = useState(false);

    const deleteAgenda = (id) => {
        let newAgendas = [...agendas];
        newAgendas.splice(id, 1);
        setAgendas(newAgendas);
    }

    const addAgenda = (agenda) => {
        let newAgendas = [...agendas, agenda];
        setAgendas(newAgendas);
    }

    const updateAgenda = () => {
        // alert("Todo: Update Agenda");
        setModalShow(true);
    }

    const handleClose = () => {
        setModalShow(false);
    }

    // componentDidMount equivalent
    // hanya dijalankan ketika render
    useEffect(() => {
        setTimeout(() => {
            setAgendaCollection("Ryan's Agenda Collection");
        }, 5000);
    }, []);

    // tolong jalanin ketika ada agenda di add atau delete, atau agendaCollection berubah
    useEffect(() => {
        if (agendas.length == 0) {
            console.log("Agenda habis");
        }
        console.log("Agendas is changed.");
    }, [agendas, agendaCollection]);
    
    return (
        <div>
            <Header />
            <SectionDiv>
                <h2>Add New Agenda</h2>
                <AgendaAddForm 
                    funcAddAgenda={addAgenda}
                />
            </SectionDiv>
            <SectionDiv>
                <h2>{ agendaCollection }</h2>
                <div id={styles.agendaCardContainer}>
                    {
                        agendas.map((agenda, index) => (
                            <AgendaCard 
                                id={index}
                                title={agenda.agendaTitle}
                                date={agenda.agendaDate}
                                time={agenda.agendaTime}
                                desc={agenda.agendaDesc}
                                funcDeleteAgenda={deleteAgenda}
                                funcUpdateAgenda={updateAgenda}
                            />
                        ))
                    }
                </div>
            </SectionDiv>
            <div id="editAgendaModal">
                <Modal show={modalShow} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Edit Agenda</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        TODO: Put Agenda Edit Form    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default AgendaFunction;