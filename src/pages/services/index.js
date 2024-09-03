
import figma from "../../../public/assets/media/service/figma.png";
import ps from "../../../public/assets/media/service/ps.png";
import xd from "../../../public/assets/media/service/xd.png";
import ai from "../../../public/assets/media/service/ai.png";
import android from "../../../public/assets/media/service/android.png";
import ios from "../../../public/assets/media/service/ios.png";
import mobile3 from "../../../public/assets/media/service/mobile3.png";
import mobile4 from "../../../public/assets/media/service/mobile4.png";
import html from "../../../public/assets/media/service/Html.png";
import css from "../../../public/assets/media/service/css.png";
import javascript from "../../../public/assets/media/service/javascript.png";
import bootstrap from "../../../public/assets/media/service/bootstrap.png";
import react from "../../../public/assets/media/service/react.png";
import angular from "../../../public/assets/media/service/angular.png";
import mysql from "../../../public/assets/media/service/mysql.png";
import php from "../../../public/assets/media/service/php.png";
import red from "../../../public/assets/media/service/red.png";
import java from "../../../public/assets/media/service/java.png";
import js from "../../../public/assets/media/service/js.png";
import mongodb from "../../../public/assets/media/service/mongodb.png";
import digital1 from "../../../public/assets/media/service/digital1.png";
import digital2 from "../../../public/assets/media/service/digital2.png";
import github from "../../../public/assets/media/service/github.png";
import a from "../../../public/assets/media/service/a.png";
import aws from "../../../public/assets/media/service/aws.png";
import digital6 from "../../../public/assets/media/service/digital6.png";
import common_contact from "../../../public/assets/media/common/common-contact.png";
import Link from "next/link";
import { handleServices } from "@/components/common/data";
import { useRouter } from "next/router";

const Services = () => {
    const router = useRouter();
    return (
        <>
            {/* START HOW WE WORK */}
            <section className="service">
                <div className="container-fluid service-banner mt-5">
                    <div className="row">
                        <div className="service-sec">
                            <h2>How we work</h2>
                            <p>
                                We rapidly turn your ideas into user-friendly designs that match
                                <br /> your business goals. Our main focus is development, using
                                agile
                                <br /> methods and modern technology to build functional
                                products.
                                <br /> We ensure continuous improvement with regular feedback
                                and
                                <br /> small updates. At every step, we thoroughly test to
                                guarantee
                                <br /> reliable, bug-free solutions that work perfectly in
                                real-world
                                <br /> situations.
                            </p>
                            <button className="service-button">Know more</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* END HOW WE WORK */}

            {/* START OUR SERVICE */}
            <section className="service-cards">
                <div className="container mt-5 mb-5">
                    <div className="commom-heading">
                        <h2>Our Services</h2>
                    </div>
                    <div className="row g-4">
                        <div
                            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleServices(router, 1)}
                        >
                            <div className="service-card service-bottom">
                                <h4>UX/UI Design & Branding</h4>
                                <div className="normal-desc service-description">
                                    <ul>
                                        <li>
                                            We create intuitive and visually appealing user
                                            interfaces.
                                        </li>
                                        <li>We design according to your brand and user needs.</li>
                                    </ul>
                                </div>
                                <div className="row row-cols-4 row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-2 g-lg-3">
                                    <div className="col">
                                        <img src={figma.src} alt="Figma" />
                                    </div>
                                    <div className="col">
                                        <img src={ps.src} alt="Photoshop" />
                                    </div>
                                    <div className="col">
                                        <img src={xd.src} alt="Adobe XD" />
                                    </div>
                                    <div className="col">
                                        <img src={ai.src} alt="Illustrator" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleServices(router, 2)}
                        >
                            <div className="service-card service-bottom">
                                <h4>Mobile App Development</h4>
                                <div className="service-description">
                                    <ul>
                                        <li>
                                            We develop high-performance apps for iOS and Android.
                                        </li>
                                        <li>
                                            Our apps ensure seamless user experiences across devices.
                                        </li>
                                    </ul>
                                </div>
                                <div className="row row-cols-4 row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-2 g-lg-3">
                                    <div className="col">
                                        <img src={android.src} alt="Figma" />
                                    </div>
                                    <div className="col">
                                        <img src={ios.src} alt="Photoshop" />
                                    </div>
                                    <div className="col">
                                        <img src={mobile3.src} alt="Adobe XD" />
                                    </div>
                                    <div className="col">
                                        <img src={mobile4.src} alt="Illustrator" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleServices(router, 2)}
                        >
                            <div className="service-card service-top">
                                <h4>Website Development</h4>
                                <div className="service-description">
                                    <ul>
                                        <li>
                                            We build responsive, user-friendly, and fast-loading
                                            websites.
                                        </li>
                                        <li>
                                            Our websites are optimized for speed and performance.
                                        </li>
                                    </ul>
                                </div>
                                <div className="row row-cols-4 row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-2 g-lg-3">
                                    <div className="col">
                                        <img src={html.src} alt="html" />
                                    </div>
                                    <div className="col">
                                        <img src={css.src} alt="css" />
                                    </div>
                                    <div className="col">
                                        <img src={javascript.src} alt="javascript" />
                                    </div>
                                    <div className="col">
                                        <img src={bootstrap.src} alt="bootstrap" />
                                    </div>
                                    <div className="col">
                                        <img src={react.src} alt="react" />
                                    </div>
                                    <div className="col">
                                        <img src={angular.src} alt="angular" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleServices(router, 2)}
                        >
                            <div className="service-card service-top">
                                <h4>Backend App Development</h4>
                                <div className="service-description">
                                    <ul>
                                        <li>We create robust and scalable backend systems.</li>
                                        <li>
                                            Our solutions ensure secure and efficient data handling.
                                        </li>
                                    </ul>
                                </div>
                                <div className="row row-cols-4 row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-2 g-lg-3">
                                    <div className="col">
                                        <div className="">
                                            <img src={mysql.src} alt="mysql" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <img src={php.src} alt="php" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <img src={red.src} alt="red" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <img src={java.src} alt="java" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <img src={js.src} alt="js" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <img src={mongodb.src} alt="mongodb" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleServices(router, 2)}
                        >
                            <div className="service-card service-top">
                                <h4>Digital &nbsp; Transformation</h4>
                                <div className="service-description">
                                    <ul>
                                        <li>
                                            We modernize business processes with cutting-edge digital
                                            solutions.
                                        </li>
                                        <li>
                                            Our strategies drive efficiency, keeping you ahead of
                                            competition.{" "}
                                        </li>
                                    </ul>
                                </div>
                                <div className="row row-cols-4 row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-2 g-lg-3">
                                    <div className="col">
                                        <div className="">
                                            <img src={digital1.src} alt="digital1" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <img src={digital2.src} alt="digital2" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <img src={github.src} alt="github" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <img src={a.src} alt="a" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <img src={aws.src} alt="aws" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <img src={digital6.src} alt="digital6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleServices(router, 3)}
                        >
                            <div className="service-card service-top">
                                <h4>Staff Augmentation</h4>
                                <div className="service-description">
                                    <ul>
                                        <li>
                                            We offer skilled professionals to boost your team’s
                                            productivity.
                                        </li>
                                        <li>
                                            Our flexible staffing solutions ensure you have the right
                                            talent.
                                        </li>
                                    </ul>
                                </div>
                                <div className="row row-cols-4 row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-2 g-lg-3">
                                    <div className="col">
                                        <div>
                                            <img src={figma.src} alt="Figma" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <img src={ps.src} alt="Photoshop" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <img src={xd.src} alt="Adobe XD" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <img src={ai.src} alt="Illustrator" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleServices(router, 2)}
                        >
                            <div className="service-card service-top">
                                <h4>UX/UI Design & Branding</h4>
                                <div className="service-description">
                                    <ul>
                                        <li>
                                            We create intuitive and visually appealing user
                                            interfaces.
                                        </li>
                                        <li>We design according to your brand and user needs.</li>
                                    </ul>
                                </div>
                                <div className="row row-cols-4 row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-2 g-lg-3">
                                    <div className="col">
                                        <div>
                                            <img src={mysql.src} alt="mysql" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <img src={php.src} alt="php" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <img src={red.src} alt="red" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <img src={java.src} alt="java" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <img src={js.src} alt="js" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <img src={mongodb.src} alt="mongodb" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END OUR SERVICE */}

            {/* START COMMON CONTACT */}
            <section className="common-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="case_d_con">
                                <img src={common_contact.src} alt="" className="w-100" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 service-set-box">
                            <div>
                                <div className="sub-text-heading">
                                    <h3>Want to know more! Get in touch with our team.</h3>
                                    <p className="normal-desc">
                                        Chat with us now to get personalized guidance and ensure all
                                        your concerns are addressed promptly and accurately.
                                    </p>
                                    <div className="">
                                        <Link className="common-project-button" href="/contact">
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END COMMON CONTACT */}
        </>
    );
};

export default Services;
