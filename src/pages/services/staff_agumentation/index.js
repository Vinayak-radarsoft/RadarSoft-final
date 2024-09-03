import staffmember from "../../../../public/assets/media/staff/staffmember.png";
import common_contact from "../../../../public/assets/media/common/common-contact.png";
import react from "../../../../public/assets/media/staff/react.png";
import angular from "../../../../public/assets/media/staff/angular.png";
import express from "../../../../public/assets/media/staff/express.png";
import js from "../../../../public/assets/media/staff/js.png";
import JavaScript from "../../../../public/assets/media/staff/JavaScript.png";
import flutter from "../../../../public/assets/media/staff/flutter.png";
import linux from "../../../../public/assets/media/staff/linux.png";
import Python from "../../../../public/assets/media/staff/Python.png";
import php from "../../../../public/assets/media/staff/php.png";
import mongodb from "../../../../public/assets/media/staff/mongodb.png";
import apache from "../../../../public/assets/media/staff/apache.png";
import redis from "../../../../public/assets/media/staff/redis.png";
import java from "../../../../public/assets/media/staff/java.png";
import PostGreSQL from "../../../../public/assets/media/staff/PostGreSQL.png";
import mysql from "../../../../public/assets/media/staff/mysql.png";
import google from "../../../../public/assets/media/staff/google.png";
import AmazonWeb from "../../../../public/assets/media/staff/AmazonWeb.png";
import azure from "../../../../public/assets/media/staff/azure.png";
import our from "../../../../public/assets/media/staff/our.png";
import acess from "../../../../public/assets/media/staff/acess.png";
import resource from "../../../../public/assets/media/staff/resource.png";
import talent from "../../../../public/assets/media/staff/talent.png";
import initial from "../../../../public/assets/media/staff/initial.png";
import Arrow from "../../../../public/assets/media/staff/Arrow.png";
import Link from "next/link";

