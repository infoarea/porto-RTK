
import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createPost } from '../../features/Blog/BlogApi'
import axios from 'axios'

const CreatePost = ({show, setShow}) => {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        title: "",
        content: "",
    })
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [imgInput, setImgInput] = useState(null)

    //Input Handler
    const handleInputChange = (e) =>{
      setInput((prevState)=>({
          ...prevState,
          [e.target.name] : e.target.value
      }))
    }
    //Image input handler
    const handleImage = (e) =>{
      setImgInput(e.target.files[0])
    }
    //Post form submit
    const handlePostFormSubmit = (e) =>{
          e.preventDefault()

          const data = new FormData();

          data.append('file', imgInput)
          data.append('cloud_name', 'dwvw7qjhc')
          data.append('upload_preset', 'wisdomweb')

          axios.post("https://api.cloudinary.com/v1_1/dwvw7qjhc/image/upload", data).then((res)=>{

              dispatch(createPost({title: input.title, content: input.content, photo: res.data.url}))
              setShow(false)
              setTitle("")
              setContent("")

          })
    }

  return (
    <>
    <Modal show={show} centered onHide={()=> setShow(false)}  >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            
            <Form onSubmit={handlePostFormSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Post Title</Form.Label>
              <Form.Control name='title' value={input.title} onChange={handleInputChange} type="text" />

              <Form.Label>Post Photo</Form.Label>
              <Form.Control onChange={handleImage} type="file" />
              <br />
              <img style={{maxWidth: "100%"}} src={imgInput && URL.createObjectURL(imgInput)} alt="" /> 
              <br />
              <Form.Label>Post Content</Form.Label>
              <Form.Control as="textarea" placeholder="Post Content" name='content' value={input.content} onChange={handleInputChange} />
              <br />
              <Button variant="primary" type="submit">
                Add New Post
              </Button>
            </Form.Group>
            </Form>
        </Modal.Body>
    </Modal>
    </>
  )
}

export default CreatePost