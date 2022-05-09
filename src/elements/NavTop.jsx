import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './NavTop.css';

function NavTop() {
    return (
        <>
            <Navbar variant="light" expand="lg">
                <Container>
                <Navbar.Brand>
                    <Link className="navbar-title" to="/">
                        GuessYour<span className="change">Crush</span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle className="shadow-none" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-link ms-auto">
                        <Nav.Link><NavLink to="/" activeClassName="active">Beranda</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/cara-main" activeClassName="active">Cara Main</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/tentang" activeClassName="active">Tentang</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavTop;