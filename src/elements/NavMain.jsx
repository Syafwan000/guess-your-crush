import { Navbar, Nav, Container } from "react-bootstrap";
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
                        <Link className="btn-back" to="/">Kembali</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavMain;