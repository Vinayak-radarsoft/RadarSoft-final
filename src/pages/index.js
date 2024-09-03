import Head from "next/head";
import Image from "next/image";
import fill from "../../public/assets/media/fill.png";
import merkle from "../../public/assets/media/Merkle_black.svg.png";
import sliceBlack from "../../public/assets/media/Slice_black.svg.png";
import bevi from "../../public/assets/media/bevi-2.svg fill.png";
import ey from "../../public/assets/media/ey_eVyZsxY.svg fill.png";
import coca from "../../public/assets/media/coca_cola-2.svg fill.png";
import RD_Process from "../../public/assets/gif/RapidDesign.gif";
import rapid_dev from "../../public/assets/gif/RapidDevelopment.gif";
import continious_iteration from "../../public/assets/gif/itrations.gif";
import service1 from "../../public/assets/media/service-1.png";
import service2 from "../../public/assets/media/service-2.png";
import service3 from "../../public/assets/media/service-3.png";
import service4 from "../../public/assets/media/service-4.png";
import vector1 from "../../public/assets/media/Vector.png";
import vector2 from "../../public/assets/media/Vector (1).png";
import realmock8 from "../../public/assets/media/Real Mocks 8.png";
import realmock9 from "../../public/assets/media/Real Mocks 9.png";
import rectangle54 from "../../public/assets/media/office-image.png";
import workLogo from "../../public/assets/media/work-logo.png";
import user_pic1 from "../../public/assets/media/user_pic1.png";
import workLogo2 from "../../public/assets/media/work-logo2.png";
import workLogo3 from "../../public/assets/media/work-logo3.png";
import quality from "../../public/assets/gif/quality.gif";
import digitalTransformation from "../../public/assets/media/digitalTransformation.png";
import staff from "../../public/assets/media/staff.png";

import Link from "next/link";
import { useState } from "react";
import { handleServices, openApplyModal } from "@/components/common/data";
import Apply from "@/components/model/Apply";
import { useRouter } from "next/router";
import axios from "axios";


