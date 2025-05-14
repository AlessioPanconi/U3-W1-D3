import Card from "react-bootstrap/Card";
import fantasyBooks from "../data/fantasy.json";
import horrorBooks from "../data/horror.json";
import romanceBooks from "../data/romance.json";
import { Component } from "react";
import { Alert, Col, Container, Row, Button } from "react-bootstrap";

class AllTheBooks extends Component {
  state = {
    selectedLibrary: null,
  };

  render() {
    return (
      <Container fluid className="p-3 dimensione">
        <Row className=" justify-content-center text-center">
          <Col>
            <Button variant="success" onClick={() => this.setState({ selectedLibrary: fantasyBooks })}>
              Fantasy
            </Button>
          </Col>
          <Col>
            <Button variant="dark" onClick={() => this.setState({ selectedLibrary: horrorBooks })}>
              Horror
            </Button>
          </Col>
          <Col>
            <Button variant="danger" onClick={() => this.setState({ selectedLibrary: romanceBooks })}>
              Romance
            </Button>
          </Col>
        </Row>
        {this.state.selectedLibrary ? (
          <Container fluid className="mt-5 py-4">
            <Row xs={1} md={2} lg={4} className="text-center  g-4">
              {this.state.selectedLibrary.map((book) => (
                <Col>
                  <Card className="h-100">
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>
                        Category:<strong> {book.category}</strong>
                      </Card.Text>
                      <Card.Text>
                        Cost:<strong> {book.price}</strong>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        ) : (
          <Alert variant="success" className="mt-5">
            Attenzione clicca un bottone per generare la lista!!!
          </Alert>
        )}
      </Container>
    );
  }
}

export default AllTheBooks;
