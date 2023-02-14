import Card from "react-bootstrap/Card"
import Modal from "react-bootstrap/Modal"

export default function GalleryCard(props) {

  const {id, title, description, media} = props.data

  return (
    <>
      <Card>
        <h2>{title}</h2>
        <p>{description}</p>
        {<div dangerouslySetInnerHTML={{__html: media}} />} 
      </Card>
    </>
  )
}