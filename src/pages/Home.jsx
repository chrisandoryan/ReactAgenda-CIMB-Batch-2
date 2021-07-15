import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {

    render() {
        return (
            <div>
                <a href="/landing">
                    Test Tag a
                </a>
                <br />
                <Link to="/landing">
                    Landing Page
                </Link>
                <br />
                <Link to="/404">
                    404 Page
                </Link>
                <br />
                <Link to="/agenda/class">
                    Agenda (Class)
                </Link>
                <br />
                <Link to="/agenda/function">
                    Agenda (Function)
                </Link>
            </div>
        )
    }
}

export default Home;