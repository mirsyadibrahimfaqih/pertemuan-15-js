import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanImage from "../assets/images/superhero/ragnacrimson.jpg"
import avengerImage from "../assets/images/superhero/jujutsukaisen.jpg"
import batmanImage from "../assets/images/superhero/spyXfamily.jpg"
import robinhoodImage from "../assets/images/superhero/dr.stone.jpg"
import spidermanImage from "../assets/images/superhero/nanatsu.jpg"
import supermanImage from "../assets/images/superhero/helck.jpg"

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">NEW ANIME</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={antmanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Ragna Crimson</Card.Title>
                  <Card.Text className="text-left">
                  This anime is in the Action Shounen Fantasy Adventure genre
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 5 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={avengerImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Jujutsu Kaisen</Card.Title>
                  <Card.Text className="text-left">
                  This anime is in the Comedy Action Shounen Fantasy genre
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={batmanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Spy x Family</Card.Title>
                  <Card.Text className="text-left">
                  This anime is in the Comedy Action Shounen School genre
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 days ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={robinhoodImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Dr Stone</Card.Title>
                  <Card.Text className="text-left">
                  This anime is in the Comedy Shounen genre
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 hours ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={spidermanImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Nanatsu no Taizai</Card.Title>
                  <Card.Text className="text-left">
                  This anime is in the Action Fantasy Adventure genre
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 hours ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={supermanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Helck</Card.Title>
                  <Card.Text className="text-left">
                  This anime is in the Action Fantasy Comedy genre
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SuperHero