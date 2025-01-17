import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { create, get } from 'lodash'
import Swal from 'sweetalert2'
import moment from 'moment'

import apiInstance from '../../utils/axios'
import GetUserCountry from '../../utils/plugins/GetUserCountry.jsx'
import GetUserData from '../../utils/plugins/GetUserData.jsx'
import GenerateCartID from '../../utils/plugins/GenerateCartID.js'
import { IProduct } from '../../shared/product.interface.ts'
import { IGallery } from '../../shared/gallery.interface.ts'
import { ISpecifications } from '../../shared/specifications.interface.ts'
import { IColors } from '../../shared/colors.interface.ts'
import { ISizes } from '../../shared/sizes.interface.ts'
import { IReview, NewReview } from '../../shared/review.interface.ts'
import { CartContext } from '../../context/CartContext.tsx'

const ToastNotification = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
})

function ProductDetailView() {
  const [product, setProduct] = useState<IProduct>()
  const [specifications, setSpecifications] = useState<ISpecifications[]>()
  const [gallery, setGallery] = useState<IGallery[]>()
  const [colors, setColors] = useState<IColors[]>()
  const [sizes, setSizes] = useState<ISizes[]>()

  const [colorValue, setColorValue] = useState('No Color')
  const [sizeValue, setSizeValue] = useState('No Size')
  const [qtyValue, setQtyValue] = useState(1)

  const userAddress = GetUserCountry()
  const userData = GetUserData()
  const cartID = GenerateCartID()

  const [reviews, setReviews] = useState<IReview[]>()
  const [createReview, setCreateReview] = useState<NewReview>({
    user_id: 0,
    product_id: 0,
    review: '',
    rating: 5,
  })
  const [cartCount, setCartCount] = useContext(CartContext)

  const param = useParams()

  const getReviewsData = async () => {
    if (product) {
      const res = await apiInstance.get(`reviews/${product?.id}/`)
      setReviews(res.data)
    }
  }

  useEffect(() => {
    apiInstance.get(`product/${param.slug}`).then((res) => {
      if (JSON.stringify(product) !== JSON.stringify(res.data)) {
        // prevent infinite loop
        setProduct(res.data)
        setSpecifications(res.data.specification)
        setGallery(res.data.gallery)
        setColors(res.data.color)
        setSizes(res.data.size)
      }
    })
    getReviewsData()
  }, [product, param.slug])

  const handleColorButtonClick = (e) => {
    e.preventDefault()
    const colorNameInput = e.target
      .closest('.color_button')
      .parentNode.querySelector('.color_name')
    setColorValue(colorNameInput.value)
  }

  const handleSizeButtonClick = (e) => {
    e.preventDefault()
    const sizeNameInput = e.target
      .closest('.size_button')
      .parentNode.querySelector('.size_name')
    setSizeValue(sizeNameInput.value)
  }

  const handleQtyChange = (e) => {
    setQtyValue(e.target.value)
  }

  const handleAddToCart = async () => {
    try {
      const formData = new FormData()
      console.log(userData)
      const data = JSON.stringify({
        product_id: product?.id,
        user_id: userData?.user_id,
        qty: qtyValue,
        price: product?.price,
        shipping_amount: product?.shipping_amount,
        country: userAddress.country,
        size: sizeValue,
        color: colorValue,
        cart_id: cartID,
      })
      formData.append('data', data)
      const response = await apiInstance.post(`cart/`, formData)

      ToastNotification.fire({
        icon: 'success',
        title: response.data.message,
      })

      setCartCount(() => {
        let total = cartCount
        return (total += 1)
      })
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleReviewSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    const data = JSON.stringify({
      user_id: userData?.user_id,
      product_id: product?.id,
      review: createReview.review,
      rating: createReview.rating,
    })

    try {
      formData.append('data', data)
      await apiInstance.post(`reviews/${product?.id}/`, formData)
      getReviewsData()
    } catch (error) {
      console.log(error)
    }
  }

  const handleReviewChange = (e) => {
    setCreateReview({
      ...createReview,
      [e.target.name]: e.target.value,
    })
  }

  const handleWishlist = async (productId: number) => {
    const user_id = userData?.user_id

    if (user_id) {
      const formData = new FormData()
      const data = JSON.stringify({
        product_id: productId,
        user_id: user_id,
      })
      formData.append('data', data)

      try {
        const res = await apiInstance.post(
          `customer/wishlist/${user_id}/`,
          formData,
        )

        Swal.fire({
          icon: 'success',
          title: res.data.message,
        })
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Something when wrong',
        })
      }
    }
  }

  return (
    <>
      <main className="mb-4 mt-4">
        <div className="container">
          {/* Section: Product details */}
          <section className="mb-9">
            <div className="row gx-lg-5">
              <div className="col-md-6 mb-4 mb-md-0">
                {/* Gallery */}
                <div className="">
                  <div className="row gx-2 gx-lg-3">
                    <div className="col-12 col-lg-12">
                      <div className="lightbox">
                        <img
                          src={product?.image}
                          style={{
                            width: '100%',
                            height: 500,
                            objectFit: 'cover',
                            borderRadius: 10,
                          }}
                          alt="Gallery image 1"
                          className="ecommerce-gallery-main-img active w-100 rounded-4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 d-flex">
                    {gallery?.map((photo, index) => (
                      <div className="p-3" key={index}>
                        <img
                          src={photo.image}
                          style={{
                            width: 100,
                            height: 100,
                            objectFit: 'cover',
                            borderRadius: 10,
                          }}
                          alt="Gallery image 1"
                          className="ecommerce-gallery-main-img active w-100 rounded-4"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Gallery */}
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                {/* Details */}
                <div>
                  <h1 className="fw-bold mb-3">{product?.title}</h1>
                  <div className="d-flex text-primary just align-items-center">
                    <ul
                      className="mb-3 d-flex p-0"
                      style={{ listStyle: 'none' }}
                    >
                      <li>
                        <i
                          className="fas fa-star fa-sm text-warning ps-0"
                          title="Bad"
                        />
                        <i
                          className="fas fa-star fa-sm text-warning ps-0"
                          title="Bad"
                        />
                        <i
                          className="fas fa-star fa-sm text-warning ps-0"
                          title="Bad"
                        />
                        <i
                          className="fas fa-star fa-sm text-warning ps-0"
                          title="Bad"
                        />
                        <i
                          className="fas fa-star fa-sm text-warning ps-0"
                          title="Bad"
                        />
                      </li>

                      <li style={{ marginLeft: 10, fontSize: 13 }}>
                        <a href="" className="text-decoration-none">
                          <strong className="me-2">4/5</strong>(2 reviews)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h5 className="mb-3">
                    <s className="text-muted me-2 small align-middle">
                      ${product?.old_price}
                    </s>
                    <span className="align-middle">${product?.price}</span>
                  </h5>
                  <p className="text-muted">{product?.description}</p>
                  <div className="table-responsive">
                    <table className="table table-sm table-borderless mb-0">
                      <tbody>
                        <tr>
                          <th className="ps-0 w-25" scope="row">
                            <strong>Category</strong>
                          </th>
                          <td>{product?.category?.title}</td>
                        </tr>
                        {specifications?.map((s, index) => (
                          <tr key={index}>
                            <th className="ps-0 w-25" scope="row">
                              <strong>{s?.title}</strong>
                            </th>
                            <td>{s?.content}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <hr className="my-5" />
                  <form>
                    <div className="row flex-column">
                      {/* Quantity */}
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="typeNumber">
                            <b>Quantity</b>
                          </label>
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control quantity"
                            min={1}
                            value={qtyValue}
                            onChange={handleQtyChange}
                          />
                        </div>
                      </div>

                      {/* Size */}
                      {get(sizes, 'length', 0) > 0 && (
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="typeNumber">
                              <b>Size:</b> <span>{sizeValue}</span>
                            </label>
                          </div>
                          <div className="d-flex">
                            {sizes?.map((size, index) => (
                              <div key={index} className="me-2">
                                <input
                                  type="hidden"
                                  className="size_name"
                                  value={size.name}
                                />
                                <button
                                  className="btn btn-secondary size_button"
                                  onClick={handleSizeButtonClick}
                                >
                                  {size.name}
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Colors */}
                      {get(colors, 'length', 0) > 0 && (
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="typeNumber">
                              <b>Color:</b> <span>{colorValue}</span>
                            </label>
                          </div>
                          <div className="d-flex">
                            {colors?.map((color, index) => (
                              <div key={index}>
                                <input
                                  type="hidden"
                                  className="color_name"
                                  value={color.name}
                                />
                                <button
                                  className="btn p-3 me-2 color_button"
                                  onClick={handleColorButtonClick}
                                  style={{ background: `${color.color_code}` }}
                                ></button>
                              </div>
                            ))}
                          </div>
                          <hr />
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-rounded me-2"
                      onClick={handleAddToCart}
                    >
                      <i className="fas fa-cart-plus me-2" /> Add to cart
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-floating"
                      data-mdb-toggle="tooltip"
                      title="Add to wishlist"
                      onClick={
                        product
                          ? () => handleWishlist(product.id, userData?.user_Id)
                          : () => 0
                      }
                    >
                      <i className="fas fa-heart" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Specifications
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Vendor
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Review
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex={0}
            >
              <div className="table-responsive">
                <table className="table table-sm table-borderless mb-0">
                  <tbody>
                    <tr>
                      <th className="ps-0 w-25" scope="row">
                        {' '}
                        <strong>Category</strong>
                      </th>
                      <td>Technologes</td>
                    </tr>
                    <tr>
                      <th className="ps-0 w-25" scope="row">
                        {' '}
                        <strong>Vat</strong>
                      </th>
                      <td>$1.9</td>
                    </tr>
                    <tr>
                      <th className="ps-0 w-25" scope="row">
                        {' '}
                        <strong>Model</strong>
                      </th>
                      <td>Shirt 5407X</td>
                    </tr>
                    <tr>
                      <th className="ps-0 w-25" scope="row">
                        {' '}
                        <strong>Material</strong>
                      </th>
                      <td>Cotton 80%</td>
                    </tr>
                    <tr>
                      <th className="ps-0 w-25" scope="row">
                        {' '}
                        <strong>Colors</strong>
                      </th>
                      <td>Green, Yellow</td>
                    </tr>
                    <tr>
                      <th className="ps-0 w-25" scope="row">
                        {' '}
                        <strong>Size</strong>
                      </th>
                      <td>XL, ML, SSL</td>
                    </tr>
                    <tr>
                      <th className="ps-0 w-25" scope="row">
                        {' '}
                        <strong>Delivery</strong>
                      </th>
                      <td>USA, Europe</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex={0}
            >
              <div className="card mb-3" style={{ maxWidth: 400 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                      style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                      alt="User Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">John Doe</h5>
                      <p className="card-text">Frontend Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabIndex={0}
            >
              <div className="container mt-5">
                <div className="row">
                  {/* Column 1: Form to create a new review */}
                  <div className="col-md-6">
                    <h2>Create a New Review</h2>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                          Rating
                        </label>
                        <select
                          name="rating"
                          onChange={handleReviewChange}
                          className="form-select"
                          id=""
                        >
                          <option value={1}>1 Star</option>
                          <option value={2}>2 Star</option>
                          <option value={3}>3 Star</option>
                          <option value={4}>4 Star</option>
                          <option value={5}>5 Star</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="reviewText" className="form-label">
                          Review
                        </label>
                        <textarea
                          className="form-control"
                          id="reviewText"
                          name="review"
                          onChange={handleReviewChange}
                          rows={4}
                          placeholder="Write your review"
                          defaultValue={''}
                        />
                      </div>
                      <button
                        onClick={(e) => handleReviewSubmit(e)}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Submit Review
                      </button>
                    </form>
                  </div>
                  {/* Column 2: Display existing reviews */}
                  <div className="col-md-6">
                    <h2>Existing Reviews</h2>
                    {reviews?.map((review, index) => (
                      <div className="card mb-3" key={index}>
                        <div className="row g-0">
                          <div className="col-md-3">
                            <img
                              src={review.profile.image}
                              alt="User Image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-md-9">
                            <div className="card-body">
                              <h5 className="card-title">
                                {review.profile.fullname}
                              </h5>
                              <p className="card-text">
                                {moment(review.profile.date).format(
                                  'MMM D, YYYY',
                                )}
                              </p>
                              <p className="card-text">
                                {review.review} <br />
                                {/* Creates an empty array to render tag i depending on the rating number */}
                                {Array.from({ length: review.rating }).map(
                                  (_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                  ),
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* More reviews can be added here */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-disabled"
              role="tabpanel"
              aria-labelledby="pills-disabled-tab"
              tabIndex={0}
            >
              <div className="container mt-5">
                <div className="row">
                  {/* Column 1: Form to submit new questions */}
                  <div className="col-md-6">
                    <h2>Ask a Question</h2>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="askerName" className="form-label">
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="askerName"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="questionText" className="form-label">
                          Question
                        </label>
                        <textarea
                          className="form-control"
                          id="questionText"
                          rows={4}
                          placeholder="Ask your question"
                          defaultValue={''}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit Question
                      </button>
                    </form>
                  </div>
                  {/* Column 2: Display existing questions and answers */}
                  <div className="col-md-6">
                    <h2>Questions and Answers</h2>
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">User 1</h5>
                        <p className="card-text">August 10, 2023</p>
                        <p className="card-text">
                          What are the available payment methods?
                        </p>
                        <h6 className="card-subtitle mb-2 text-muted">
                          Answer:
                        </h6>
                        <p className="card-text">
                          We accept credit/debit cards and PayPal as payment
                          methods.
                        </p>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">User 2</h5>
                        <p className="card-text">August 15, 2023</p>
                        <p className="card-text">
                          How long does shipping take?
                        </p>
                        <h6 className="card-subtitle mb-2 text-muted">
                          Answer:
                        </h6>
                        <p className="card-text">
                          Shipping usually takes 3-5 business days within the
                          US.
                        </p>
                      </div>
                    </div>
                    {/* More questions and answers can be added here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductDetailView
