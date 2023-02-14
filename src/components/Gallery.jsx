import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { data } from "../data/data.js"
import GalleryCard from "./GalleryCard"

export default function Gallery() {
  {console.log(data)}
  return (
    <>
      <h1>Gallery</h1>
      <Container>
        <Row>
          {data.map ( (element) => (
            <Col 
            lg={4}
            key={element.id}
            ><GalleryCard 
            data={element}
            /></Col>
          ))}
            
        </Row>
      </Container>
    </>
  )
}