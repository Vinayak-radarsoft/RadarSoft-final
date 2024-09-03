import React from "react";
import servicedetails1 from "../../../../public/assets/media/service-details/servicedetails1.png";
import mongo from "../../../../public/assets/media/service-details/mongo.png";
import php from "../../../../public/assets/media/service-details/php.png";
import aws from "../../../../public/assets/media/service-details/aws.png";
import react from "../../../../public/assets/media/service-details/react.png";
import css from "../../../../public/assets/media/service-details/css.png";
import node from "../../../../public/assets/media/service-details/node.png";
import flutter from "../../../../public/assets/media/service-details/flutter.png";
import html from "../../../../public/assets/media/service-details/html.png";
import jira from "../../../../public/assets/media/service-details/jira.png";
import heathcare from "../../../../public/assets/media/service-details/heathcare.png";
import Retail from "../../../../public/assets/media/service-details/Retail.png";
import Education from "../../../../public/assets/media/service-details/Education.png";
import Realestate from "../../../../public/assets/media/service-details/Realestate.png";
import Event from "../../../../public/assets/media/service-details/Event.png";
import Finance from "../../../../public/assets/media/service-details/Finance.png";
import Food from "../../../../public/assets/media/service-details/Food.png";
import Media from "../../../../public/assets/media/service-details/Media.png";
import Link from "next/link";

const Service_details = () => {
    return (
        <>
            {/* START EXPERIENCE */}
            <section className="banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="banner-left-side-area commom-heading">
                                <h2>
                                    Experience Seamless Excellence: Our Top-tier UI/UX Services
                                </h2>
                                <p>
                                    All the Lorem Ipsum generators on the Internet tend to repeat
                                    predefined chunks as necessary, making this the first true
                                    generator on the Internet. It uses a dictionary of over 200
                                    Latin words, combined with a handful of model sentence
                                    structures, to generate Lorem Ipsum which looks reasonable.
                                    Handful of model sentence structures, to generate Lorem Ipsum
                                    which looks reasonable. The generated Lorem Ipsum is therefore
                                    always free.
                                </p>
                                <div className="">
                                    <Link className="common-project-button" href="/contact" style={{ textDecoration: "none" }}>
                                        Get in touch
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-right-side-area">
                                <div className="banner-right-side-box">
                                    <h3 className="banner-right-side-h3">Book an Appointment</h3>
                                    <form>
                                        <input type="text" placeholder="Full Name*" required />
                                        <input type="text" placeholder="Email Id*" required />
                                        <input type="number" placeholder="Phone No*" required />
                                        <button className="banner-right-side-button">
                                            Enquire Now
                                        </button>
                                    </form>
                                    <p className="banner-right-side-paragraph">
                                        ⚡Available from Mon - Fri 10AM TO 7PM ⚡
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END EXPERIENCE */}

            {/* START OUR TEAM */}
            <section className="service-contact mb-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 service-set-box">
                            <div>
                                <div className="commom-heading">
                                    <h2>
                                        Our Team brings together experts with diverse skillsets
                                    </h2>
                                    <p>
                                        All the Lorem Ipsum generators on the Internet tend to
                                        repeat predefined chunks as necessary, making this the first
                                        true generator on the Internet. It uses a dictionary of over
                                        200 Latin words, combined with a handful of model sentence
                                        structures, to generate Lorem Ipsum which looks reasonable.
                                        Handful of model sentence structures, to generate Lorem
                                        Ipsum which looks reasonable. The generated Lorem Ipsum is
                                        therefore always free.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div>
                                <img
                                    src={servicedetails1.src}
                                    alt="servicedetails"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END OUR TEAM */}

            {/* START FOLLOWING */}
            <section className="service-d-following">
                <div className="container">
                    <div className="row">
                        <div className="service-d-following-head commom-heading">
                            <h3>We use following</h3>
                            <h2>Web technologies</h2>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="grid-container">
                                    <div className="grid-item">
                                        <img src={mongo.src} alt="MongoDB" />
                                    </div>
                                    <div className="grid-item">
                                        <img src={php.src} alt="PHP" />
                                    </div>
                                    <div className="grid-item">
                                        <img src={aws.src} alt="AWS" />
                                    </div>
                                    <div className="grid-item">
                                        <img src={react.src} alt="React" />
                                    </div>
                                    <div className="grid-item">
                                        <img src={css.src} alt="CSS3" />
                                    </div>
                                    <div className="grid-item">
                                        <img src={node.src} alt="Node.js" />
                                    </div>
                                    <div className="grid-item">
                                        <img src={flutter.src} alt="Flutter" />
                                    </div>
                                    <div className="grid-item">
                                        <img src={html.src} alt="HTML5" />
                                    </div>
                                    <div className="grid-item">
                                        <img src={jira.src} alt="Jira" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END FOLLOWING */}

            {/* START OUR INDUSTRIES */}
            <section className="service-d-industries mb-5">
                <div className="container">
                    <div className="row">
                        <div className="service-d-following-industries-set">
                            <div className="commom-heading">
                                <h2>Our Industries</h2>
                                <p>Sed et orci volutpat, pharetra nunc eu, ultrices urna. </p>
                            </div>
                            <div className="">
                                <Link className="common-project-button" href="/contact" style={{ textDecoration: "none" }}>
                                    Start a project with us
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 g-lg-3">
                                    <div className="col">
                                        <div className="">
                                            <div>
                                                <img src={heathcare.src} alt="" className="w-100" />
                                            </div>
                                            <div className="sercise-d-industries-blog bg-blue">
                                                <h3>Healthcare</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <div>
                                                <img src={Retail.src} alt="" className="w-100" />
                                            </div>
                                            <div className="sercise-d-industries-blog bg-green">
                                                <h3>Retail & Ecommerce</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <div>
                                                <img src={Education.src} alt="" className="w-100" />
                                            </div>
                                            <div className="sercise-d-industries-blog bg-pink">
                                                <h3>Education</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <div>
                                                <img src={Realestate.src} alt="" className="w-100" />
                                            </div>
                                            <div className="sercise-d-industries-blog bg-yellow">
                                                <h3>Real Estate</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <div>
                                                <img src={Event.src} alt="" className="w-100" />
                                            </div>
                                            <div className="sercise-d-industries-blog bg-blue">
                                                <h3>Events</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <div>
                                                <img src={Finance.src} alt="" className="w-100" />
                                            </div>
                                            <div className="sercise-d-industries-blog bg-green">
                                                <h3>Finance</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <div>
                                                <img src={Food.src} alt="" className="w-100" />
                                            </div>
                                            <div className="sercise-d-industries-blog bg-pink">
                                                <h3>Food & Restaurants</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <div>
                                                <img src={Media.src} alt="" className="w-100" />
                                            </div>
                                            <div className="sercise-d-industries-blog bg-yellow">
                                                <h3>Media & Entertainment</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END OUR INDUSTRIES */}
        </>
    );
};

export default Service_details;
