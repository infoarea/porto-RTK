import { Link } from "react-router-dom"
import mainLogo from "../../assets/img/logo-default-slim.png"

const Header = () => {
  return (
    <>
    <header id="header" className="header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}">
		<div className="header-body border-top-0">
			<div className="header-container container-fluid px-lg-4">
				<div className="header-row">
					<div className="header-column header-column-border-right flex-grow-0">
						<div className="header-row pe-4">
							<div className="header-logo">
								<a href="index.html">
									<img alt="Porto" width="100" height="48" data-sticky-width="82" data-sticky-height="40" src={mainLogo} />
								</a>
							</div>
						</div>
					</div>
					<div className="header-column">
						<div className="header-row">
							<div className="header-nav header-nav-links justify-content-center">
								<div className="header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1">
									<nav className="collapse header-mobile-border-top">
										<ul className="nav nav-pills" id="mainNav">
											<li className="dropdown">
												<Link className="dropdown-item dropdown-toggle" to={'/'}>
													Home
												</Link>
												
											</li>
											
											<li>
												<Link to={'/'}>Blog</Link>
											</li>
											<li>
												<Link to={'/admin'}>Dashboard</Link>
											</li>
											
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
					<div className="header-column header-column-border-left flex-grow-0 justify-content-center">
						<div className="header-row ps-4 justify-content-end">
							<ul className="header-social-icons social-icons d-none d-sm-block social-icons-clean m-0">
								<li className="social-icons-facebook"><a href="http://www.facebook.com/" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
								<li className="social-icons-twitter"><a href="http://www.twitter.com/" title="Twitter"><i className="fab fa-twitter"></i></a></li>
								<li className="social-icons-linkedin"><a href="http://www.linkedin.com/" title="Linkedin"><i className="fab fa-linkedin-in"></i></a></li>
							</ul>
							<button className="btn header-btn-collapse-nav ms-0 ms-sm-3" data-bs-toggle="collapse" data-bs-target=".header-nav-main nav">
								<i className="fas fa-bars"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
    </>
  )
}

export default Header