import React from "react";

import styles from "./styles/header.module.css";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // throw new Error("Header failed to be mounted.");
    }

    render() {
        return (
            <div id={styles.headerContainer}>
                <div>
                    <h1 id={styles.appHeader}>ReactAgenda.io</h1>
                </div>
                <div id={styles.greetingContainer}>
                    <h2>Welcome, Guest!</h2>
                    <a href="">Already have an account? Login here.</a>
                </div>
            </div>
        );
    }
}

export default Header;