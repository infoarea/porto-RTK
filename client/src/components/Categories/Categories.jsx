import { Button, Form, Table } from "react-bootstrap"
import { AiOutlinePlus } from "react-icons/ai"
import { BiEdit } from "react-icons/bi"
import { BsTrash } from "react-icons/bs"
import "./Categories.scss"
import CreateCategory from "./CreateCategory"
import { useEffect, useState } from "react"
import EditCategory from "./EditCategory"
import { useDispatch, useSelector } from "react-redux"
import { deleteCategory, fetchAllCategory, updateCategoryStatus } from "../../features/Category/CategoryApi"
import swal from "sweetalert"

const Categories = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [dataId, setDatId] = useState(null);

    const dispatch = useDispatch();
    const {categories} = useSelector(state=> state.category);
  
    useEffect(()=>{
      dispatch(fetchAllCategory())
    }, [dispatch])

     //Edit category handler
    const handleEditCategory = (id)=>{
        setDatId(id)
        setShow2(true)
    }

    //Delete Category
    const handleDelete = (id) =>{

      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteCategory(id))
          swal("Your Data has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your Data is safe!");
        }
      });

    }
    //Status Change
    const handleCategoryStatusChangle = (id, status)=>{
        dispatch(updateCategoryStatus({id, status : !status}))
    }
  return (
    <>
    <div className="category-area">
    <div className="head-area">
      <h2>Categories</h2>
      <Button onClick={()=> setShow(true)}> <AiOutlinePlus /> Create Category</Button>
    </div>

    <div className="brand-table">
      <Table striped hover >
        <thead>
          <tr>
            <td>#</td>
            <td>Category Name</td>
            <td>Category Photo</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {categories?.map((item, index)=>{
            return <tr className='align-middle' key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td> {item.photo ? <img style={{ width : "40px", height : "40px", objectFit: "cover"}} src={item.photo}  alt="" /> : "No Image Found" }</td>
                    <td> 
                      <Form.Check onChange={()=> handleCategoryStatusChangle(item._id, item.status)} checked={item.status} type="switch" />
                    </td>
                    <td><Button onClick={()=> handleDelete(item._id)} className='btn-sm' variant='danger'> <BsTrash /></Button> <Button onClick={()=> handleEditCategory(item._id)} className='btn-sm' variant='warning'> <BiEdit /> </Button> </td>
                  </tr>
          })}
            
          
          
        
        </tbody>
      </Table>
    </div>
  </div>

  {/* Modals */}
  <CreateCategory show={show} setShow={setShow} />
  <EditCategory show={show2} setShow={setShow2} dataId={dataId} />
    </>
  )
}

export default Categories