import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // throw new Error("Header failed to be mounted.");
    }

    render() {
        return (
            <div>
                <div>
                    <h1>ReactAgenda.io</h1>
                </div>
                <div style={{textAlign: "left"}}>
                    <h2>Welcome, Guest!</h2>
                    <a href="">Already have an account? Login here.</a>
                </div>
            </div>
        );
    }
}

export default Header;