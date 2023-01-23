import React, { useContext } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';


export const Main = () => {

    const { user, logOut } = useContext(AuthContext);


    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand >
                        <Link className="no-decoration" to="/home">
                            <h3><b>Home</b></h3>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <span className='m-3'>{user.displayName}</span>
                        </Navbar.Text>
                        <Button variant="light" onClick={logOut}><FaSignOutAlt /></Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>

                <Outlet />
            </Container>
        </>
    )
}
