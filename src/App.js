import React from 'react';
import Card from '../src/Components/Card';
import NavScroll from './Components/Navbar';
import "./style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <NavScroll></NavScroll>
      <h1 style={{fontSize:65,color:'yellow',textAlign:'center'}}>Welcome to Fashion World</h1>
      <Container>
        <Row>
          <Col>
      <Card title="Women's CLothing" 
            txt="Various Design's in Women's Collections"
            img = "https://m.media-amazon.com/images/I/61c531f8dzL._AC_SX569_.jpg">
            
      </Card>
      </Col>

      <Col>
      <Card title="Men's CLothing" 
            txt="Various Design's in Men's Collections"
            img = "https://cdn.dsmcdn.com/ty977/product/media/images/20230801/10/398824067/960572964/2/2_org_zoom.jpg">
      </Card>
      </Col>
      <Col>

      <Card title="Kid's CLothing" 
            txt="Various Design's in Kid's Collections"
            img = "https://www.babycouture.in/blog/wp-content/uploads/2018/10/The-Best-of-Kids-Traditional-Wear-1280x720.png">
      </Card>
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
