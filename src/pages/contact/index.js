import Link from "next/link";

const Contact = () => {
  return (
    <>
      <section className="inner-head">
        <div className="container">
          <div className="row">
            <div className="inner-head-wrap">
              <div className="commom-heading">
                <h2>Contact us</h2>
                <p>
                  To know more about our services to discover how we can
                  <br /> elevate your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* START REACH */}
      <section className="mb-5">
        <div className="container bgcontent">
          <div className="commom-heading">
            <h2>Reach out</h2>
          </div>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-2 g-2 g-lg-3">
            <div className="col">
              <div className="info-boxs">
                <div className="commom-heading">
                  <p>
                    Our innovative solutions deliver tangible results. Whether
                    you need to streamline operations, enhance customer
                    experience, or develop cutting-edge software, we've got the
                    expertise. Reach out to learn more about how we can help
                    your business thrive.
                  </p>
                </div>
                <div className="info-box-set">
                  <div className="info-box me-5">
                    <div className="info_box_icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <p>
                      <Link href="tel:+9545126030" className="info-box_link">
                        9545126030
                      </Link>
                    </p>
                  </div>
                  <div className="info-box">
                    <div className="info_box_icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <p>
                      <Link
                        href="mailto:info@radarsoft.tech"
                        className="info-box_link"
                      >
                        info@radarsoft.tech
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="bottom-border"></div>

                <div className="info-add d-flex">
                  <div>
                    <div className="info_box_icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                  <div className="add-text">
                    <h4>Location</h4>
                    <p>
                      B-309, Nyati Empress, Viman Nagar,
                      <br /> Pune, Maharashtra-411014
                    </p>
                    <p>
                      <Link href="https://www.google.com/maps" target="_blank">
                        Google maps
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="center-set">
                  <div className="time-box">
                    <h5>
                      We are available from
                      <br />
                      Mon - Fri 10AM TO 7PM ⚡
                    </h5>
                    <p>We are here to help you!</p>
                    <div className="text-lg-end">
                      <button className="contact-btn">
                        <Link href="" style={{ textDecoration: "none" }}>
                          Contact us
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="contact-form">
                <form action="#" method="post">
                  <div className="form-group">
                    <label for="name">Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">Email address*</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="phone">Phone number*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="country">Country*</label>
                    <div className="custom-select-wrapper">
                      <select
                        className="form-control"
                        id="country"
                        name="country"
                        aria-placeholder="Country"
                        required
                      >
                        <option value="">Select your country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                      </select>
                      <span className="custom-select-icon">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="message">Please write a message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Please write description about timing and other details related to visit."
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="">
                    <Link
                      className="common-project-button"
                      href=""
                      style={{ textDecoration: "none" }}
                    >
                      Submit
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END REACH */}
    </>
  );
};

export default Contact;
