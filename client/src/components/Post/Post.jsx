import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
import "./Post.scss"
import { useDispatch, useSelector } from "react-redux";
import { deleteBlogPost, fetchAllPost, updateBlogPostStatus } from "../../features/Blog/BlogApi";
import swal from "sweetalert";


const Post = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [dataId, setDataId] = useState(false);
    const {blogs} = useSelector(state=> state.blog);

    
    useEffect(()=>{
      dispatch(fetchAllPost())
    }, [dispatch])

    const handleEditPost = (id) =>{
      setDataId(id)
      setShow2(true)
    };

    //Delete Blog Post
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
          dispatch(deleteBlogPost(id))
          swal("Your Data has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your Data is safe!");
        }
      });

    }

    //Status Change
    const handlePostStatusChangle = (id, status)=>{
      dispatch(updateBlogPostStatus({id, status : !status}))
  }
  return (
    <>
    <div className="category-area">
    <div className="head-area">
      <h2>Posts</h2>
      <Button onClick={()=> setShow(true)}> <AiOutlinePlus /> Create Post</Button>
    </div>

    <div className="brand-table">
      <Table striped hover >
        <thead>
          <tr>
            <td>#</td>
            <td>Post Title</td>
            <td>Post Photo</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>

          {blogs.map((item, index)=>{
            return <tr className='align-middle' key={index}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.photo ? <img style={{ width : "40px", height : "40px", objectFit: "cover"}} src={item.photo}  alt="" /> : "No Image Found"}</td>
            <td> 
              <Form.Check onChange={()=> handlePostStatusChangle(item._id, item.status)} checked={item.status} type="switch" />
            </td>
            <td><Button className='btn-sm' variant='danger' onClick={()=> handleDelete(item._id)}> <BsTrash /></Button> <Button onClick={()=> handleEditPost(item._id)} className='btn-sm' variant='warning'> <BiEdit /> </Button> </td>
          </tr>
          })}
          
        
        </tbody>
      </Table>
    </div>
  </div>

  {/* Modals */}
  <CreatePost show={show} setShow={setShow} />
  <EditPost show={show2} setShow={setShow2} dataId={dataId} />
    </>
  )
}

export default Post