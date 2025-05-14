import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

class BookList extends Component {
  state = {
    bookName: "",
    showResults: false,
  };

  handleSub = (e) => {
    e.preventDefault();
    this.setState({ showResults: true });
  };

  render() {
    return (
      <Container fluid className="p-3 dimensione">
        <Container className="mt-3">
          <Form onSubmit={this.handleSub}>
            <Form.Group className="mb-3">
              <Form.Label>Search Your Book</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Cerca Il nome del tuo Libro"
                value={this.state.bookName}
                onChange={(e) => {
                  this.setState({ bookName: e.target.value });
                }}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
        {this.state.showResults && (
          <Container fluid className="mt-5 py-4">
            <Row xs={1} md={2} lg={4} className="text-center  g-4">
              {this.props.books
                .filter((book) => book.title.toLowerCase().includes(this.state.bookName.toLowerCase()))
                .map((book) => (
                  <Col>{SingleBook(book)}</Col>
                ))}
            </Row>
          </Container>
        )}
      </Container>
    );
  }
}

export default BookList;
