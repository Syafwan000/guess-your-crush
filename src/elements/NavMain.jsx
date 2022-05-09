import { Navbar, Nav, Container } from "react-bootstrap";
import { BiLeftArrowAlt } from 'react-icons/bi';
import { Link } from "react-router-dom";
import './NavMain.css';

function NavMain(props) {
    return (
        <>
            <Navbar className="nav-main py-1" sticky="top" variant="light" expand="lg">
                <Container>
                <Navbar.Brand>
                    <Link className="navbar-title" to="/">
                        GuessYour<span className="change">Crush</span>
                    </Link>
                    <p className="length-counter m-0">{!props.children ? '0' : props.children} Huruf</p>
                </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link>
                            <Link className="main-back" to="/"><BiLeftArrowAlt className="back-icon py-1" />Kembali</Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavMain;