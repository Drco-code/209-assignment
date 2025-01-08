import { useAuthStore } from '../store/auth';
import { Link } from 'react-router-dom';

function HomeView() {
  const [isLoggedIn, setIsLoggedIn] = useAuthStore((state) => [
    state.isLoggedIn,
    state.user,
  ]);

  return (
    <>
      <div>
        <main className="mt-5">
          <div className="container">
            <section className="text-center">
              <div className="row">
                {/* Product Card 1 */}
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="card" style={{ border: '2px solid #1E90FF', borderRadius: '10px' }}>
                    <div
                      className="bg-image hover-zoom ripple"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/belt.jpg"
                        className="w-100"
                        alt="Product"
                        style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                      />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span
                                className="badge ms-2"
                                style={{ backgroundColor: '#1E90FF', color: '#FFFFFF' }}
                              >
                                New
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: 'rgba(251, 251, 251, 0.15)',
                            }}
                          />
                        </div>
                      </a>
                    </div>
                    <div className="card-body">
                      <a href="" className="text-reset">
                        <h5 className="card-title mb-3" style={{ color: '#1E90FF' }}>Product name</h5>
                      </a>
                      <a href="" className="text-reset">
                        <p style={{ color: '#555555' }}>Category</p>
                      </a>
                      <h6 className="mb-3" style={{ color: '#1E90FF' }}>$61.99</h6>
                      <div className="btn-group">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          id="dropdownMenuClickable"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="false"
                          aria-expanded="false"
                          style={{ backgroundColor: '#1E90FF', color: '#FFFFFF' }}
                        >
                          Variation
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuClickable"
                          style={{ backgroundColor: '#1E90FF', border: '2px solid #000' }}
                        >
                          <div className="d-flex flex-column">
                            <li className="p-1">
                              <b style={{ color: '#FFFFFF' }}>Size</b>: XL
                            </li>
                            <div className="p-1 mt-0 pt-0 d-flex flex-wrap">
                              <li>
                                <button
                                  className="btn btn-sm me-2 mb-1"
                                  style={{ backgroundColor: '#FFFFFF', color: '#1E90FF' }}
                                >
                                  XXL
                                </button>
                              </li>
                              <li>
                                <button
                                  className="btn btn-sm me-2 mb-1"
                                  style={{ backgroundColor: '#FFFFFF', color: '#1E90FF' }}
                                >
                                  XXL
                                </button>
                              </li>
                              <li>
                                <button
                                  className="btn btn-sm me-2 mb-1"
                                  style={{ backgroundColor: '#FFFFFF', color: '#1E90FF' }}
                                >
                                  XXL
                                </button>
                              </li>
                            </div>
                          </div>
                          <div className="d-flex flex-column mt-3">
                            <li className="p-1">
                              <b style={{ color: '#FFFFFF' }}>Color</b>: Red
                            </li>
                            <div className="p-1 mt-0 pt-0 d-flex flex-wrap">
                              <li>
                                <button
                                  className="btn btn-sm me-2 mb-1 p-3"
                                  style={{ backgroundColor: 'red' }}
                                />
                              </li>
                              <li>
                                <button
                                  className="btn btn-sm me-2 mb-1 p-3"
                                  style={{ backgroundColor: 'green' }}
                                />
                              </li>
                              <li>
                                <button
                                  className="btn btn-sm me-2 mb-1 p-3"
                                  style={{ backgroundColor: 'yellow' }}
                                />
                              </li>
                            </div>
                          </div>
                          <div className="d-flex mt-3 p-1">
                            <button
                              type="button"
                              className="btn me-1 mb-1"
                              style={{ backgroundColor: '#1E90FF', color: '#FFFFFF' }}
                            >
                              <i className="fas fa-shopping-cart" />
                            </button>
                            <button
                              type="button"
                              className="btn px-3 me-1 mb-1 ms-2"
                              style={{ backgroundColor: '#FF6F61', color: '#FFFFFF' }}
                            >
                              <i className="fas fa-heart" />
                            </button>
                          </div>
                        </ul>
                        <button
                          type="button"
                          className="btn px-3 me-1 ms-2"
                          style={{ backgroundColor: '#FF6F61', color: '#FFFFFF' }}
                        >
                          <i className="fas fa-heart" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Card 2 */}
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card" style={{ border: '2px solid #1E90FF', borderRadius: '10px' }}>
                    <div
                      className="bg-image hover-zoom ripple"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(4).jpg"
                        className="w-100"
                        alt="Product"
                        style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                      />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span
                                className="badge ms-2"
                                style={{ backgroundColor: '#1E90FF', color: '#FFFFFF' }}
                              >
                                Eco
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: 'rgba(251, 251, 251, 0.15)',
                            }}
                          />
                        </div>
                      </a>
                    </div>
                    <div className="card-body">
                      <a href="" className="text-reset">
                        <h5 className="card-title mb-3" style={{ color: '#1E90FF' }}>Product name</h5>
                      </a>
                      <a href="" className="text-reset">
                        <p style={{ color: '#555555' }}>Category</p>
                      </a>
                      <h6 className="mb-3" style={{ color: '#1E90FF' }}>$61.99</h6>
                      <button
                        type="button"
                        className="btn me-1 mb-1"
                        style={{ backgroundColor: '#1E90FF', color: '#FFFFFF' }}
                      >
                        Add to cart
                      </button>
                      <button
                        type="button"
                        className="btn px-3 me-1 mb-1"
                        style={{ backgroundColor: '#FF6F61', color: '#FFFFFF' }}
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Card 3 */}
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card" style={{ border: '2px solid #1E90FF', borderRadius: '10px' }}>
                    <div
                      className="bg-image hover-zoom ripple"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).jpg"
                        className="w-100"
                        alt="Product"
                        style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                      />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span
                                className="badge ms-2"
                                style={{ backgroundColor: '#1E90FF', color: '#FFFFFF' }}
                              >
                                -10%
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: 'rgba(251, 251, 251, 0.15)',
                            }}
                          />
                        </div>
                      </a>
                    </div>
                    <div className="card-body">
                      <a href="" className="text-reset">
                        <h5 className="card-title mb-3" style={{ color: '#1E90FF' }}>Product name</h5>
                      </a>
                      <a href="" className="text-reset">
                        <p style={{ color: '#555555' }}>Category</p>
                      </a>
                      <h6 className="mb-3">
                        <s style={{ color: '#555555' }}>$61.99</s>
                        <strong className="ms-2" style={{ color: '#FF6F61' }}>$50.99</strong>
                      </h6>
                      <button
                        type="button"
                        className="btn me-1 mb-1"
                        style={{ backgroundColor: '#1E90FF', color: '#FFFFFF' }}
                      >
                        Add to cart
                      </button>
                      <button
                        type="button"
                        className="btn px-3 me-1 mb-1"
                        style={{ backgroundColor: '#FF6F61', color: '#FFFFFF' }}
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Categories Section */}
                <div className="row">
                  {[...Array(6)].map((_, index) => (
                    <div className="col-lg-2" key={index}>
                      <img
                        src="https://darrensaines.no/wp-content/uploads/2020/02/dummy-1.png"
                        style={{
                          width: '100px',
                          height: '100px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid #1E90FF',
                        }}
                        alt="Category"
                      />
                      <h6 style={{ color: '#1E90FF' }}>Category</h6>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Trending Products Section */}
            <section className="text-center container">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light" style={{ color: '#1E90FF' }}>Trending Products</h1>
                  <p className="lead text-muted">
                    Something short and leading about the collection below—its contents
                  </p>
                </div>
              </div>
            </section>
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  {[...Array(9)].map((_, index) => (
                    <div className="col" key={index}>
                      <div className="card shadow-sm" style={{ border: '2px solid #1E90FF', borderRadius: '10px' }}>
                        <svg
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          height={225}
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-label="Placeholder: Thumbnail"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                        >
                          <title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#1E90FF" />
                          <text x="50%" y="50%" fill="#FFFFFF" dy=".3em">
                            Thumbnail
                          </text>
                        </svg>
                        <div className="card-body">
                          <p className="card-text" style={{ color: '#555555' }}>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                style={{ borderColor: '#1E90FF', color: '#1E90FF' }}
                              >
                                View
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                style={{ borderColor: '#1E90FF', color: '#1E90FF' }}
                              >
                                Edit
                              </button>
                            </div>
                            <small className="text-muted">9 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default HomeView;