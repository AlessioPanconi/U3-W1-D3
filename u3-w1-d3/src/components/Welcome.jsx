import { Container, Alert } from "react-bootstrap";

function Welcome() {
  return (
    <Container fluid>
      <h4>Ciao a tutti e benvenuti nel mio shop</h4>
      <Alert variant="success">Attenzione!!!</Alert>
    </Container>
  );
}

export default Welcome;
