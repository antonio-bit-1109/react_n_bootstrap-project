import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const TopBar = ({ title, subtitle, link, location, Number, home }) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid="xl">
                {" "}
                {/* sto dando il container-fluid ed il valore "xl" dice che "sarà fluid fino a xl, dopo torna container standard  */}
                <Navbar.Brand href="#home">
                    {title} - {subtitle}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={home}>Home</Nav.Link>
                        <Nav.Link href={link}>Il nostro Ristorante</Nav.Link>
                        <Nav.Link href={location}>Dove Siamo</Nav.Link>
                        <Nav.Link href={Number}>Contatti</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopBar;
