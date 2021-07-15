import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {

    render() {
        return (
            <div>
                <a href="/landing">Test Tag a</a>
                <Link to="/landing">
                    Landing Page
                </Link>
                <Link to="/404">
                    404 Page
                </Link>
            </div>
        )
    }
}

export default Home;