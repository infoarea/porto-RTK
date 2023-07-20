
import { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { updateCategory } from '../../features/Category/CategoryApi'
import axios from 'axios'

const EditCategory = ({show, setShow, dataId}) => {
  const [preview, setPreview] = useState(null)
    const [editIdata, setEditData] = useState({
        name : "",
        photo : "",
    })


    const dispatch = useDispatch()
    const {categories} = useSelector(state=> state.category)

    const edit_data = categories.find(data=> data._id === dataId)
    useEffect(()=>{
        setEditData(edit_data)
    }, [dataId, categories])

    
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
            
            dispatch(updateCategory({ name: editIdata.name, photo: res.data.url, id: dataId}));
            setShow(false)

        })
      } else {
        dispatch(updateCategory({name: editIdata.name, photo: editIdata.photo, id: dataId}));
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
              <Form.Label>Edit Category Name</Form.Label>
              <Form.Control value={editIdata?.name} onChange={(e)=> setEditData((prevState)=> ({...prevState, name : e.target.value}))} type="text" />

              <Form.Label>Edit Photo</Form.Label>
              <Form.Control onChange={handleCategoryLogo} type="file" />
              
              <br />
              {preview ? <img style={{maxWidth: "100%"}} src={URL.createObjectURL(preview)} alt="" /> : <img style={{maxWidth: "100%"}} src={editIdata?.photo && editIdata.photo} alt="" />}
              
              <br />
              <br />
              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form.Group>
            </Form>
        </Modal.Body>
    </Modal>
    </>
  )
}

export default EditCategory