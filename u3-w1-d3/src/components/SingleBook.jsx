import Card from "react-bootstrap/Card";

function SingleBook(props) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Category:<strong> {props.category}</strong>
        </Card.Text>
        <Card.Text>
          Cost:<strong> {props.price}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
