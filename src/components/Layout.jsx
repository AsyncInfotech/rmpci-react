import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import nitilogo from '../assets/images/niti_aayog.png';

export const Layout = ({ children }) => {
  return (
    <div>
         <div className="banner"> Imp. Documents | e-Office Login </div>
         <div className="container">
        <div className="logo-section">

            <img src={logo} alt="Institute Logo"/>
            <img src={nitilogo} alt="NITI Aayog" className="niti-logo" />
            <div className="logo-text">
                RURAL MEDICAL PRACTITIONER COUNCIL OF INDIA<br/>
                {/* <!-- Deemed To be University (De Novo)<br/>
                Ministry of AYUSH, Govt. of India --> */}
            </div>
        </div>
    </div>
      <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    {/* RURAL MEDICAL PRACTITIONER COUNCIL OF INDIA */}
                </a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link> 
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                           
                            <Link className="nav-link" to="/vissionmission">Vission & Mission</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      <main>{children}</main>

      <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>More Information</h5>
                        <p><Link className="nav-link" to="/about">About</Link></p>
                        <p><Link className="nav-link" to="/vissionmission">Vission & Mission</Link></p>
                        <p> <Link className="nav-link" to="/contact">Contact</Link></p>
                    </div>

                    {/* Uncomment and modify the below sections if needed */}
                    {/*
                    <div className="col-md-3">
                        <h5>Others</h5>
                        <p>Link</p>
                        <p>Link</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <p>Facebook</p>
                        <p>Youtube</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Contact Us</h5>
                        <p>29/1 Canal South Road, Kolkata-700015</p>
                        <p>Mobile: 9836786777, 7063766685</p>
                        <p>Email: drbibhutosh7@gmail.com, ambhowmik112233@gmail.com</p>
                    </div>
                    */}
                </div>
                <div className="text-center mt-3">
                    <p>Copyright © 2025 - All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Layout;