import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/kimetsu.jpg"
import everythingImage from "../assets/images/trending/86.jpg"
import infiniteImage from "../assets/images/trending/blueLock.jpg"
import jokerImage from "../assets/images/trending/mashle.jpg"
import lightyearImage from "../assets/images/trending/edensZero.jpg"
import morbiusImage from "../assets/images/trending/blackClover.jpg"

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING ANIME</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Kimetsu No Yaiba</Card.Title>
                  <Card.Text className="text-left">
                  This anime is in the Action Shounen Fantasy Drama genre
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 months ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={everythingImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    86
                  </Card.Title>
                  <Card.Text className="text-left">
                  This anime is in the Action Military Fantasy Drama Mecha genre
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 weeks ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={infiniteImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Blue Lock</Card.Title>
                  <Card.Text className="text-left">
                  This anime is in the Sports Shounen School Drama genre
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 months ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={jokerImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Mashle</Card.Title>
                  <Card.Text className="text-left">
                  This anime is in the Shounen Comedy School Action genre
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 weeks ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={lightyearImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Edens Zero</Card.Title>
                  <Card.Text className="text-left">
                  This anime is in the Shounen Comedy Action Adventure genre
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 weeks ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={morbiusImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Black Clover</Card.Title>
                  <Card.Text className="text-left">
                  This anime is in the Shounen Comedy Action Magic genre
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 months ago
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

export default Trending