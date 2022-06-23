import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { AiOutlineAlignCenter, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import './NavTop.css';

function NavTop() {
    const [toggle, setToggle] = useState(false);

    function toggleClick() {
        if(toggle) {
            setToggle(false);
        } else {
            setToggle(true);
        }
    }

    return (
        <>
            <Navbar variant="light" expand="lg">
                <Container>
                <Navbar.Brand>
                    <Link className="navbar-title" to="/">
                        GuessYour<span className="change">Crush</span>
                    </Link>
                </Navbar.Brand>
                <button className="toggle-menu" onClick={toggleClick}>
                    {toggle ?
                        <AiOutlineClose />
                    :
                        <AiOutlineAlignCenter />
                    }
                </button>
                <Nav className="navbar-link ms-auto">
                    <Nav.Link><NavLink to="/" activeClassName="active">Beranda</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/cara-main" activeClassName="active">Cara Main</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/tentang" activeClassName="active">Tentang</NavLink></Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            {toggle ?
                <div className="menu">
                    <Container>
                        <div className="menu-list">
                            <NavLink to="/" activeClassName="active">🏠 Beranda</NavLink>
                            <NavLink to="/cara-main" activeClassName="active">📰 Cara Main</NavLink>
                            <NavLink to="/tentang" activeClassName="active">🔑 Tentang</NavLink>
                        </div>
                    </Container>
                </div>
            :
                ""
            }
        </>
    )
}

export default NavTop;