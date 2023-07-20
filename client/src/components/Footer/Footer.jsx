
const Footer = () => {
  return (
    <>
        <footer id="footer">
            <div className="container">
                <div className="footer-ribbon">
                    <span>Get in Touch</span>
                </div>
                <div className="row py-5 my-4">
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <h5 className="text-3 mb-3">ABOUT THE BLOG</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar magna semper scelerisque.</p>
                        <p className="mb-2">Praesent venenatis turpis vitae purus semper, eget sagittis velit venenatis ptent taciti sociosqu ad litora...</p>
                        <p className="mb-0"><a href="#" className="btn-flat btn-xs text-color-light p-relative top-5"><strong className="text-2">VIEW MORE</strong><i className="fas fa-angle-right p-relative top-1 ps-2"></i></a></p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <h5 className="text-3 mb-3">RECENT POSTS</h5>
                        <ul className="list-unstyled mb-0">
                            <li className="d-flex mb-3 pb-1">
                                <article className="d-flex">
                                    <a href="#">
                                        <img className="me-3 rounded-circle" src="img/office/our-office-4-square.jpg" alt="" style={{maxWidth: "70px"}} />
                                    </a>
                                    <div className="media-body">
                                        <a href="#">
                                            <h6 className="text-3 text-color-light opacity-8 line-height-7 ls-0 mb-1">Lorem ipsum dolor sit, consectetur adipiscing elit.</h6>
                                            <p className="text-2 mb-0">12:53 AM Dec 19th</p>
                                        </a>
                                    </div>
                                </article>
                            </li>
                            <li className="d-flex">
                                <article className="d-flex">
                                    <a href="#">
                                        <img className="me-3 rounded-circle" src="img/office/our-office-5-square.jpg" alt="" style={{maxWidth: "70px"}} />
                                    </a>
                                    <div className="media-body">
                                        <a href="#">
                                            <h6 className="text-3 text-color-light opacity-8 line-height-7 ls-0 mb-1">Lorem ipsum dolor sit, consectetur adipiscing elit.</h6>
                                            <p className="text-2 mb-0">12:53 AM Dec 19th</p>
                                        </a>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 mb-md-0">
                        <h5 className="text-3 mb-3">RECENT COMMENTS</h5>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-3 pb-1">
                                <a href="#">
                                    <p className="text-3 text-color-light opacity-8 mb-1"><i className="fas fa-angle-right text-color-primary"></i><strong className="ms-2">John Doe</strong> commented on <strong className="text-color-primary">lorem ipsum dolor sit amet.</strong></p>
                                    <p className="text-2 mb-0">12:55 AM Dec 19th</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="text-3 text-color-light opacity-8 mb-1"><i className="fas fa-angle-right text-color-primary"></i><strong className="ms-2">John Doe</strong> commented on <strong className="text-color-primary">lorem ipsum dolor sit amet.</strong></p>
                                    <p className="text-2 mb-0">12:55 AM Dec 19th</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <h5 className="text-3 mb-3">CATEGORIES</h5>
                        <p>
                            <a href="#"><span className="badge badge-dark bg-color-black badge-sm py-2 me-1 mb-2 text-uppercase">Gadgets</span></a>
                            <a href="#"><span className="badge badge-dark bg-color-black badge-sm py-2 me-1 mb-2 text-uppercase">Photography</span></a>
                            <a href="#"><span className="badge badge-dark bg-color-black badge-sm py-2 me-1 mb-2 text-uppercase">Lifestyle</span></a>
                            <a href="#"><span className="badge badge-dark bg-color-black badge-sm py-2 me-1 mb-2 text-uppercase">Fashion</span></a>
                            <a href="#"><span className="badge badge-dark bg-color-black badge-sm py-2 me-1 mb-2 text-uppercase">Recipes</span></a>
                            <a href="#"><span className="badge badge-dark bg-color-black badge-sm py-2 me-1 mb-2 text-uppercase">Travel</span></a>
                            <a href="#"><span className="badge badge-dark bg-color-black badge-sm py-2 me-1 mb-2 text-uppercase">Business</span></a>
                            <a href="#"><span className="badge badge-dark bg-color-black badge-sm py-2 me-1 mb-2 text-uppercase">Architecture</span></a>
                            <a href="#"><span className="badge badge-dark bg-color-black badge-sm py-2 me-1 mb-2 text-uppercase">Reviews</span></a>
                            <a href="#"><span className="badge badge-dark bg-color-black badge-sm py-2 me-1 mb-2 text-uppercase">Sports</span></a>
                            <a href="#"><span className="badge badge-dark bg-color-black badge-sm py-2 me-1 mb-2 text-uppercase">Videos</span></a>
                            <a href="#"><span className="badge badge-dark bg-color-black badge-sm py-2 me-1 mb-2 text-uppercase">Technology</span></a>
                            <a href="#"><span className="badge badge-dark bg-color-black badge-sm py-2 me-1 mb-2 text-uppercase">Design</span></a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container py-2">
                    <div className="row py-4">
                        <div className="col-lg-1 d-flex align-items-center justify-content-center justify-content-lg-start mb-2 mb-lg-0">
                            <a href="index.html" className="logo pe-0 pe-lg-3">
                                <img alt="Porto Website Template" src="img/logo-footer.png" className="opacity-5" height="32" />
                            </a>
                        </div>
                        <div className="col-lg-7 d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
                            <p>© Copyright 2023. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end">
                            <nav id="sub-menu">
                                <ul>
                                    <li><i className="fas fa-angle-right"></i><a href="page-faq.html" className="ms-1 text-decoration-none"> FAQs</a></li>
                                    <li><i className="fas fa-angle-right"></i><a href="sitemap.html" className="ms-1 text-decoration-none"> Sitemap</a></li>
                                    <li><i className="fas fa-angle-right"></i><a href="contact-us.html" className="ms-1 text-decoration-none"> Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

	
		
    </>
  )
}

export default Footer