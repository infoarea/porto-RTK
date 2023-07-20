
import { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { updateBlogPost } from '../../features/Blog/BlogApi';
import axios from 'axios';

const EditPost = ({show, setShow, dataId}) => {
      const [preview, setPreview] = useState(null)
      const [editIdata, setEditData] = useState({
          title : "",
          content : "",
          photo : ""
      });

    const dispatch = useDispatch()
    const {blogs} = useSelector(state=> state.blog);

    const edit_data = blogs.find(data=> data._id === dataId)
    useEffect(()=>{
        setEditData(edit_data)
    }, [dataId, blogs]);

    //Category logo hangler
    const handleCategoryLogo = (e) =>{
      setPreview(e.target.files[0]);
  }
  //Modal onHide Manage
  const handleOnhide = ()=>{
      setShow(false)
      setPreview(null)
  }

  //Update category submit 
  const handleEditSubmit = (e) =>{
    e.preventDefault()

          const data = new FormData();
        if (preview) {
          data.append('file', preview)
          data.append('cloud_name', 'dwvw7qjhc')
          data.append('upload_preset', 'wisdomweb')

          axios.post("https://api.cloudinary.com/v1_1/dwvw7qjhc/image/upload", data).then((res)=>{

              let updatData = {title: editIdata.title, content: editIdata.content, photo: res.data.url}
              
              dispatch(updateBlogPost({ updatData , id: dataId}));
              setShow(false)

          })
        }else {
          let updatData = {title: editIdata.title, content: editIdata.content, photo: editIdata.photo}
          dispatch(updateBlogPost({ updatData , id: dataId}));
        }
          


    setShow(false)
  }
  return (
    <>
    <Modal show={show} centered onHide={handleOnhide} >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            
            <Form onSubmit={handleEditSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Edit Post Title</Form.Label>
              <Form.Control value={editIdata?.title} onChange={(e)=> setEditData((prevState)=> ({...prevState, title : e.target.value}))}  type="text" />

              <Form.Label>Edit Photo</Form.Label>
              <Form.Control onChange={handleCategoryLogo} type="file" />
              
              <br />
              {preview ? <img style={{maxWidth: "100%"}} src={URL.createObjectURL(preview)} alt="" /> : <img style={{maxWidth: "100%"}} src={editIdata?.photo && editIdata.photo} alt="" />}
              
              <br />
              <Form.Control as="textarea" placeholder="Post Content" name='content' value={editIdata?.content} onChange={(e)=> setEditData((prevState)=> ({...prevState, content : e.target.value}))} />
              <br />
              <Button variant="primary" type="submit">
                Update Post
              </Button>
            </Form.Group>
            </Form>
        </Modal.Body>
    </Modal>
    </>
  )
}

export default EditPost