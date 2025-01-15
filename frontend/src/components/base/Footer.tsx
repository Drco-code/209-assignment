import React from 'react';

function Footer() {
  return (
    <footer
      className="text-center text-lg-start"
      style={{
        marginTop: '200px',
        backgroundColor: '#1E90FF', // Signature blue
        color: '#FFFFFF', // White text for contrast
      }}
    >
      {/* Grid container */}
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center justify-content-md-start align-items-center">
            <strong style={{ fontSize: '1.2rem' }}>Get connected with us on social networks</strong>
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
            {/* Facebook */}
            <a
              className="btn btn-sm btn-floating me-2"
              style={{ backgroundColor: '#3b5998', color: '#FFFFFF' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f" />
            </a>
            {/* Twitter */}
            <a
              className="btn btn-sm btn-floating me-2"
              style={{ backgroundColor: '#55acee', color: '#FFFFFF' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter" />
            </a>
            {/* Pinterest */}
            <a
              className="btn btn-sm btn-floating me-2"
              style={{ backgroundColor: '#c61118', color: '#FFFFFF' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-pinterest" />
            </a>
            {/* Youtube */}
            <a
              className="btn btn-sm btn-floating me-2"
              style={{ backgroundColor: '#ed302f', color: '#FFFFFF' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-youtube" />
            </a>
            {/* Instagram */}
            <a
              className="btn btn-sm btn-floating me-2"
              style={{ backgroundColor: '#ac2bac', color: '#FFFFFF' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
        <hr className="my-3" style={{ borderColor: '#FFFFFF' }} />
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <p>
              <strong style={{ fontSize: '1.2rem' }}>About us</strong>
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              Welcome to ShopIN, your ultimate destination for a wide range of high-quality products! From everyday essentials to unique finds, we’ve got something for everyone. Our mission is to make your shopping experience seamless, affordable, and enjoyable. With a curated selection and a customer-first approach, we’re here to meet all your needs. Thank you for choosing ShopIN—where variety meets convenience!
            </p>
          </div>
          <div className="col-lg-3 mb-4 mb-lg-0">
            <p>
              <strong style={{ fontSize: '1.2rem' }}>Useful links</strong>
            </p>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                  Media
                </a>
              </li>
              <li>
                <a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                  Job offers
                </a>
              </li>
              <li>
                <a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                  Cooperation
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mb-4 mb-lg-0">
            <p>
              <strong style={{ fontSize: '1.2rem' }}>Products</strong>
            </p>
            <ul className="list-unstyled">
              <li>
                <a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                  Electronics
                </a>
              </li>
              <li>
                <a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                  Fashion
                </a>
              </li>
              <li>
                <a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                  Beauty
                </a>
              </li>
              <li>
                <a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                  Automotive
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 mb-4 mb-lg-0">
            <p>
              <strong style={{ fontSize: '1.2rem' }}>Support</strong>
            </p>
            <ul className="list-unstyled">
              <li>
                <a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                  Complaints
                </a>
              </li>
              <li>
                <a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                  Help center
                </a>
              </li>
              <li>
                <a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                  Community
                </a>
              </li>
              <li>
                <a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', color: '#FFFFFF' }}
      >
        © 2024 - 
        <a className="text-white" href="https://mdbootstrap.com/" style={{ textDecoration: 'none' }}>
          ShopIN
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;