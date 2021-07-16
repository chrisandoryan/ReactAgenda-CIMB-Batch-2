import { shallow } from "enzyme";
import AgendaClass from "../AgendaClass";


describe("Agenda Page (Class)", () => {
    var component = shallow(<AgendaClass />);
    it("should have 2 agendas in its initial state", () => {
        expect(component.state().agendas.length).toBe(2);
    });
    it("should delete agenda with id 0 when deleteAgenda is called", () => {
        component.instance().deleteAgenda(0);
        expect(component.state().agendas.length).toBe(1);
    });
    it("should add new agenda when addAgenda is called", () => {
        component.instance().addAgenda({
            agendaTitle: "Testing Add Agenda",
            agendaDate: "16 Juli 2021",
            agendaTime: "12.00",
            agendaDesc: "Unit Test Agenda Page (Class)"
        });
        expect(component.state().agendas.length).toBe(2);
    });
})