export default function Home() {
  const router = useRouter();
  const [activeAccordion, setActiveAccordion] = useState(1);
  const [backgroundClass, setBackgroundClass] = useState("unique-area-1");

  const handleAccordionClick = (accordionNumber) => {
    setTimeout(() => {
      setActiveAccordion(accordionNumber);
      switch (accordionNumber) {
        case 2:
          setBackgroundClass("unique-area-2");
          break;
        case 3:
          setBackgroundClass("unique-area-3");
          break;
        case 4:
          setBackgroundClass("unique-area-4");
          break;
        default:
          setBackgroundClass("unique-area-1");
          break;
      }
    }, 400);
  };

  const handleApplyModel = () => {
    openApplyModal();
  };

  const handleServiceRoute = () => {
    return router.push("/services");
  };

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = {
      email, fullName, phoneNumber
    }
    try {
      const response = await axios.post(`https://radar-soft-final.vercel.app/api/hello`, form)
      if (response.status === 200) {
        console.log("response here", response);
        setEmail("");
        setFullName("");
        setPhoneNumber("");
        alert("Your Request Submitted successfully.");
      }
    } catch (error) {
      console.log("error in reques", error);
    }
    console.log("data here", form);
  }
  return (
    <>
      <Head>
        <title>RadarSoft Technologies</title>
        <meta name="description" content="RadarSoft Technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`main`}>
        {/* <!--banner area started--> */}
        <section className="banner-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-left-side-area">
                  <h1 className={`banner-heading`}>
                    Crafting Digital Dreams Design, Develop, Deliver
                  </h1>
                  <p className="banner-paragraph">
                    At RadarSoft Technologies, we bring your digital dreams to
                    life with our all-inclusive solutions. Our team excels in
                    creating innovative designs, developing seamless
                    applications, and delivering projects on time. With a blend
                    of creativity and advanced technology, we ensure your vision
                    becomes a reality. Let us help you stand out in the digital
                    landscape with our expert services.
                  </p>
                  <button
                    className="banner-button"
                    onClick={() => router.push("/contact")}
                  >
                    Contact us
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-right-side-area">
                  <div className="banner-right-side-box">
                    <h3 className="banner-right-side-h3">
                      Book an Appointment
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <input type="text" name="FullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name*" required />
                      <input type="text" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Id*" required />
                      <input type="number" placeholder="Phone No*" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                      <button className="banner-right-side-button" type="submit">
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
        {/* <!--banner area finished--> */}

        {/* <!--logo promtion --> */}
        <section className="logo-promtion">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="logo-promotion-heading">
                  Companies we have worked with
                </h1>
                <div className="logo-promotion-images">
                  <Image src={fill} alt="" />
                  <Image src={merkle} alt="" />
                  <Image src={sliceBlack} alt="" />
                  <Image src={bevi} alt="" />
                  <Image src={ey} alt="" />
                  <Image src={coca} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--logo promtion finished--> */}

        {/* <!--unique area--> */}
        <section className={`unique-area col-md-12 ${backgroundClass}`}>
          <div className="container">
            <div className="row">
              <div className="unique-area-label">
                <h1
                  className={`unique-area-heading col-lg-8 col-12 m-0 ${activeAccordion === 3 && "text-style"
                    }`}
                >
                  Discover how we work at
                  <br />
                  RadarSoft Technologies
                </h1>
                <div className="col-lg-4 mt-lg-0 mt-4 col-12">
                  <button
                    className={`${activeAccordion === 3 || activeAccordion === 4
                      ? "btn-style"
                      : "unique-area-button"
                      }`}
                    onClick={handleServiceRoute}
                  >
                    Discover how we work
                  </button>
                </div>
              </div>
              <hr
                style={
                  activeAccordion === 3
                    ? { border: "1px solid #ffffff", opacity: "1" }
                    : {}
                }
              />
              <div className="unique-area-details">
                <div className="row">
                  <div className="unique-area-left-side col-lg-6 col-12">
                    {activeAccordion === 1 && (
                      <Image
                        id="img-rapid-design"
                        className="unique-area-img unique-area-img-1 img-fluid active"
                        src={RD_Process}
                        alt="Rapid Design"
                      />
                    )}
                    {activeAccordion === 2 && (
                      <Image
                        id="img-rapid-development"
                        className="unique-area-img unique-area-img-1 img-fluid active"
                        src={rapid_dev}
                        alt="Rapid Development"
                      />
                    )}
                    {activeAccordion === 3 && (
                      <Image
                        id="img-continuous-iterations"
                        className="unique-area-img unique-area-img-1 img-fluid active"
                        src={continious_iteration}
                        alt="Continuous Iterations"
                      />
                    )}
                    {activeAccordion === 4 && (
                      <Image
                        id="img-continuous-iterations"
                        className="unique-area-img unique-area-img-1 img-fluid active"
                        src={quality}
                        alt="Continuous Iterations"
                      />
                    )}
                  </div>
                  <div
                    className="unique-area-accordion accordion col-lg-6 col-12"
                    id="accordionExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className={`accordion-header ${activeAccordion === 3 && "border-style"
                          }`}
                        id="headingOne"
                      >
                        <button
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-controls="collapseOne"
                          className={`accordion-button ${activeAccordion === 3 && "text-style"
                            } ${activeAccordion === 1
                              ? "text-font-style"
                              : "collapsed"
                            }`}
                          onClick={() => handleAccordionClick(1)}
                          aria-expanded={activeAccordion === 1}
                        >
                          Rapid Design
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${activeAccordion === 1 ? "show" : ""
                          }`}
                        id="collapseOne"
                        // class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div
                          className={`accordion-body ${activeAccordion === 3 && "text-style"
                            }`}
                        >
                          Our Rapid Design phase focuses on quickly translating
                          your vision into real world designs. We create
                          user-centric designs that align perfectly with our
                          client’s business goals.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className={`accordion-header ${activeAccordion === 3 && "border-style"
                          }`}
                        id="headingTwo"
                      >
                        <button
                          className={`accordion-button 
                            ${activeAccordion === 3 && "text-style"}
                            ${activeAccordion === 2
                              ? "text-font-style"
                              : "collapsed"
                            }`}
                          type="button"
                          onClick={() => handleAccordionClick(2)}
                          aria-expanded={activeAccordion === 2}
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-controls="collapseTwo"
                        >
                          Rapid Development
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${activeAccordion === 2 ? "show" : ""
                          }`}
                        id="collapseTwo"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div
                          className={`accordion-body ${activeAccordion === 3 && "text-style"
                            }`}
                        >
                          In our Rapid Development stage, we leverage agile
                          methodologies and advanced technologies to smoothly
                          turn designs into functional products.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className={`accordion-header ${activeAccordion === 3 && "border-style"
                          }`}
                        id="headingThree"
                      >
                        <button
                          className={`accordion-button 
                                ${activeAccordion === 3 && "text-style"}
                            ${activeAccordion === 3
                              ? "text-font-style"
                              : "collapsed"
                            }`}
                          type="button"
                          onClick={() => handleAccordionClick(3)}
                          aria-expanded={activeAccordion === 3}
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-controls="collapseThree"
                        >
                          Continuous Iterations
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${activeAccordion === 3 ? "show" : ""
                          }`}
                        id="collapseThree"
                        // class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div
                          className={`accordion-body ${activeAccordion === 3 && "text-style"
                            }`}
                        >
                          We believe in constant improvement. Our Continuous
                          Iterations approach involves regular feedback loops
                          and incremental enhancements.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className={`accordion-header ${activeAccordion === 3 && "border-style"
                          }`}
                        id="headingFour"
                      >
                        <button
                          className={`accordion-button 
                                ${activeAccordion === 3 && "text-style"}
                            ${activeAccordion === 4
                              ? "text-font-style"
                              : "collapsed"
                            }`}
                          type="button"
                          onClick={() => handleAccordionClick(4)}
                          aria-expanded={activeAccordion === 4}
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-controls="collapseFour"
                        >
                          Quality Assurance
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${activeAccordion === 4 ? "show" : ""
                          }`}
                        id="collapseFour"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div
                          className={`accordion-body ${activeAccordion === 3 && "text-style"
                            }`}
                        >
                          Quality is at the core of everything we do. Our strict
                          Quality Assurance process involves comprehensive
                          testing at every stage, guaranteeing a robust,
                          bug-free solution that performs flawlessly in
                          real-world scenarios.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--unique area finished--> */}

        {/* <!--our service area started--> */}
        <section className="service-area col-md-12">
          <div className="container">
            <div className="row">
              <div className="mb-md-5 mb-3">
                <h1 className="service-area-upper-side-heading m-0">
                  Our Services
                </h1>
                <span className="service-para">
                  <p className="service-area-upper-side-paragraph mt-3 mb-0">
                    Explore our comprehensive range of services designed to meet
                    your unique business needs. From cutting-
                    <br />
                    edge design and development to effective digital marketing,
                    we've got you covered.
                  </p>
                  {/* <p className="service-area-upper-paragraph m-0">
                    <u>View all</u>
                  </p> */}
                  <div className="col-lg-4 mt-lg-0 mt-4 col-12">
                    <button
                      className="unique-area-button"
                      onClick={handleServiceRoute}
                    >
                      Discover how we work
                    </button>
                  </div>
                </span>
              </div>
              <div
                className="col-lg-3 col-md-6 my-lg-0 my-3"
                style={{ cursor: "pointer" }}
                onClick={() => handleServices(router, 1)}
              >
                <div className="service-boxe-1">
                  <Image
                    className="service img-fluid"
                    src={digitalTransformation}
                    alt="ewf"
                  />
                  <h6>Digital Transformation</h6>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 my-lg-0 my-3"
                style={{ cursor: "pointer" }}
                onClick={() => handleServices(router, 3)}
              >
                <div className="service-boxe-2">
                  <Image className="service img-fluid" src={staff} alt="ewf" />
                  <h6>Staff Augmentation</h6>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 my-lg-0 my-3"
                style={{ cursor: "pointer" }}
                onClick={() => handleServices(router, 2)}
              >
                <div className="service-boxe-3">
                  <Image
                    className="service img-fluid"
                    src={service3}
                    alt="ewf"
                  />
                  <h6>UI/UX Design</h6>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 my-lg-0 my-3"
                style={{ cursor: "pointer" }}
                onClick={() => handleServices(router, 2)}
              >
                <div className="service-boxe-4">
                  <Image
                    className="service img-fluid"
                    src={service1}
                    alt="ewf"
                  />
                  <h6>Mobile app development</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--our service area closed--> */}

        {/* <!--our work area started--> */}
        <section className="work-area col-md-12">
          <div className="container">
            <div className="row">
              <div className="mb-md-5 mb-3">
                <h1 className="work-area-upper-heading m-0">Our Work</h1>
                <span className="work-para mt-3">
                  <p className="work-area-upper-paragraph m-0">
                    Discover our successful projects and see how we've helped
                    businesses to grow.
                  </p>
                  <p className="work-area-upper-paragraph m-0" style={{ cursor: "pointer" }}
                    onClick={() => router.push("/casestudy")}>
                    <u> Read our all case studies</u>
                  </p>
                </span>
              </div>

              <div className="work-area-lower-side">
                <div className="work-lower-left col-md-6">
                  <div className="work-area-logo">
                    <Image className="work-logo" src={vector1} alt="1" />
                    <Image className="work-logo" src={vector2} alt="2" />
                  </div>
                  <h1 className="work-area-lower-heading">
                    Abhyan is an Indian e-learning <br /> platform offering
                    Courses in
                    <br />
                    Regional Languages
                  </h1>
                  <p className="work-area-lower-paragraph">
                    We worked on Abhyan, bridging the gap between technology and{" "}
                    <br />
                    education. Our skill development courses provide essential
                    job
                    <br />
                    skills to students, graduates, and professionals, helping
                    them
                    <br />
                    advance in their careers.
                  </p>
                  <div className="work-area-log">
                    <button className="work-area-lower-button"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/casestudy")}
                    >
                      Read full case study <i className="bi bi-arrow-right"></i>
                    </button>
                    <Link className="work-area-lower-anchor" href="/casestudy">
                      <u> Read our all case studies</u>
                    </Link>
                  </div>
                </div>
                <div className="work-lower-right col-md-6">
                  <Image
                    className="work-picture-1 img-fluid"
                    // src={realmock8}
                    src={realmock9}
                    alt="3"
                  />
                  <Image
                    className="work-picture-2 img-fluid"
                    src={realmock9}
                    alt="3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--our work area closed--> */}

        {/* <!--experience area started--> */}
        <section className="experience-area col-md-12">
          <div className="container">
            <div className="row">
              <div className="mb-md-5 mb-3">
                <h1 className="experience-area-heading">
                  Over 5+ years of hands-on experience, we bring a wealth of
                  knowledge and expertise to every project.
                </h1>
                <p className="experience-area-paragraph mt-4">
                  Our track record speaks for itself, delivering innovative
                  solutions across diverse industries and technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="experience-lower">
            <div className="container">
              <div className="row">
                <div className="key-status col-lg-5 col-12">
                  <h2 className="experience-low-left-heading">Key Stats</h2>
                  <hr />
                  <p className="experience-low-left-paragraph">
                    At Radarsoft, we pride ourselves on our extensive experience
                    and proven results. Our team of skilled professionals has
                    successfully delivered cutting-edge solutions to a wide
                    range of clients across multiple sectors.
                  </p>
                </div>
                <div className="col-lg-7 col-12">
                  <div className="exp-right-upper">
                    <span className="exp-span">
                      <h1 className="exp-low-heading">100+</h1>
                      <p className="exp-low-para">Satisfied Clients</p>
                    </span>
                    <span className="exp-span">
                      <h1 className="exp-low-heading">20+</h1>
                      <p className="exp-low-para">Industries Served</p>
                    </span>
                  </div>
                  <hr className="exp-2" />
                  <div className="exp-right-low">
                    <span className="exp-span">
                      <h1 className="exp-low-heading">25</h1>
                      <p className="exp-low-para">Expert Team Members</p>
                    </span>
                    <span className="exp-span">
                      <h1 className="exp-low-heading">120</h1>
                      <p className="exp-low-para">Projects Completed</p>
                    </span>
                    <span className="exp-span">
                      <h1 className="exp-low-heading">5+</h1>
                      <p className="exp-low-para">Years of Excellence</p>
                    </span>
                    <span className="exp-span">
                      <h1 className="exp-low-heading">3k+</h1>
                      <p className="exp-low-para">
                        Lines of code commits per month
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--experience area closed--> */}

        {/* <!--about us started--> */}
        <section className="about-us-area col-md-12">
          <div className="container">
            <div className="row justify-content-between">
              <div className="about-us-left-side col-lg-5 col-12">
                <h1 className="about-us-left-heading">About Us</h1>
                <p className="about-us-left-paragraph m-0">
                  At Radarsoft Technologies, we are passionate about
                  transforming digital visions into reality. With over 5 years
                  of industry experience, our team of dedicated professionals
                  specializes in delivering cutting-edge IT solutions tailored
                  to meet the unique needs of businesses across diverse sectors.
                  <br />
                  <br />
                  We pride ourselves on our innovative unique process, which
                  combines rapid design and development with rigorous quality
                  assurance to ensure superior results. At Radarsoft, we don't
                  just build software; we craft digital experiences that propel
                  businesses forward in the digital age.
                </p>
                <button className="about-us-left-button" style={{ cursor: "pointer" }}
                  onClick={() => router.push("/about")}>
                  View in detail <i className="bi bi-arrow-right"></i>
                </button>
              </div>
              <div className="about-us-right-side col-lg-6 col-12">
                <Image
                  className="about-image img-fluid"
                  src={rectangle54}
                  alt="frr"
                />
                <div className="about-box">
                  <span className="mb-4">
                    <h6>Join our team</h6>
                    <p className="about-box-paragraph m-0">
                      If you want to grow and get better.
                    </p>
                  </span>
                  <div className="text-end about-box-button">
                    <button
                      type="button"
                      onClick={handleApplyModel}
                      className="btn btn-primary"
                    >
                      Apply now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--about us closed--> */}

        {/* <!--stats area started--> */}
        <section className="stats-area col-md-12">
          <div className="container">
            <div className="row">
              <div className="text-center mb-lg-5 mb-0">
                <h1 className="stats-area-heading">Our Work Stats</h1>
                <p className="stats-area-paragraph">
                  At Radarsoft, we take pride in our diverse portfolio of
                  successful projects across various industries. Each case study
                  represents our commitment to delivering tailored, high-quality
                  solutions that drive real business value. From startups to
                  enterprise-level organizations, we've helped our clients
                  overcome challenges, streamline operations, and achieve
                  digital transformation.
                </p>
              </div>

              <div className="stats-images">
                <div className="row">
                  <div className="col-lg-4 col-12 my-lg-0 my-3">
                    <div className="worklife-express">
                      <div className="work-logo">
                        <Image className="img-fluid" src={workLogo} />
                      </div>
                      <p>
                        Working with RadarSoft was great! Their professionalism
                        and expertise shone through, delivering results beyond
                        our expectations. Highly recommended!
                      </p>
                      <user>
                        <Image className="img-fluid" src={user_pic1} />
                        <span>
                          <h6>Tim David</h6>
                          <p style={{ fontSize: "14px" }}>
                            Vice President Abhyan
                          </p>
                        </span>
                      </user>
                    </div>
                  </div>

                  <div className="col-lg-4 col-12 my-lg-0 my-3">
                    <div
                      className="worklife-express"
                      style={{ background: "#002758" }}
                    >
                      <div className="work-logo">
                        <Image className="img-fluid" src={workLogo2} />
                      </div>
                      <p>
                        Working with RadarSoft was great! Their professionalism
                        and expertise shone through, delivering results beyond
                        our expectations. Highly recommended!
                      </p>
                      <user>
                        <Image className="img-fluid" src={user_pic1} />
                        <span>
                          <h6>Tim David</h6>
                          <p style={{ fontSize: "14px" }}>
                            Vice President Abhyan
                          </p>
                        </span>
                      </user>
                    </div>
                  </div>

                  <div className="col-lg-4 col-12 my-lg-0 my-3">
                    <div
                      className="worklife-express"
                      style={{ background: "#FFFFFF", color: "#000000" }}
                    >
                      <div className="work-logo">
                        <Image className="img-fluid" src={workLogo3} />
                      </div>
                      <p>
                        Working with RadarSoft was great! Their professionalism
                        and expertise shone through, delivering results beyond
                        our expectations. Highly recommended!
                      </p>
                      <user>
                        <Image className="img-fluid" src={user_pic1} />
                        <span>
                          <h6>Tim David</h6>
                          <p style={{ fontSize: "14px" }}>
                            Vice President Abhyan
                          </p>
                        </span>
                      </user>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--stats area finished--> */}
      </main>
      <Apply />
    </>
  );
}
