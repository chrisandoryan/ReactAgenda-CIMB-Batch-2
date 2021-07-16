import React from "react";
import styles from './header.module.css';
import styled from 'styled-components';

const Greeting = styled.p`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 0;
`

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // throw new Error("Header failed to be mounted.");
    }

    render() {
        return (
            <div id={styles.header}>
                <div>
                    <h1>ReactAgenda.io</h1>
                </div>
                <div id={styles.loginStatus}>
                    <Greeting>Welcome, Guest!</Greeting>
                    <a href="">Already have an account? Login here.</a>
                </div>
            </div>
        );
    }
}

export default Header;