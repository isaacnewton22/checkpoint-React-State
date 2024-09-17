import React, {Component} from "react";

import {Container, Card, Row, Col, Button} from 'react-bootstrap'

class App extends Component {
  state = {
    person: {
      fullName: "Jonh Snow",
      bio: "Lorem ipsum dolor sit amet, soluta esse quos minima et consequuntur, laboriosam dicta inventore!",
      imgSrc: "https://img.freepik.com/photos-gratuite/rendu-3d-avatar-appel-zoom_23-2149556783.jpg?t=st=1717628699~exp=1717632299~hmac=9592c0f28273ec5bf320d1665c04905a6d780ee7537bbe482d774a9c53673cb3&w=1380",
      profession: "Développeur Full-Stack"
    },
    shows: false
  }

toggleShow = () => this.setState({ shows: !this.state.shows})

  render() {
    return(
      <Container className='Container w-300 h-300'>
        <Row className='Row'>
          <Col className='Col' lg={4}>
          <Button className='Button' onClick={this.toggleShow} >Show</Button>

            {this.state.shows && (
                <Card className='Card' >
                <img src={this.state.person.imgSrc} height={'200px'} />
                <Card.Body className='Card-Body'>
                  <Card.Title className='Card-Title'>
                    <h1>{this.state.person.fullName} </h1>
                  </Card.Title>
                  <Card.Text className='Card-Text'>
                  <h2>{this.state.person.profession} </h2>
                  <h3>{this.state.person.bio} </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            )}

          </Col>
        </Row>
      </Container>
    )
  }

}



export default App
