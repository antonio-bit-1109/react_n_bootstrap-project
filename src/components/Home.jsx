import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Home = (props) => {
    return (
        <Container className={props.className}>
            <Row className="justify-content-center">
                <Col md={10}>
                    <h2 className={props.fontsize_h2}>Benvenuto nel nostro Ristorante! </h2>
                    <p className={props.textSize}>niente coccinelle da mangiare 👺</p>
                </Col>
                <Col xs={6}>
                    {" "}
                    <Carousel>
                        <Carousel.Item>
                            <img src="http://placekitten.com/400" alt="" />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="http://placekitten.com/400" alt="" />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="http://placekitten.com/400" alt="" />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>{" "}
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
