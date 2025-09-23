import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ComponentLibrariesList from './ComponentLibrariesList';

function ContainerExample() {
  return (
    <Container>
      <Row>
        <Col>
            I got this material from the following page: <a href="https://react-bootstrap-v2-bs5.netlify.app/docs/layout/grid" target="_blank">React-Bootstrap Grid</a>
        </Col>
      </Row>
      <Row>
        <Col>
            <h4>Available component libraries</h4>
            <ComponentLibrariesList />
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;