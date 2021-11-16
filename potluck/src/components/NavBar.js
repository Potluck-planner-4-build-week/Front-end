import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {

    return (
        <div>
            <nav>
                <NavigationStyle>
                    <h1>Potluck Planner</h1>
                    <MenuStyle>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </MenuStyle>
                </NavigationStyle>
            </nav>
        </div>
    )
}

export default NavBar

const NavigationStyle = styled.div`
    padding: 1em;
    background-color: white;
    display:flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Yanone Kaffeesatz", sans-serif;

    h1 {
        font-weight: bold;
        font-size: 2em;
        color: black;
    }
`

const MenuStyle = styled.div`
    li {
        display: inline-block;
        padding: 0.3rem 1rem;
        
        a {
            text-decoration: none;
            color: black;
            font-size: 2em;
        }
    }
`