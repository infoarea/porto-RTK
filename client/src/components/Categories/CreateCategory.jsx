
import axios from 'axios';
import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { createCategory } from '../../features/Category/CategoryApi';

const CreateCategory = ({show, setShow}) => {
    const dispatch = useDispatch()
    const [input, setInput] = useState("");
    const [imgInput, setImgInput] = useState(null);

    //Handle Form submit
    const handleCategoryFormSubmit = (e) =>{
      e.preventDefault()
      
          const data = new FormData();

          data.append('file', imgInput)
          data.append('cloud_name', 'dwvw7qjhc')
          data.append('upload_preset', 'wisdomweb')

          axios.post("https://api.cloudinary.com/v1_1/dwvw7qjhc/image/upload", data).then((res)=>{

            let img = ""
            img =res.data.url;
            dispatch(createCategory({name: input, photo: img}));
            setShow(false);
            setInput("")
          })
          

    }

    
  return (
    <>
    <Modal show={show} centered onHide={()=> setShow(false)}  >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            
            <Form onSubmit={handleCategoryFormSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Category Name</Form.Label>
              <Form.Control name='name' value={input} onChange={(e)=> setInput(e.target.value)} type="text" />

              <Form.Label>Category Photo</Form.Label>
              <Form.Control onChange={(e)=> setImgInput(e.target.files[0])} type="file" />
              <br />
              <br />
              <img style={{maxWidth: "100%"}} src={imgInput && URL.createObjectURL(imgInput)} alt="" />
              <br />
              <br />
              <Button variant="primary" type="submit">
                Add New
              </Button>
            </Form.Group>
            </Form>
        </Modal.Body>
    </Modal>
    </>
  )
}

export default CreateCategory