const Staff = () => {
  return (
    <>
      {/* START STAF */}
      <section className="banner-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="banner-left-side-area commom-heading">
                <h2>
                  Enhance Your Team with Our Expert Staff Augmentation Service
                </h2>
                <p>
                  Staff augmentation is a flexible outsourcing strategy that
                  enables businesses to fill specific skill gaps and meet
                  project demands by hiring external professionals on a
                  temporary or project basis. This approach allows companies to
                  scale their workforce according to their immediate needs
                  without the long-term commitments associated with full-time
                  employment.
                </p>
                <div className="top-space">
                  <a className="common-project-button" href="">
                    Get in touch
                  </a>
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
      {/* END STAF */}

      {/* START STAY AHED */}
      <section className="service-contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div>
                <div className="staff-stay">
                  <h2>
                    Why Do You Need <br />
                    Staff Augmentation
                  </h2>
                  <p>
                    Harness the power of digital transformation to outperform
                    your competitors. Enhance efficiency, innovate faster, and
                    adapt to market changes seamlessly.
                  </p>
                  <div className="staff-d-stay">
                    <ul>
                      <li>
                        Quickly onboard professionals with diverse, exact skills
                        needed for your project.
                      </li>
                      <li>
                        Lower recruiting and training costs with flexible budget
                        allocation.
                      </li>
                      <li>
                        Easily scale your team up or down to meet project
                        demands and manage resources efficiently.
                      </li>
                      <li>
                        Focus on core functions and strategic initiatives while
                        maintaining project momentum.
                      </li>
                      <li>
                        Quickly find the right talent to ensure projects stay on
                        track and meet deadlines.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 digital_relative">
              <div className="staff_sec_bg">
                <img src={staffmember.src} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END STAY AHED */}

      {/* START OUR PROCESS */}
      <section className="our-process">
        <div className="container">
          <div className="row">
            <div className="commom-heading">
              <h2>Our Process</h2>
              <p>
                Our process ensures seamless integration of top-notch talent
                into your projects. We begin by understanding your specific
                requirements, then meticulously select and onboard the right
                candidates. Throughout the project, we provide continuous
                support and management to ensure alignment with your goals and
                drive successful outcomes.
              </p>
            </div>
            <div class="staff-process-container">
              <div class="staff-process-step rightarrow research">
                <img src={acess.src} alt="Research Icon" />
                <p>Access to Specialsed Talent</p>
              </div>
              <div class="process-arrow">&#8594;</div>
              <div class="staff-process-step rightarrow design">
                <img src={resource.src} alt="Design Icon" />
                <p>Resource Selection</p>
              </div>
              <div class="process-arrow">&#8594;</div>
              <div class="staff-process-step rightarrow development">
                <img src={talent.src} alt="Development Icon" />
                <p>Talent Onboarding</p>
              </div>
              <div class="process-arrow">&#8594;</div>
              <div class="staff-process-step rightarrow testing">
                <img src={initial.src} alt="Testing Icon" />
                <p>Ongoing Support and Management</p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-3 g-lg-5">
              <div class="col">
                <div className="service-d-stay">
                  <ul>
                    <li>
                      <h6>
                        <strong>Access to Specialized Talent</strong>
                      </h6>
                      <p>
                        We identify your project requirements and match you with
                        the right experts.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="service-d-stay">
                  <ul>
                    <li>
                      <h6>
                        <strong>Resource Selection</strong>
                      </h6>
                      <p>
                        Our rigorous vetting ensures we find the best candidates
                        for your needs.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col">
                <div className="service-d-stay">
                  <ul>
                    <li>
                      <h6>
                        <strong>Talent Onboarding</strong>
                      </h6>
                      <p>
                        We facilitate a smooth integration process for new team
                        members.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="service-d-stay">
                  <ul>
                    <li>
                      <h6>
                        <strong>Ongoing Support and Management</strong>
                      </h6>
                      <p>
                        We offer continuous support and evaluations to keep your
                        project on track.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OUR PROCESS */}

      {/* START OUR EXPERTISE*/}
      <section className="our-contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5 service-set-box">
              <div>
                <div className="staff-stay">
                  <h2>Our Expertise</h2>
                  <p>
                    We specialize in providing top-notch professionals across
                    various fields. Our team consists of experts in software
                    development, UI/UX design, digital marketing, and quality
                    assurance.
                  </p>
                  <div className="staff-d-stay">
                    <ul>
                      <li>
                        <h6>
                          <strong>Developers</strong>
                        </h6>
                        Experts in Java, Python, .NET, LAMP, MEAN, MERN,
                        Flutter, React Native.
                      </li>
                      <li>
                        <h6>
                          <strong>Designers</strong>
                        </h6>
                        Talented UI/UX creators for intuitive user experiences.
                      </li>
                      <li>
                        <h6>
                          <strong>Business Analysts</strong>
                        </h6>
                        Professionals who can Gather requirements aligned with
                        business goals.
                      </li>
                      <li>
                        <h6>
                          <strong>Project Managers</strong>
                        </h6>
                        Oversee on-time, on-budget project delivery.
                      </li>
                      <li>
                        <h6>
                          <strong>QA Engineers</strong>
                        </h6>
                        Ensure rigorous testing and reliable application
                        performance.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-7 digital_relative">
              <div className="our_img">
                <img src={our.src} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OUR EXPERTISE */}

      {/* START SERVICE */}
      <section className="staff-following">
        <div className="container">
          <div className="row">
            <div className="service-d-following-head commom-heading">
              <h3>We have experts in following </h3>
              <h2>Tools & technologies</h2>
            </div>
            <div class="container">
              <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3 g-lg-4">
                <div class="col">
                  <div class="tools">
                    <img src={react.src} alt=""></img>
                    <h5>Reactjs</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={angular.src} alt=""></img>
                    <h5>Angularjs</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={express.src} alt=""></img>
                    <h5>Expressjs</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={js.src} alt=""></img>
                    <h5>Nodejs</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={JavaScript.src} alt=""></img>
                    <h5>JavaScript</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={flutter.src} alt=""></img>
                    <h5>Flutter</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={linux.src} alt=""></img>
                    <h5>Linux</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={Python.src} alt=""></img>
                    <h5>Python</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={php.src} alt=""></img>
                    <h5>Php</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={mongodb.src} alt=""></img>
                    <h5>MongoDB</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={apache.src} alt=""></img>
                    <h5>Apache</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={redis.src} alt=""></img>
                    <h5>Redis</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={java.src} alt=""></img>
                    <h5>Java</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={PostGreSQL.src} alt=""></img>
                    <h5>PostGreSQL</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={mysql.src} alt=""></img>
                    <h5>MySQL</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={AmazonWeb.src} alt=""></img>
                    <h5>AWS</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={google.src} alt=""></img>
                    <h5>Google Cloud</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tools">
                    <img src={azure.src} alt=""></img>
                    <h5>Azure</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SERVICE */}

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
                    <Link className="common-project-button" href="">
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

export default Staff;
