import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleBlogPost } from "../../features/Blog/BlogApi";
import { useEffect } from "react";

import authImg from "../../assets/img/avatars/avatar.jpg"
import avatar2 from "../../assets/img/avatars/avatar-2.jpg"
import avatar3 from "../../assets/img/avatars/avatar-3.jpg"
import avatar4 from "../../assets/img/avatars/avatar-4.jpg"



const SingleBlog = () => {
    const dispatch = useDispatch()
    const {singleBlogs} = useSelector(state=> state.singleBlog)
    const {id} = useParams()

    useEffect(()=>{
        dispatch(singleBlogPost(id))
    }, [singleBlogs])
  return (
    <>
    <div role="main" className="main">

<section className="page-header page-header-modern bg-color-light-scale-1 page-header-md">
    <div className="container">
        <div className="row">
            <div className="col-md-12 align-self-center p-static order-2 text-center">
                <h1 className="text-dark font-weight-bold text-8">Post Full Width</h1>
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
            <div className="blog-posts single-post">

                <article className="post post-large blog-single-post border-0 m-0 p-0">
                    <div className="post-image ms-0">
                        <a href="blog-post.html">
                            <img src={singleBlogs.photo} className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                        </a>
                    </div>

                    <div className="post-date ms-0">
                        <span className="day">10</span>
                        <span className="month">Jan</span>
                    </div>

                    <div className="post-content ms-0">

                        <h2 className="font-weight-semi-bold"> {singleBlogs.title}</h2>

                        <div className="post-meta">
                            <span><i className="far fa-user"></i> By <a href="#">John Doe</a> </span>
                            <span><i className="far fa-folder"></i> <a href="#">Lifestyle</a>, <a href="#">Design</a> </span>
                            <span><i className="far fa-comments"></i> <a href="#">12 Comments</a></span>
                        </div>

                        <p>{singleBlogs.content}</p>

                        <div className="post-block mt-5 post-share">
                            <h4 className="mb-3">Share this Post</h4>

                            <div className="addthis_inline_share_toolbox"></div>
                            <script type="text/javascript" src="../../../../s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60ba220dbab331b0"></script>

                        </div>

                        <div className="post-block mt-4 pt-2 post-author">
                            <h4 className="mb-3">Author</h4>
                            <div className="img-thumbnail img-thumbnail-no-borders d-block pb-3">
                                <a href="blog-post.html">
                                    <img src={authImg} alt="" />
                                </a>
                            </div>
                            <p><strong className="name"><a href="#" className="text-4 pb-2 pt-2 d-block">John Doe</a></strong></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui. </p>
                        </div>
                        <div id="comments" className="post-block mt-5 post-comments">
                            <h4 className="mb-3">Comments (3)</h4>

                            <ul className="comments">
                                <li>
                                    <div className="comment">
                                        <div className="img-thumbnail img-thumbnail-no-borders d-none d-sm-block">
                                            <img className="avatar" alt="" src={avatar2} />
                                        </div>
                                        <div className="comment-block">
                                            <div className="comment-arrow"></div>
                                            <span className="comment-by">
                                                <strong>John Doe</strong>
                                                <span className="float-end">
                                                    <span> <a href="#"><i className="fas fa-reply"></i> Reply</a></span>
                                                </span>
                                            </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui.</p>
                                            <span className="date float-end">January 12, 2023 at 1:38 pm</span>
                                        </div>
                                    </div>

                                    <ul className="comments reply">
                                        <li>
                                            <div className="comment">
                                                <div className="img-thumbnail img-thumbnail-no-borders d-none d-sm-block">
                                                    <img className="avatar" alt="" src={avatar3} />
                                                </div>
                                                <div className="comment-block">
                                                    <div className="comment-arrow"></div>
                                                    <span className="comment-by">
                                                        <strong>John Doe</strong>
                                                        <span className="float-end">
                                                            <span> <a href="#"><i className="fas fa-reply"></i> Reply</a></span>
                                                        </span>
                                                    </span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                                    <span className="date float-end">January 12, 2023 at 1:38 pm</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment">
                                                <div className="img-thumbnail img-thumbnail-no-borders d-none d-sm-block">
                                                    <img className="avatar" alt="" src={avatar4} />
                                                </div>
                                                <div className="comment-block">
                                                    <div className="comment-arrow"></div>
                                                    <span className="comment-by">
                                                        <strong>John Doe</strong>
                                                        <span className="float-end">
                                                            <span> <a href="#"><i className="fas fa-reply"></i> Reply</a></span>
                                                        </span>
                                                    </span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                                    <span className="date float-end">January 12, 2023 at 1:38 pm</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="comment">
                                        <div className="img-thumbnail img-thumbnail-no-borders d-none d-sm-block">
                                            <img className="avatar" alt="" src={authImg} />
                                        </div>
                                        <div className="comment-block">
                                            <div className="comment-arrow"></div>
                                            <span className="comment-by">
                                                <strong>John Doe</strong>
                                                <span className="float-end">
                                                    <span> <a href="#"><i className="fas fa-reply"></i> Reply</a></span>
                                                </span>
                                            </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <span className="date float-end">January 12, 2023 at 1:38 pm</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="comment">
                                        <div className="img-thumbnail img-thumbnail-no-borders d-none d-sm-block">
                                            <img className="avatar" alt="" src={authImg} />
                                        </div>
                                        <div className="comment-block">
                                            <div className="comment-arrow"></div>
                                            <span className="comment-by">
                                                <strong>John Doe</strong>
                                                <span className="float-end">
                                                    <span> <a href="#"><i className="fas fa-reply"></i> Reply</a></span>
                                                </span>
                                            </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <span className="date float-end">January 12, 2023 at 1:38 pm</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>

                        <div className="post-block mt-5 post-leave-comment">
                            <h4 className="mb-3">Leave a comment</h4>

                            <form className="contact-form p-4 rounded bg-color-grey" action="https://www.okler.net/previews/porto/9.9.3/php/contact-form.php" method="POST">			
                                <div className="p-2">
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <label className="form-label required font-weight-bold text-dark">Full Name</label>
                                            <input type="text" value="" data-msg-required="Please enter your name." style={{maxlength: "100"}} className="form-control" name="name" required />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label className="form-label required font-weight-bold text-dark">Email Address</label>
                                            <input type="email" value="" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." style={{maxlength: "100"}} className="form-control" name="email" required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col">
                                            <label className="form-label required font-weight-bold text-dark">Comment</label>
                                            <textarea style={{maxlength: "5000"}} data-msg-required="Please enter your message." rows="8" className="form-control" name="message" required></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col mb-0">
                                            <input type="submit" value="Post Comment" className="btn btn-primary btn-modern" data-loading-text="Loading..." />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </article>

            </div>
        </div>
    </div>

</div>

</div>
    </>
  )
}

export default SingleBlog