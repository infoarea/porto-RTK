import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchAllPost } from "../../features/Blog/BlogApi"
import { Link } from "react-router-dom";

const BlogPost = () => {

    const dispatch = useDispatch();
    const {blogs} = useSelector(state=> state.blog);
  
    useEffect(()=>{
      dispatch(fetchAllPost())
    }, [dispatch])
  return (
    <>

    <div role="main" className="main">

        <section className="page-header page-header-modern bg-color-light-scale-1 page-header-md">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 align-self-center p-static order-2 text-center">
                        <h1 className="text-dark font-weight-bold text-8">Grid 3 Columns</h1>
                        <span className="sub-title text-dark">Check out our Latest News!</span>
                    </div>
                    <div className="col-md-12 align-self-center order-1">
                        <ul className="breadcrumb d-block text-center">
                            <li><a href="#">Home</a></li>
                            <li className="active">Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <div className="container py-4">

            <div className="row">
                <div className="col">
                    <div className="blog-posts">

                        <div className="row">
                            {blogs.map((item, index)=>{
                                return <> {item.status && <div className="col-md-4" key={index}>
                                <article className="post post-medium border-0 pb-0 mb-5">
                                    <div className="post-image">
                                        <Link to={item._id}>
                                            <img src={item.photo} className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                                        </Link>
                                    </div>

                                    <div className="post-content">
                                        
                                        <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link to={item._id}>{item.title}</Link></h2>
                                        
                                        <p>{item.content}</p>

                                        <div className="post-meta">
                                            <span><i className="far fa-user"></i> By <a href="#">Bob Doe</a> </span>
                                            <span><i className="far fa-folder"></i> <a href="#">News</a>, <a href="#">Design</a> </span>
                                            <span><i className="far fa-comments"></i> <a href="#">12 Comments</a></span>
                                            <span className="d-block mt-2"><a href="blog-post.html" className="btn btn-xs btn-light text-1 text-uppercase">Read More</a></span>
                                        </div>

                                    </div>
                                </article>
                            </div>}
                                    
                                </>
                            })}
                            

                        </div>

                        <div className="row">
                            <div className="col">
                                <ul className="pagination float-end">
                                    <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-left"></i></a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>
    </>
  )
}

export default BlogPost