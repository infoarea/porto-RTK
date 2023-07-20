import { Button, Form, Table } from "react-bootstrap"
import { AiOutlinePlus } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs';
import "./Tags.scss"

const Tags = () => {
  return (
    <>
    <div className="tags-area">
      <div className="head-area">
        <h2>Tags</h2>
        <Button > <AiOutlinePlus /> Create Brand</Button>
      </div>

      <div className="brand-table">
        <Table striped hover >
          <thead>
            <tr>
              <td>#</td>
              <td>Brand Name</td>
              <td>Brand Photo</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>

              <tr className='align-middle' >
                <td> 1 </td>
                <td>Saiful Islam</td>
                <td></td>
                <td> 
                  <Form.Check type="switch" />
                </td>
                <td><Button  className='btn-sm' variant='danger'> <BsTrash /></Button> <Button className='btn-sm' variant='warning'> <BiEdit /> </Button> </td>
              </tr>

          </tbody>
        </Table>
      </div>
    </div>
    </>
  )
}

export default Tags