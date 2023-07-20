import { Col, Container, Row } from "react-bootstrap"
import "./Admin.scss"
import { Link, Outlet } from "react-router-dom"

const Admin = () => {
  return (
    <>
    <div className="admin-page">
        <Container className='my-5'>
          <Row>
            <Col md={2}>
              <div className="dashboard-menu">
                <ul>
                  <li><Link to={'/admin'}> Dashboard </Link></li>
                  <li><Link to={'post'}> Post </Link></li>
                  <li><Link to={'category'}> Category </Link></li>
                  <li><Link to={'tag'}> Tags </Link></li>
                </ul>
              </div>
            </Col>
            <Col md={10}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Admin