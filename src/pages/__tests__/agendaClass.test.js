import { shallow } from "enzyme";
import AgendaClass from "../AgendaClass";


describe("Agenda Page (Class)", () => {
    it("should have 2 agendas in its state", () => {
        let component = shallow(<AgendaClass />);
        expect(component.state().agendas.length).toBe(2);
    });
    it("should delete agenda with id 1 when deleteAgenda is called", () => {
        
    })
})