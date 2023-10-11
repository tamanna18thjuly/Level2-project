import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style.css";
function Imgcard(props) {
  return (
    <div class = "card-container">
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={props.img} style={{height:400}}/>
      <Card.Body style={{backgroundColor:'black',color:'white'}}>
        <Card.Title style={{color:'white'}}>{props.title}</Card.Title>
        <Card.Text>
          {props.txt}
        </Card.Text>
        <Button variant="primary" onClick={props.srcc}>Click Here</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Imgcard;